import { expect, expectTypeOf, test, vi } from 'vitest'
import * as useApi from './useApi'
import { useGetApplications, useGetBooks, useNewUser } from './useApi'
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
                    "description": "Mocked book desc"
                }
            ]
        }

        const expectedBooksResponse = {
            data: [
                {
                    "id": 1,
                    "title": "MockBook1",
                    "description": "Mocked book desc"
                }
            ]
        }

        vi.spyOn(axios, 'get').mockResolvedValue(booksResponse)
        await expect(useGetBooks()).resolves.toBe(booksResponse.data)
        expect(await useGetBooks()).toStrictEqual(expectedBooksResponse.data)
    })


    test('useGetApplications should return valid application object(s)', async () => {
        const applicationResponse = {
            data: [
                {
                    "id": 1,
                    "book_id": 1,
                    "user_id": 1,
                    "application_status": 1,
                    "price": 0,
                    "motivational_letter": 'Ez egy kitalált motivációs levél'
                }
            ]
        }

        const expectedApplicationResponse = {
            data: [
                {
                    "id": 1,
                    "book_id": 1,
                    "user_id": 1,
                    "application_status": 1,
                    "price": 0,
                    "motivational_letter": 'Ez egy kitalált motivációs levél'
                }
            ]
        }

        vi.spyOn(axios, 'get').mockResolvedValue(applicationResponse)
        await expect(useGetApplications()).resolves.toBe(applicationResponse.data)
        expect(await useGetApplications()).toStrictEqual(expectedApplicationResponse.data)
    })

    test('useNewUser should return with a new or existing User id', async () => {
        const MockUser = {
            "id": 0,
            "first_name": '',
            "family_name": '',
            "email": '',
            "password": ''
        }
        
        const useNewUserResponse = {
            data: 1
        }

        const expectedResponse = {
            data: 1
        }

        vi.spyOn(useApi, "useNewUser")
        vi.spyOn(axios, 'post').mockResolvedValue(useNewUserResponse)
        await expect(useNewUser(MockUser)).resolves.toBe(useNewUserResponse.data)
        expect(await useNewUser(MockUser)).equal(expectedResponse.data)
        expect(useNewUser).toHaveBeenCalledWith(MockUser)
    })
})