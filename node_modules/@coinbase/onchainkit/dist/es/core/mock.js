export function buildFarcasterResponse(fid) {
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
export function mockNeynarResponse(fid, addresses, lookupMock, frameValidationMock = jest.fn()) {
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
//# sourceMappingURL=mock.js.map