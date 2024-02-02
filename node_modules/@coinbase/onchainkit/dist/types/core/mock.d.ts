/// <reference types="jest" />
export declare function buildFarcasterResponse(fid: number): {
    isOk: () => boolean;
    value: {
        valid: boolean;
        message: {
            data: {
                fid: number;
            };
        };
    };
};
export declare function mockNeynarResponse(fid: number, addresses: string[] | undefined, lookupMock: jest.Mock, frameValidationMock?: jest.Mock): void;
