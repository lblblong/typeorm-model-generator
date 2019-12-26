import { ColumnOptions } from "typeorm";
import RelationInfo from "./RelationInfo";

export default class ColumnInfo {
    public options: ColumnOptions = {};

    public tsName: string = "";

    public currentTimestamp: boolean = false;

    public tsType:
        | "number"
        | "string"
        | "boolean"
        | "Date"
        | "Buffer"
        | "object"
        | "string | object"
        | "string | string[]"
        | "any"
        | string;

    public relations: RelationInfo[] = [];
}
