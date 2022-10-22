# Jest: CI Sharding

## Introduction

This repository shows how we can take a test suite and split the execution evenly across numerous jobs. The advantage is that as suites become larger we can continue to shard it and scale the number of jobs accordingly to keep workflow durations as quick as possible.

| Without Sharding | With Sharding |
| ---------------- | ------------- |
| 03mins 40secs    | 01mins 59secs |

## Further Information

- [Jest `--shard`](https://jestjs.io/docs/cli#--shard)
- [Github Actions - About Matrix Strategies](https://docs.github.com/en/actions/using-jobs/using-a-matrix-for-your-jobs#about-matrix-strategies)
- [Jest Shard within Github Actions](https://remarkablemark.org/blog/2022/05/13/jest-shard-test-github-actions/)
