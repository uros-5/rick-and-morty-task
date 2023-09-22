/*
 * Generated type guards for "types.ts".
 * WARNING: Do not manually change this file.
 */
import type { CharacterResponse } from "./types";

export function isCharacterResponse(obj: unknown): obj is CharacterResponse {
    const typedObj = obj as CharacterResponse
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        (typeof typedObj["info"] === "undefined" ||
            (typedObj["info"] !== null &&
                typeof typedObj["info"] === "object" ||
                typeof typedObj["info"] === "function") &&
            typeof typedObj["info"]["count"] === "number" &&
            typeof typedObj["info"]["pages"] === "number" &&
            (typedObj["info"]["next"] === null ||
                typeof typedObj["info"]["next"] === "string") &&
            (typedObj["info"]["prev"] === null ||
                typeof typedObj["info"]["prev"] === "string")) &&
        Array.isArray(typedObj["results"]) &&
        typedObj["results"].every((e: any) =>
            (e !== null &&
                typeof e === "object" ||
                typeof e === "function") &&
            typeof e["id"] === "number" &&
            typeof e["name"] === "string" &&
            typeof e["url"] === "string" &&
            typeof e["created"] === "string" &&
            (e["status"] === "Dead" ||
                e["status"] === "Alive" ||
                e["status"] === "unknown") &&
            typeof e["species"] === "string" &&
            typeof e["type"] === "string" &&
            (e["gender"] === "unknown" ||
                e["gender"] === "Male" ||
                e["gender"] === "Female" ||
                e["gender"] === "Genderless") &&
            (e["origin"] !== null &&
                typeof e["origin"] === "object" ||
                typeof e["origin"] === "function") &&
            typeof e["origin"]["name"] === "string" &&
            typeof e["origin"]["url"] === "string" &&
            (e["location"] !== null &&
                typeof e["location"] === "object" ||
                typeof e["location"] === "function") &&
            typeof e["location"]["name"] === "string" &&
            typeof e["location"]["url"] === "string" &&
            typeof e["image"] === "string" &&
            Array.isArray(e["episode"]) &&
            e["episode"].every((e: any) =>
                typeof e === "string"
            )
        )
    )
}
