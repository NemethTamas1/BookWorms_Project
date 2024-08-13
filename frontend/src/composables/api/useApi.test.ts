import { expect, test, vi } from 'vitest'
import { useGetBooks } from './useApi'
import { afterEach, beforeEach, describe, it } from 'node:test'
import type { Book } from '@/models/Book'
import type { Application } from '@/models/Application'
import axios from 'axios'

describe('test API calls', () => {
    afterEach(() => {
        vi.resetAllMocks()
    })

    test('useGetBooks should return valid book object(s)', async () => {
        const booksResponse = {
            data: [
                {
                    "id": 1,
                    "title": "MockBook1",
                    "description": "Mockscription for MockBook1"
                },
                {
                    "id": 2,
                    "title": "MockBook2",
                    "description": "Mockscription for MockBook2"
                },
                {
                    "id": 3,
                    "title": "MockBook3",
                    "description": "Mockscription for MockBook3"
                }
            ]
        }

        vi.spyOn(axios, 'get').mockResolvedValue(booksResponse)
        await expect(useGetBooks()).resolves.toBe(booksResponse.data)
    })
})