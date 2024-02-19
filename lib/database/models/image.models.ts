// For one of the images

import { Document, Schema, model, models } from "mongoose";

// Creating an interface for the image schema, using chatgpt 
// so that the frontend know what properties do we have built of the image schema.
interface IImage extends Document {
    title: string;
    transformationType: string;
    publicId: string;
    secureUrl: string;
    width?: number;
    height?: number;
    config?: Record<string, any>;
    transformationUrl?: URL;
    aspectRatio?: string;
    color?: string;
    prompt?: string;
    author: {
        _id: String;
        firstName: String;
        lastName: String;
    }
    createdAt?: Date;
    updatedAt?: Date;
}

const ImageSchema = new Schema ({
    title: { type: String, required: true},
    transformationType: { type: String, required: true},
    publicId: { type: String, required: true},
    secureUrl: { type: String, required: true},
    width: { type: Number },
    height: { type: Number },
    config: { type: Object },
    transformationUrl: { type: URL },
    aspectRatio: { type: String },
    color: { type: String },
    prompt: { type: String },
    author: { type: Schema.Types.ObjectId, ref: 'User'},
    createdAt: { type: Date, default: Date.now() },
    UpdatedAt: { type: Date, default: Date.now() },
});

const Image = models?.Image || model('Image', ImageSchema);

export default Image;