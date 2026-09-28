import { describe, expect, it } from "vitest";
import { formDataToRecord, parseRequest } from "./schema";

const valid = {
  fullName: "Ada Lovelace",
  email: "ada@example.com",
  contactMethod: "Email",
  destination: "Kyoto in late autumn",
  travelStyle: "Cities and culture",
  travellers: "2",
  budget: "£15,000 to £30,000",
};

describe("parseRequest", () => {
  it("accepts a complete request and coerces numbers", () => {
    const result = parseRequest(valid);
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.data.travellers).toBe(2);
      expect(result.data.phone).toBeUndefined();
      expect(result.data.notes).toBeUndefined();
    }
  });

  it("trims whitespace and drops empty optional fields", () => {
    const result = parseRequest({ ...valid, fullName: "  Ada  ", phone: "   ", notes: "" });
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.data.fullName).toBe("Ada");
      expect(result.data.phone).toBeUndefined();
      expect(result.data.notes).toBeUndefined();
    }
  });

  it("returns one friendly message per invalid field", () => {
    const result = parseRequest({
      ...valid,
      fullName: "A",
      email: "not-an-email",
      travellers: "0",
      budget: "Whatever",
    });
    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.errors.fullName).toBe("Please tell us your name");
      expect(result.errors.email).toBe("Please enter a valid email address");
      expect(result.errors.travellers).toBe("At least one traveller");
      expect(result.errors.budget).toBe("Please give us an indicative budget");
      expect(result.errors.destination).toBeUndefined();
    }
  });

  it("rejects missing required fields with the custom message", () => {
    const result = parseRequest({});
    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.errors.fullName).toBe("Please tell us your name");
      expect(result.errors.travelStyle).toBe("Please choose the style that fits best");
    }
  });

  it("caps very large groups", () => {
    const result = parseRequest({ ...valid, travellers: "41" });
    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.errors.travellers).toBe("For groups over 40, please call us");
    }
  });
});

describe("formDataToRecord", () => {
  it("copies only known fields and ignores React action keys", () => {
    const formData = new FormData();
    formData.set("fullName", "Ada");
    formData.set("$ACTION_ID_abc", "ignored");
    formData.set("company", "honeypot");
    const record = formDataToRecord(formData);
    expect(record).toEqual({ fullName: "Ada" });
  });
});
