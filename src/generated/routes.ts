/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import type { TsoaRoute } from '@tsoa/runtime';
import {  fetchMiddlewares, ExpressTemplateService } from '@tsoa/runtime';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { UserController } from './../modules/users/controllers/user.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { UserMissionController } from './../modules/userMissions/controllers/userMission.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { StoreController } from './../modules/stores/controllers/store.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { ReviewController } from './../modules/reviews/controllers/review.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { MissionController } from './../modules/missions/controllers/mission.controller';
import type { Request as ExRequest, Response as ExResponse, RequestHandler, Router } from 'express';



// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

const models: TsoaRoute.Models = {
    "UserSignUpResponse": {
        "dataType": "refObject",
        "properties": {
            "userId": {"dataType":"double","required":true},
            "role": {"dataType":"string","required":true},
            "name": {"dataType":"string","required":true},
            "gender": {"dataType":"string","required":true},
            "birth": {"dataType":"datetime","required":true},
            "address": {"dataType":"string","required":true},
            "city": {"dataType":"string","required":true},
            "district": {"dataType":"string","required":true},
            "neighborhood": {"dataType":"string","required":true},
            "detail": {"dataType":"string","required":true},
            "phoneNumber": {"dataType":"string","required":true},
            "point": {"dataType":"double","required":true},
            "createdAt": {"dataType":"datetime","required":true},
            "preferences": {"dataType":"array","array":{"dataType":"string"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ApiResponse_UserSignUpResponse_": {
        "dataType": "refObject",
        "properties": {
            "success": {"dataType":"boolean","required":true},
            "code": {"dataType":"double","required":true},
            "message": {"dataType":"string","required":true},
            "data": {"ref":"UserSignUpResponse"},
            "errorCode": {"dataType":"string"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UserSignUpRequest": {
        "dataType": "refObject",
        "properties": {
            "email": {"dataType":"string","required":true},
            "password": {"dataType":"string","required":true},
            "name": {"dataType":"string","required":true},
            "gender": {"dataType":"string","required":true},
            "birth": {"dataType":"string","required":true},
            "address": {"dataType":"string"},
            "city": {"dataType":"string"},
            "district": {"dataType":"string"},
            "neighborhood": {"dataType":"string"},
            "detail": {"dataType":"string"},
            "phoneNumber": {"dataType":"string","required":true},
            "preferences": {"dataType":"array","array":{"dataType":"double"},"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ApiResponse__userMissionId-number__": {
        "dataType": "refObject",
        "properties": {
            "success": {"dataType":"boolean","required":true},
            "code": {"dataType":"double","required":true},
            "message": {"dataType":"string","required":true},
            "data": {"dataType":"nestedObjectLiteral","nestedProperties":{"userMissionId":{"dataType":"double","required":true}}},
            "errorCode": {"dataType":"string"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ApiResponse__40__mission_58__missionId-number--storeId-number--createdAt-Date--title-string--description-string--reward-number_--store_58__storeId-number--address-string--city-string--district-string--neighborhood-string--detail-string--createdAt-Date--updatedAt-Date--deletedAt-Date--storeName-string--latitude-number--longitude-number__-and-_userMissionId-number--userId-number--missionId-number--reviewId-number--storeId-number--status-string--receivedAt-Date--completedAt-Date__41_-Array_": {
        "dataType": "refObject",
        "properties": {
            "success": {"dataType":"boolean","required":true},
            "code": {"dataType":"double","required":true},
            "message": {"dataType":"string","required":true},
            "data": {"dataType":"array","array":{"dataType":"intersection","subSchemas":[{"dataType":"nestedObjectLiteral","nestedProperties":{"store":{"dataType":"nestedObjectLiteral","nestedProperties":{"longitude":{"dataType":"double","required":true},"latitude":{"dataType":"double","required":true},"storeName":{"dataType":"string","required":true},"deletedAt":{"dataType":"datetime","required":true},"updatedAt":{"dataType":"datetime","required":true},"createdAt":{"dataType":"datetime","required":true},"detail":{"dataType":"string","required":true},"neighborhood":{"dataType":"string","required":true},"district":{"dataType":"string","required":true},"city":{"dataType":"string","required":true},"address":{"dataType":"string","required":true},"storeId":{"dataType":"double","required":true}},"required":true},"mission":{"dataType":"nestedObjectLiteral","nestedProperties":{"reward":{"dataType":"double","required":true},"description":{"dataType":"string","required":true},"title":{"dataType":"string","required":true},"createdAt":{"dataType":"datetime","required":true},"storeId":{"dataType":"double","required":true},"missionId":{"dataType":"double","required":true}},"required":true}}},{"dataType":"nestedObjectLiteral","nestedProperties":{"completedAt":{"dataType":"datetime","required":true},"receivedAt":{"dataType":"datetime","required":true},"status":{"dataType":"string","required":true},"storeId":{"dataType":"double","required":true},"reviewId":{"dataType":"double","required":true},"missionId":{"dataType":"double","required":true},"userId":{"dataType":"double","required":true},"userMissionId":{"dataType":"double","required":true}}}]}},
            "errorCode": {"dataType":"string"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ChallengeMissionResponse": {
        "dataType": "refObject",
        "properties": {
            "userMissionId": {"dataType":"double","required":true},
            "userId": {"dataType":"double","required":true},
            "missionId": {"dataType":"double","required":true},
            "status": {"dataType":"string","required":true},
            "receivedAt": {"dataType":"datetime","required":true},
            "completedAt": {"dataType":"union","subSchemas":[{"dataType":"datetime"},{"dataType":"enum","enums":[null]}],"required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ApiResponse_ChallengeMissionResponse_": {
        "dataType": "refObject",
        "properties": {
            "success": {"dataType":"boolean","required":true},
            "code": {"dataType":"double","required":true},
            "message": {"dataType":"string","required":true},
            "data": {"ref":"ChallengeMissionResponse"},
            "errorCode": {"dataType":"string"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CreateStoreResponse": {
        "dataType": "refObject",
        "properties": {
            "storeId": {"dataType":"double","required":true},
            "storeName": {"dataType":"string","required":true},
            "address": {"dataType":"string","required":true},
            "city": {"dataType":"string","required":true},
            "district": {"dataType":"string","required":true},
            "neighborhood": {"dataType":"string","required":true},
            "detail": {"dataType":"string","required":true},
            "latitude": {"dataType":"double","required":true},
            "longitude": {"dataType":"double","required":true},
            "createdAt": {"dataType":"datetime","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ApiResponse_CreateStoreResponse_": {
        "dataType": "refObject",
        "properties": {
            "success": {"dataType":"boolean","required":true},
            "code": {"dataType":"double","required":true},
            "message": {"dataType":"string","required":true},
            "data": {"ref":"CreateStoreResponse"},
            "errorCode": {"dataType":"string"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CreateReviewResponse": {
        "dataType": "refObject",
        "properties": {
            "reviewId": {"dataType":"double","required":true},
            "userId": {"dataType":"double","required":true},
            "storeId": {"dataType":"double","required":true},
            "rating": {"dataType":"double","required":true},
            "content": {"dataType":"string","required":true},
            "createdAt": {"dataType":"datetime","required":true},
            "deletedAt": {"dataType":"datetime"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ApiResponse_CreateReviewResponse_": {
        "dataType": "refObject",
        "properties": {
            "success": {"dataType":"boolean","required":true},
            "code": {"dataType":"double","required":true},
            "message": {"dataType":"string","required":true},
            "data": {"ref":"CreateReviewResponse"},
            "errorCode": {"dataType":"string"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ApiResponse_CreateReviewResponse-Array_": {
        "dataType": "refObject",
        "properties": {
            "success": {"dataType":"boolean","required":true},
            "code": {"dataType":"double","required":true},
            "message": {"dataType":"string","required":true},
            "data": {"dataType":"array","array":{"dataType":"refObject","ref":"CreateReviewResponse"}},
            "errorCode": {"dataType":"string"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CreateMissionResponse": {
        "dataType": "refObject",
        "properties": {
            "missionId": {"dataType":"double","required":true},
            "storeId": {"dataType":"double","required":true},
            "title": {"dataType":"string","required":true},
            "description": {"dataType":"string","required":true},
            "reward": {"dataType":"double","required":true},
            "createdAt": {"dataType":"datetime","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ApiResponse_CreateMissionResponse_": {
        "dataType": "refObject",
        "properties": {
            "success": {"dataType":"boolean","required":true},
            "code": {"dataType":"double","required":true},
            "message": {"dataType":"string","required":true},
            "data": {"ref":"CreateMissionResponse"},
            "errorCode": {"dataType":"string"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ApiResponse_CreateMissionResponse-Array_": {
        "dataType": "refObject",
        "properties": {
            "success": {"dataType":"boolean","required":true},
            "code": {"dataType":"double","required":true},
            "message": {"dataType":"string","required":true},
            "data": {"dataType":"array","array":{"dataType":"refObject","ref":"CreateMissionResponse"}},
            "errorCode": {"dataType":"string"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const templateService = new ExpressTemplateService(models, {"noImplicitAdditionalProperties":"throw-on-extras","bodyCoercion":true});

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa




export function RegisterRoutes(app: Router) {

    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################


    
        const argsUserController_handleUserSignUp: Record<string, TsoaRoute.ParameterSchema> = {
                body: {"in":"body","name":"body","required":true,"ref":"UserSignUpRequest"},
        };
        app.post('/users/signup',
            ...(fetchMiddlewares<RequestHandler>(UserController)),
            ...(fetchMiddlewares<RequestHandler>(UserController.prototype.handleUserSignUp)),

            async function UserController_handleUserSignUp(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsUserController_handleUserSignUp, request, response });

                const controller = new UserController();

              await templateService.apiHandler({
                methodName: 'handleUserSignUp',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 201,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsUserMissionController_challengeMission: Record<string, TsoaRoute.ParameterSchema> = {
                missionId: {"in":"path","name":"missionId","required":true,"dataType":"double"},
                body: {"in":"body","name":"body","required":true,"dataType":"any"},
        };
        app.post('/user-missions/:missionId',
            ...(fetchMiddlewares<RequestHandler>(UserMissionController)),
            ...(fetchMiddlewares<RequestHandler>(UserMissionController.prototype.challengeMission)),

            async function UserMissionController_challengeMission(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsUserMissionController_challengeMission, request, response });

                const controller = new UserMissionController();

              await templateService.apiHandler({
                methodName: 'challengeMission',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 201,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsUserMissionController_getReceivedMissions: Record<string, TsoaRoute.ParameterSchema> = {
                userId: {"in":"path","name":"userId","required":true,"dataType":"double"},
        };
        app.get('/user-missions/:userId',
            ...(fetchMiddlewares<RequestHandler>(UserMissionController)),
            ...(fetchMiddlewares<RequestHandler>(UserMissionController.prototype.getReceivedMissions)),

            async function UserMissionController_getReceivedMissions(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsUserMissionController_getReceivedMissions, request, response });

                const controller = new UserMissionController();

              await templateService.apiHandler({
                methodName: 'getReceivedMissions',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsUserMissionController_completeUserMission: Record<string, TsoaRoute.ParameterSchema> = {
                userMissionId: {"in":"path","name":"userMissionId","required":true,"dataType":"double"},
                body: {"in":"body","name":"body","required":true,"dataType":"any"},
        };
        app.patch('/user-missions/:userMissionId',
            ...(fetchMiddlewares<RequestHandler>(UserMissionController)),
            ...(fetchMiddlewares<RequestHandler>(UserMissionController.prototype.completeUserMission)),

            async function UserMissionController_completeUserMission(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsUserMissionController_completeUserMission, request, response });

                const controller = new UserMissionController();

              await templateService.apiHandler({
                methodName: 'completeUserMission',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsStoreController_createStore: Record<string, TsoaRoute.ParameterSchema> = {
                body: {"in":"body","name":"body","required":true,"dataType":"any"},
        };
        app.post('/stores',
            ...(fetchMiddlewares<RequestHandler>(StoreController)),
            ...(fetchMiddlewares<RequestHandler>(StoreController.prototype.createStore)),

            async function StoreController_createStore(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsStoreController_createStore, request, response });

                const controller = new StoreController();

              await templateService.apiHandler({
                methodName: 'createStore',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 201,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsReviewController_createReview: Record<string, TsoaRoute.ParameterSchema> = {
                body: {"in":"body","name":"body","required":true,"dataType":"any"},
        };
        app.post('/reviews',
            ...(fetchMiddlewares<RequestHandler>(ReviewController)),
            ...(fetchMiddlewares<RequestHandler>(ReviewController.prototype.createReview)),

            async function ReviewController_createReview(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsReviewController_createReview, request, response });

                const controller = new ReviewController();

              await templateService.apiHandler({
                methodName: 'createReview',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 201,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsReviewController_getMyReviews: Record<string, TsoaRoute.ParameterSchema> = {
                userId: {"in":"path","name":"userId","required":true,"dataType":"double"},
        };
        app.get('/reviews/:userId',
            ...(fetchMiddlewares<RequestHandler>(ReviewController)),
            ...(fetchMiddlewares<RequestHandler>(ReviewController.prototype.getMyReviews)),

            async function ReviewController_getMyReviews(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsReviewController_getMyReviews, request, response });

                const controller = new ReviewController();

              await templateService.apiHandler({
                methodName: 'getMyReviews',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsMissionController_createMission: Record<string, TsoaRoute.ParameterSchema> = {
                storeId: {"in":"path","name":"storeId","required":true,"dataType":"double"},
                body: {"in":"body","name":"body","required":true,"dataType":"any"},
        };
        app.post('/missions/:storeId',
            ...(fetchMiddlewares<RequestHandler>(MissionController)),
            ...(fetchMiddlewares<RequestHandler>(MissionController.prototype.createMission)),

            async function MissionController_createMission(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsMissionController_createMission, request, response });

                const controller = new MissionController();

              await templateService.apiHandler({
                methodName: 'createMission',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 201,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsMissionController_getStoreMissions: Record<string, TsoaRoute.ParameterSchema> = {
                storeId: {"in":"path","name":"storeId","required":true,"dataType":"double"},
        };
        app.get('/missions/:storeId',
            ...(fetchMiddlewares<RequestHandler>(MissionController)),
            ...(fetchMiddlewares<RequestHandler>(MissionController.prototype.getStoreMissions)),

            async function MissionController_getStoreMissions(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsMissionController_getStoreMissions, request, response });

                const controller = new MissionController();

              await templateService.apiHandler({
                methodName: 'getStoreMissions',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa


    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
