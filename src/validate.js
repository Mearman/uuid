import { genericUuid, v1, v3, v4, v5 } from './regex.js';

function validateByVersion(uuid, expression) {
  return typeof uuid === 'string' && expression.test(uuid);
}

function isUuid(uuid) {
  return validateByVersion(uuid, genericUuid);
}
export default isUuid;

export function isV1(uuid) {
  return validateByVersion(uuid, v1);
}

export function isV3(uuid) {
  return validateByVersion(uuid, v3);
}

export function isV4(uuid) {
  return validateByVersion(uuid, v4);
}

export function isV5(uuid) {
  return validateByVersion(uuid, v5);
}
