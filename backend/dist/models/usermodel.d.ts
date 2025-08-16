import mongoose from "mongoose";
import { Types } from "mongoose";
export declare const User: mongoose.Model<{
    username: string;
    fullName: string;
    emailId: string;
    emailVerified: boolean;
    role: "user" | "admin";
    password: string;
    noSolvedProblems: number;
    checkedProblems: Types.DocumentArray<{
        pid?: Types.ObjectId | null;
        isSolved?: boolean | null;
        submitDate?: NativeDate | null;
    }, Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        pid?: Types.ObjectId | null;
        isSolved?: boolean | null;
        submitDate?: NativeDate | null;
    }> & {
        pid?: Types.ObjectId | null;
        isSolved?: boolean | null;
        submitDate?: NativeDate | null;
    }>;
    favouriteProblems: Types.ObjectId[];
    likedProblems: Types.ObjectId[];
    bookmarks: Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        isPublic: boolean;
        problems: Types.ObjectId[];
        sprintName?: string | null;
        description?: string | null;
    }, Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        isPublic: boolean;
        problems: Types.ObjectId[];
        sprintName?: string | null;
        description?: string | null;
    }> & {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        isPublic: boolean;
        problems: Types.ObjectId[];
        sprintName?: string | null;
        description?: string | null;
    }>;
    points: number;
    streaks: {
        current: number;
        longest: number;
        lastUpdated: NativeDate;
    };
    age?: number | null;
    profileImageUrl?: string | null;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    username: string;
    fullName: string;
    emailId: string;
    emailVerified: boolean;
    role: "user" | "admin";
    password: string;
    noSolvedProblems: number;
    checkedProblems: Types.DocumentArray<{
        pid?: Types.ObjectId | null;
        isSolved?: boolean | null;
        submitDate?: NativeDate | null;
    }, Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        pid?: Types.ObjectId | null;
        isSolved?: boolean | null;
        submitDate?: NativeDate | null;
    }> & {
        pid?: Types.ObjectId | null;
        isSolved?: boolean | null;
        submitDate?: NativeDate | null;
    }>;
    favouriteProblems: Types.ObjectId[];
    likedProblems: Types.ObjectId[];
    bookmarks: Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        isPublic: boolean;
        problems: Types.ObjectId[];
        sprintName?: string | null;
        description?: string | null;
    }, Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        isPublic: boolean;
        problems: Types.ObjectId[];
        sprintName?: string | null;
        description?: string | null;
    }> & {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        isPublic: boolean;
        problems: Types.ObjectId[];
        sprintName?: string | null;
        description?: string | null;
    }>;
    points: number;
    streaks: {
        current: number;
        longest: number;
        lastUpdated: NativeDate;
    };
    age?: number | null;
    profileImageUrl?: string | null;
}, {}, mongoose.DefaultSchemaOptions> & {
    username: string;
    fullName: string;
    emailId: string;
    emailVerified: boolean;
    role: "user" | "admin";
    password: string;
    noSolvedProblems: number;
    checkedProblems: Types.DocumentArray<{
        pid?: Types.ObjectId | null;
        isSolved?: boolean | null;
        submitDate?: NativeDate | null;
    }, Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        pid?: Types.ObjectId | null;
        isSolved?: boolean | null;
        submitDate?: NativeDate | null;
    }> & {
        pid?: Types.ObjectId | null;
        isSolved?: boolean | null;
        submitDate?: NativeDate | null;
    }>;
    favouriteProblems: Types.ObjectId[];
    likedProblems: Types.ObjectId[];
    bookmarks: Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        isPublic: boolean;
        problems: Types.ObjectId[];
        sprintName?: string | null;
        description?: string | null;
    }, Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        isPublic: boolean;
        problems: Types.ObjectId[];
        sprintName?: string | null;
        description?: string | null;
    }> & {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        isPublic: boolean;
        problems: Types.ObjectId[];
        sprintName?: string | null;
        description?: string | null;
    }>;
    points: number;
    streaks: {
        current: number;
        longest: number;
        lastUpdated: NativeDate;
    };
    age?: number | null;
    profileImageUrl?: string | null;
} & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    username: string;
    fullName: string;
    emailId: string;
    emailVerified: boolean;
    role: "user" | "admin";
    password: string;
    noSolvedProblems: number;
    checkedProblems: Types.DocumentArray<{
        pid?: Types.ObjectId | null;
        isSolved?: boolean | null;
        submitDate?: NativeDate | null;
    }, Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        pid?: Types.ObjectId | null;
        isSolved?: boolean | null;
        submitDate?: NativeDate | null;
    }> & {
        pid?: Types.ObjectId | null;
        isSolved?: boolean | null;
        submitDate?: NativeDate | null;
    }>;
    favouriteProblems: Types.ObjectId[];
    likedProblems: Types.ObjectId[];
    bookmarks: Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        isPublic: boolean;
        problems: Types.ObjectId[];
        sprintName?: string | null;
        description?: string | null;
    }, Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        isPublic: boolean;
        problems: Types.ObjectId[];
        sprintName?: string | null;
        description?: string | null;
    }> & {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        isPublic: boolean;
        problems: Types.ObjectId[];
        sprintName?: string | null;
        description?: string | null;
    }>;
    points: number;
    streaks: {
        current: number;
        longest: number;
        lastUpdated: NativeDate;
    };
    age?: number | null;
    profileImageUrl?: string | null;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    username: string;
    fullName: string;
    emailId: string;
    emailVerified: boolean;
    role: "user" | "admin";
    password: string;
    noSolvedProblems: number;
    checkedProblems: Types.DocumentArray<{
        pid?: Types.ObjectId | null;
        isSolved?: boolean | null;
        submitDate?: NativeDate | null;
    }, Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        pid?: Types.ObjectId | null;
        isSolved?: boolean | null;
        submitDate?: NativeDate | null;
    }> & {
        pid?: Types.ObjectId | null;
        isSolved?: boolean | null;
        submitDate?: NativeDate | null;
    }>;
    favouriteProblems: Types.ObjectId[];
    likedProblems: Types.ObjectId[];
    bookmarks: Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        isPublic: boolean;
        problems: Types.ObjectId[];
        sprintName?: string | null;
        description?: string | null;
    }, Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        isPublic: boolean;
        problems: Types.ObjectId[];
        sprintName?: string | null;
        description?: string | null;
    }> & {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        isPublic: boolean;
        problems: Types.ObjectId[];
        sprintName?: string | null;
        description?: string | null;
    }>;
    points: number;
    streaks: {
        current: number;
        longest: number;
        lastUpdated: NativeDate;
    };
    age?: number | null;
    profileImageUrl?: string | null;
}>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<{
    username: string;
    fullName: string;
    emailId: string;
    emailVerified: boolean;
    role: "user" | "admin";
    password: string;
    noSolvedProblems: number;
    checkedProblems: Types.DocumentArray<{
        pid?: Types.ObjectId | null;
        isSolved?: boolean | null;
        submitDate?: NativeDate | null;
    }, Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        pid?: Types.ObjectId | null;
        isSolved?: boolean | null;
        submitDate?: NativeDate | null;
    }> & {
        pid?: Types.ObjectId | null;
        isSolved?: boolean | null;
        submitDate?: NativeDate | null;
    }>;
    favouriteProblems: Types.ObjectId[];
    likedProblems: Types.ObjectId[];
    bookmarks: Types.DocumentArray<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        isPublic: boolean;
        problems: Types.ObjectId[];
        sprintName?: string | null;
        description?: string | null;
    }, Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        isPublic: boolean;
        problems: Types.ObjectId[];
        sprintName?: string | null;
        description?: string | null;
    }> & {
        createdAt: NativeDate;
        updatedAt: NativeDate;
    } & {
        isPublic: boolean;
        problems: Types.ObjectId[];
        sprintName?: string | null;
        description?: string | null;
    }>;
    points: number;
    streaks: {
        current: number;
        longest: number;
        lastUpdated: NativeDate;
    };
    age?: number | null;
    profileImageUrl?: string | null;
}> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>>;
//# sourceMappingURL=usermodel.d.ts.map