"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.neynarFrameValidation = exports.NEYNAR_DEFAULT_API_KEY = void 0;
const version_1 = require("../../../version");
const FetchError_1 = require("../exceptions/FetchError");
const neynarFrameModels_1 = require("./neynarFrameModels");
exports.NEYNAR_DEFAULT_API_KEY = 'NEYNAR_ONCHAIN_KIT';
async function neynarFrameValidation(messageBytes, apiKey = exports.NEYNAR_DEFAULT_API_KEY, castReactionContext = true, followContext = true) {
    const options = {
        method: 'POST',
        url: `https://api.neynar.com/v2/farcaster/frame/validate`,
        headers: {
            accept: 'application/json',
            api_key: apiKey,
            'content-type': 'application/json',
            onchainkit_version: version_1.version,
        },
        body: JSON.stringify({
            message_bytes_in_hex: messageBytes,
            cast_reaction_context: castReactionContext, // Returns if the user has liked/recasted
            follow_context: followContext, // Returns if the user is Following
        }),
    };
    const resp = await fetch(options.url, options);
    if (resp.status !== 200) {
        throw new FetchError_1.FetchError(`non-200 status returned from neynar : ${resp.status}`);
    }
    const responseBody = await resp.json();
    return (0, neynarFrameModels_1.convertToNeynarResponseModel)(responseBody);
}
exports.neynarFrameValidation = neynarFrameValidation;
//# sourceMappingURL=neynarFrameFunctions.js.map