/// <reference path="PlayFabClientApi.d.ts" />

declare module PlayFabModule {
    export interface ISettings {
        titleId: string;
        developerSecretKey: string;
        GlobalHeaderInjection?: { [key: string]: string };
        productionServerUrl: string;
    }
    export interface IPlayFabRequestCommon { }
    export interface IPlayFabError {
        code: number;
        status: string;
        error: string;
        errorCode: number;
        errorMessage: string;
        errorDetails?: { [key: string]: string[] };
        request?: any;
        customData?: any;
        retryAfterSeconds?: number;
    }
    export interface SuccessContainer<TResult extends IPlayFabResultCommon> extends IPlayFabError {
        data: TResult;
    }
    export interface IPlayFabResultCommon extends IPlayFabError { }

    export interface ApiCallback<TResult extends IPlayFabResultCommon> { (result: SuccessContainer<TResult>, error: IPlayFabError): void }
}

declare var PlayFab: {
    buildIdentifier: string;
    sdkVersion: string;
    GenerateErrorReport(IPlayFabError: any): string;
    settings: PlayFabModule.ISettings;
    ClientApi: PlayFabClientModule.IPlayFabClient;

};
// Continue to support older usage
declare var PlayFabClientSDK: PlayFabClientModule.IPlayFabClient;

