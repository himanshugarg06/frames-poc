"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockNeynarResponse = exports.buildFarcasterResponse = void 0;
function buildFarcasterResponse(fid) {
    return {
        isOk: () => {
            return true;
        },
        value: {
            valid: true,
            message: {
                data: {
                    fid: fid,
                },
            },
        },
    };
}
exports.buildFarcasterResponse = buildFarcasterResponse;
function mockNeynarResponse(fid, addresses, lookupMock, frameValidationMock = jest.fn()) {
    const neynarResponse = {
        users: [
            {
                verifications: addresses,
            },
        ],
    };
    lookupMock.mockResolvedValue(neynarResponse);
    frameValidationMock.mockResolvedValue({
        valid: true,
        interactor: {
            fid,
            verified_accounts: addresses,
        },
    });
}
exports.mockNeynarResponse = mockNeynarResponse;
//# sourceMappingURL=mock.js.map