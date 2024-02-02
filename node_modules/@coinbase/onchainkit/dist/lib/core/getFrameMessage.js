"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFrameMessage = void 0;
const neynarFrameFunctions_1 = require("../utils/neynar/frame/neynarFrameFunctions");
/**
 * Given a frame message, decode and validate it.
 *
 * If message is valid, return the message. Otherwise undefined.
 *
 * @param body The JSON received by server on frame callback
 */
async function getFrameMessage(body, messageOptions) {
    // Validate the message
    const response = await (0, neynarFrameFunctions_1.neynarFrameValidation)(body?.trustedData?.messageBytes, messageOptions?.neynarApiKey || neynarFrameFunctions_1.NEYNAR_DEFAULT_API_KEY, messageOptions?.castReactionContext || true, messageOptions?.followContext || true);
    if (response?.valid) {
        return {
            isValid: true,
            message: response,
        };
    }
    else {
        // Security best practice, don't return anything if we can't validate the frame.
        return {
            isValid: false,
            message: undefined,
        };
    }
}
exports.getFrameMessage = getFrameMessage;
//# sourceMappingURL=getFrameMessage.js.map