import crypto from "crypto";

export function generateRandomString(length: number) {
  return crypto.randomBytes(length).toString("hex").slice(0, length);
}

export function createSignature(data: string, secret: string) {
  const hmac = crypto.createHmac("sha256", secret);
  hmac.update(data);
  return hmac.digest("base64");
}