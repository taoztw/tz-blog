---
title: fastapi 开发模板
date: 2024-08-11
lastmod: 2024-08-11
tags: ['Project']
draft: false
summary: FastApi python后端开发模板
layout: PostSimple
---

## 介绍

fastapi, sqlmodel, celery, pytest 后端开发模板

github链接: [fastapi-template](https://github.com/taoztw/starter-fastapi)

## 模型

```python

class UserBase(SQLModel):
    email: str = Field(index=True, unique=True)


class User(UserBase, table=True):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()), primary_key=True)
    password_hash: str | None = Field(default=None)
    refresh_token: str | None = Field(default=None)
```

支持access token 一天过期。
refersh token 一个月过期。

### alembic配置

> 参考 https://medium.com/@kasperjuunge/how-to-get-started-with-alembic-and-sqlmodel-288700002543

1. `alembic init migrations`
2. 修改alembic.ini配置文件，指定sqlalchemy.url

```bash
sqlalchemy.url = sqlite:///database.db
```

3. 修改migrations/env.py

```python
from sqlmodel import SQLModel
from models import *  # Import your SQLModel models here

target_metadata = SQLModel.metadata
```

4. 修改 migrations/script.py.mako

```python
import sqlmodel
```

5. 运行 `alembic revision --autogenerate -m "init"`
6. `alembic upgrade head`

## celery

发送邮件:

- 验证码邮件 html模板
- 忘记密码邮件

<div style="display: flex; justify-content: space-between; align-items: center;">
    <img src="https://tz-1256822507.cos.ap-hongkong.myqcloud.com/nextblog/20240813014209.png" alt="Image 1" style="width: 40%; height: auto;" />
    <img src="https://tz-1256822507.cos.ap-hongkong.myqcloud.com/nextblog/20240813014209.png" alt="Image 2" style="width: 40%; height: auto;" />
</div>

## SQLModel

https://sqlmodel.tiangolo.com/learn/  
实现了sqlmodel官网case, 使用sqlmodel增删改查数据。

## pytest

异步, 采用sqlite内存数据库 异步测试。

```python
import asyncio
from asyncio import current_task
from typing import AsyncGenerator

import pytest
import pytest_asyncio
from fastapi.testclient import TestClient
from httpx import AsyncClient
from sqlalchemy.orm import sessionmaker
from sqlmodel import Session, SQLModel, create_engine
from sqlmodel.pool import StaticPool

from main import app
from sqlalchemy.ext.asyncio import (
    create_async_engine,
    AsyncSession,
    AsyncConnection,
    async_scoped_session,
)
import logging

# 配置日志记录器
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


@pytest_asyncio.fixture(scope="session")
async def async_db_connection():
    # 初始化内存sql数据库
    async_engine = create_async_engine(
        "sqlite+aiosqlite://",
        connect_args={"check_same_thread": False},
        poolclass=StaticPool,
    )
    async with async_engine.begin() as conn:
        await conn.run_sync(SQLModel.metadata.create_all)
    conn = await async_engine.connect()
    try:
        yield conn
    except:
        raise
    finally:
        await conn.rollback()

    async with async_engine.begin() as conn:
        await conn.run_sync(SQLModel.metadata.drop_all)

    await async_engine.dispose()


async def __session_within_transaction(
    async_db_connection: AsyncConnection,
) -> AsyncGenerator[AsyncSession, None]:
    async_session_maker = sessionmaker(
        expire_on_commit=False,
        autocommit=False,
        autoflush=False,
        bind=async_db_connection,
        class_=AsyncSession,
    )
    transaction = await async_db_connection.begin()

    yield async_scoped_session(async_session_maker, scopefunc=current_task)

    # no need to truncate, all data will be rolled back
    await transaction.rollback()


@pytest_asyncio.fixture(scope="function")
async def async_db_session(async_db_connection: AsyncConnection):
    async for session in __session_within_transaction(async_db_connection):
        # setup some data per function
        yield session


@pytest_asyncio.fixture(scope="session")
async def async_client() -> AsyncGenerator[AsyncClient, None]:
    async with AsyncClient(
        app=app, base_url="http://localhost:5571/starter/api/v1/learn"
    ) as client:
        yield client


@pytest_asyncio.fixture(scope="session")
async def event_loop():
    policy = asyncio.get_event_loop_policy()
    loop = policy.new_event_loop()
    yield loop
    loop.close()
```
