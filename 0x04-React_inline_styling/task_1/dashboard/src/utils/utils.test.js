import { getFullYear, getFooterCopy } from "./utils";
import getLatestNotification from "./utils";

test("Returns current year", () => {
    expect(getFullYear()).toBe(2023);
});

test("Correct footer copy", () => {
    expect(getFooterCopy(true)).toBe("Holberton School");
    expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
});

test("Returns the right notification", () => {
    expect(getLatestNotification()).toBe("<strong>Urgent requirement</strong> - complete by EOD");
});