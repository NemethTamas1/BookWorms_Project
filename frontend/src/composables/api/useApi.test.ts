import { expect, test, vi } from 'vitest'
import * as useApi from './useApi'
import { useLoggedInUserStore } from '@/stores/userStore'
import { useGetApplications, useGetBooks, useNewUser } from './useApi'
import { afterEach, describe } from 'node:test'
import axios from 'axios'
import type { User } from '@/models/User'
import { createPinia } from 'pinia'
import type { Book } from '@/models/Book'

describe('test API calls', () => {
    const mockuseLoggedInUserStore = useLoggedInUserStore(createPinia())
    afterEach(() => {
        vi.resetAllMocks()
    })

    test('useGetBooks should return valid book object(s)', async () => {
        const useGetBooksResponse = {
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

        vi.spyOn(axios, 'get').mockResolvedValue(useGetBooksResponse)
        await expect(useGetBooks()).resolves.toBe(useGetBooksResponse.data)
        expect(await useGetBooks()).toStrictEqual(expectedBooksResponse.data)
    })


    test('useGetApplications should return valid application object(s)', async () => {
        const testToken = "0"
        const useGetApplicationsResponse = {
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

        vi.spyOn(axios, 'get').mockResolvedValue(useGetApplicationsResponse)
        await expect(useGetApplications(testToken)).resolves.toBe(useGetApplicationsResponse.data)
        expect(await useGetApplications(testToken)).toStrictEqual(expectedApplicationResponse.data)
    })

    test('useNewUser should return with a new or existing User id', async () => {
        const MockUser: User = {
            "id": 1,
            "first_name": '',
            "family_name": '',
            "email": '',
            "password": '',
            "status": 1
        }

        const useNewUserResponse = {
            data: 1
        }

        vi.spyOn(useApi, "useNewUser")
        vi.spyOn(axios, 'post').mockResolvedValue(useNewUserResponse)
        await expect(useNewUser(MockUser)).resolves.toBe(1)
        expect(await useNewUser(MockUser)).equal(1)
        expect(useNewUser).toHaveBeenCalledWith(MockUser)
    })

    test('useChangeUserOrAdminData should return response.data', async () => {
        const testToken = "0"
        const MockUser: User = {
            "id": 1,
            "first_name": '',
            "family_name": '',
            "email": '',
            "password": '',
            "status": 1
        }

        const useChangeUserOrAdminDataRespone = {
            data: {}
        }

        vi.spyOn(useApi, "useChangeUserOrAdminData")
        vi.spyOn(axios, 'put').mockResolvedValue(useChangeUserOrAdminDataRespone)
        await expect(useApi.useChangeUserOrAdminData(MockUser, testToken)).resolves.toStrictEqual({})
        expect(useApi.useChangeUserOrAdminData).toHaveBeenCalledWith(MockUser, testToken)
    })

    test('useNewApplication should return response', async () => {
        const application = {
            "id": 1,
            "book_id": 1,
            "user_id": 1,
            "application_status": 1,
            "price": 0,
            "motivational_letter": 'Ez egy kitalált motivációs levél'
        }
        const useNewApplicationResponse = {
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

        vi.spyOn(useApi, "useNewApplication")
        vi.spyOn(axios, 'post').mockResolvedValue(useNewApplicationResponse)
        await expect(useApi.useNewApplication(application)).resolves.toStrictEqual(expectedApplicationResponse)
        expect(useApi.useNewApplication).toHaveBeenCalledWith(application)
    })

    test('useUpdateApplication should return response.status', async () => {
        const testAdminToken = "0"
        const updatedApplication = {
            "id": 1,
            "book_id": 1,
            "user_id": 1,
            "application_status": 1,
            "price": 0,
            "motivational_letter": 'Ez egy kitalált motivációs levél'
        }
        const useUpdateApplicationResponse = {
            status: 200
        }

        vi.spyOn(useApi, "useUpdateApplication")
        vi.spyOn(axios, 'put').mockResolvedValue(useUpdateApplicationResponse)
        await expect(useApi.useUpdateApplication(updatedApplication, testAdminToken)).resolves.toBe(200)
        expect(useApi.useUpdateApplication).toHaveBeenCalledWith(updatedApplication, testAdminToken)
    })

    test('useSendEmailToVerification should return response.status', async () => {
        const testApplicationId = 1
        const useSendEmailToVerificationResponse = {
            status: 201
        }

        vi.spyOn(useApi, "useSendEmailToVerification")
        vi.spyOn(axios, 'post').mockResolvedValue(useSendEmailToVerificationResponse)
        await expect(useApi.useSendEmailToVerification(testApplicationId)).resolves.toBe(201)
        expect(useApi.useSendEmailToVerification).toHaveBeenCalledWith(testApplicationId)
    })

    test('useSendEmailToRegistration should return response.status', async () => {
        const testUserId = 1
        const useSendEmailToRegistrationResponse = {
            status: 200
        }

        vi.spyOn(useApi, "useSendEmailToRegistration")
        vi.spyOn(axios, 'put').mockResolvedValue(useSendEmailToRegistrationResponse)
        await expect(useApi.useSendEmailToRegistration(testUserId)).resolves.toBe(200)
        expect(useApi.useSendEmailToRegistration).toHaveBeenCalledWith(testUserId)
    })

    test('useGetUserById should return User object', async () => {
        const testUserId = 1
        const testToken = "0"

        const expectedResponse = {
            status: 200,
            data: {
                "id": 1,
                "first_name": '',
                "family_name": '',
                "email": '',
                "password": '',
                "status": 1
            }
        }
        const status = mockuseLoggedInUserStore.getLoggedInUser.status
        vi.spyOn(useApi, "useGetUserById")
        vi.stubGlobal('status', 2)
        vi.spyOn(axios, 'get').mockResolvedValue(expectedResponse)
        await expect(useApi.useGetUserById(testUserId, testToken)).resolves.toBe(expectedResponse.data)
        expect(useApi.useGetUserById).toHaveBeenCalledWith(testUserId, testToken)
        vi.unstubAllGlobals()
    })

    test('useUpdateApplicationStatusById should return status', async () => {
        const testUserId = 1
        const testApplicationId = 1
        const testToken = "0"

        const expectedResponse = {
            status: 200
        }

        vi.spyOn(useApi, 'useUpdateApplicationStatusById')
        vi.spyOn(axios, 'put').mockResolvedValue(expectedResponse)
        await expect(useApi.useUpdateApplicationStatusById(testUserId, testApplicationId, testToken)).resolves.toBe(expectedResponse.status)
        expect(useApi.useUpdateApplicationStatusById).toHaveBeenCalledWith(testUserId, testApplicationId, testToken)
    })

    test('useAddUserPasswordAndUpdateStatus should return status', async () => {
        const testUserId = 1
        const testPassword = "teszt"
        const testToken = "0"

        const expectedResponse = {
            status: 200
        }

        vi.spyOn(useApi, 'useAddUserPasswordAndUpdateStatus')
        vi.spyOn(axios, 'put').mockResolvedValue(expectedResponse)
        await expect(useApi.useAddUserPasswordAndUpdateStatus(testUserId, testPassword, testToken)).resolves.toBe(expectedResponse.status)
        expect(useApi.useAddUserPasswordAndUpdateStatus).toHaveBeenCalledWith(testUserId, testPassword, testToken)
    })

    test('useGetApplicationsByUserId should return application array', async () => {
        const testUserId = 1
        const testToken = "0"

        const expectedResponse = {
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

        const status = mockuseLoggedInUserStore.getLoggedInUser.status
        vi.spyOn(useApi, "useGetUserById")
        vi.stubGlobal('status', 2)
        vi.spyOn(useApi, 'useGetApplicationsByUserId')
        vi.spyOn(axios, 'get').mockResolvedValue(expectedResponse)
        await expect(useApi.useGetApplicationsByUserId(testUserId, testToken)).resolves.toBe(expectedResponse.data)
        expect(useApi.useGetApplicationsByUserId).toHaveBeenCalledWith(testUserId, testToken)
        vi.unstubAllGlobals()
    })

    test('useGetBiggestBid should return the biggest bid', async () => {
        const testBookId = 1
        const testToken = "0"

        const expectedResponse = {
            status: 200,
            data: 10000
        }

        const status = mockuseLoggedInUserStore.getLoggedInUser.status
        vi.spyOn(useApi, "useGetUserById")
        vi.stubGlobal('status', 2)
        vi.spyOn(useApi, 'useGetBiggestBid')
        vi.spyOn(axios, 'get').mockResolvedValue(expectedResponse)
        await expect(useApi.useGetBiggestBid(testBookId, testToken)).resolves.toBe(expectedResponse.data)
        expect(useApi.useGetBiggestBid).toHaveBeenCalledWith(testBookId, testToken)
        vi.unstubAllGlobals()
    })

    test('useSendBid should return status', async () => {
        const testApplication = {
            "id": 1,
            "book_id": 1,
            "user_id": 1,
            "application_status": 1,
            "price": 0,
            "motivational_letter": 'Ez egy kitalált motivációs levél'
        }
        const testNewBid = 4
        const testBiggestBid = 3
        const testToken = "0"

        const expectedResponse = {
            status: 200
        }

        const status = mockuseLoggedInUserStore.getLoggedInUser.status
        vi.spyOn(useApi, "useGetUserById")
        vi.stubGlobal('status', 2)
        vi.spyOn(useApi, 'useSendBid')
        vi.spyOn(axios, 'get').mockResolvedValue(expectedResponse)
        await expect(useApi.useSendBid(testApplication, testNewBid, testBiggestBid, testToken)).resolves.toBe(expectedResponse.status)
        expect(useApi.useSendBid).toHaveBeenCalledWith(testApplication, testNewBid, testBiggestBid, testToken)
        vi.unstubAllGlobals()
    })

    test('updateBook should return status', async () => {
        const testBook = {
            "id": 1,
            "title": "MockBook1",
            "description": "Mocked book desc",
            "bid_end_date": new Date("2024-10-30T16:00")
        }
        const testAdminToken = "0"

        const expectedResponse = {
            status: 200
        }

        vi.spyOn(useApi, 'updateBook')
        vi.spyOn(axios, 'get').mockResolvedValue(expectedResponse)
        await expect(useApi.updateBook(testBook, testAdminToken)).resolves.toBe(expectedResponse.status)
        expect(useApi.updateBook).toHaveBeenCalledWith(testBook, testAdminToken)
    })
})