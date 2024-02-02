export declare const NEYNAR_DEFAULT_API_KEY = "NEYNAR_ONCHAIN_KIT";
export interface NeynarUserModel {
    fid: number;
    custody_address: string;
    username: string;
    display_name: string;
    pfp_url: string;
    profile: {
        bio: {
            text: string;
        };
    };
    follower_count: number;
    verifications: string[];
}
export interface NeynarBulkUserLookupModel {
    users: NeynarUserModel[];
}
export declare function neynarBulkUserLookup(farcasterIDs: number[], apiKey?: string): Promise<NeynarBulkUserLookupModel | undefined>;
