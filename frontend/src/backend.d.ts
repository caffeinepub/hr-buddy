import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type CustomId = bigint;
export interface DemoRequest {
    teamSize: string;
    name: string;
    submittedAt: bigint;
    email: string;
    company: string;
    preferredTime: string;
}
export interface backendInterface {
    getAllDemoRequests(): Promise<Array<DemoRequest>>;
    getAllDemoRequestsByEmail(email: string): Promise<Array<DemoRequest>>;
    submitDemoRequest(name: string, company: string, teamSize: string, preferredTime: string, email: string): Promise<CustomId>;
}
