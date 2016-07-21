'use strict';

/*
 * Error types for the authentication route
 */
const AUTH = {
    VERIFICATION   : {
        USER_EXISTS    : 'user_exists',
        NUMBER_MISSING : 'number_missing',
        TYPE_MISSING   : 'type_missing',
        USER_NOT_FOUND : 'user_not_found',
        INVALID_TYPE   : 'invalid_type'
    },
    REGISTER       : {
        NO_VERIFICATION      : 'no_verification',
        VERIFICATION_EXPIRED : 'verification_expired',
        VERIFICATION_USED    : 'verification_used',
        REGISTER_FAILED      : 'register_failed',
    },
    LOGIN          : {
        USER_NOT_FOUND : 'user_not_found',
        BCRYPT_ERROR   : 'bcrypt_error',
        WRONG_PASSWORD : 'wrong_password'
    },
    RESET_PASSWORD       : {
        NO_VERIFICATION      : 'no_verification',
        USER_NOT_FOUND       : 'user_not_found',
        VERIFICATION_EXPIRED : 'verification_expired',
        VERIFICATION_USED    : 'verification_used',
        RESET_FAILED         : 'register_failed',
    },
    LOGOUT          : {
        USER_NOT_FOUND : 'user_not_found'
    }
};

/*
 * User-related errors (mostly related to the contacts-route)
 */
const USER = {
    CONTACTS: {
        SAVE_ERROR    : 'save_error',
        FETCH_ERROR   : 'fetch_error',
        INVALID_STATE : 'invalid_state'
    },
    NOTIFICATIONS: {
        SAVE_FAILED   : 'save_failed'
    }
};

/*
 * Twilio error codes copy pasted from the twilio site
 */
const TWILIO = {
    10001: "Account is not active",
    10002: "Trial account does not support this feature",
    10003: "Incoming call rejected due to inactive account",
    11100: "Invalid URL format",
    11200: "HTTP retrieval failure",
    11205: "HTTP connection failure",
    11206: "HTTP protocol violation",
    11210: "HTTP bad host name",
    11215: "HTTP too many redirects",
    11220: "SSL/TLS Handshake Error",
    11235: "Certificate Invalid - Domain Mismatch",
    11236: "Certificate Invalid - Certificate Expired",
    11237: "Certificate Invalid - Could not find path to certificate",
    11300: "Invalid template URL",
    11310: "Invalid template token",
    11320: "Invalid template unclosed brackets",
    11750: "TwiML response body too large",
    11751: "MMS -> Media exceeds mobile operator size limit",
    11770: "Empty response body",
    12100: "Document parse failure",
    12101: "Invalid Twilio Markup XML version",
    12102: "The root element must be Response",
    12200: "Schema validation warning",
    12300: "Invalid Content-Type",
    12400: "Internal Failure",
    13201: "Dial: Cannot Dial out from a Dial Call Segment",
    13210: "Dial: Invalid method value",
    13211: "Dial: Invalid ifMachine value",
    13212: "Dial: Invalid timeout value",
    13213: "Dial: Invalid hangupOnStar value",
    13214: "Dial: Invalid callerId value",
    13215: "Dial: Invalid nested element",
    13216: "Dial: Invalid timeLimit value",
    13217: "Dial: Invalid record value",
    13221: "Dial->Number: Invalid method value",
    13222: "Dial->Number: Invalid sendDigits value",
    13223: "Dial: Invalid phone number format",
    13224: "Dial: Invalid phone number",
    13225: "Dial: Forbidden phone number",
    13226: "Dial: Invalid country code",
    13227: "Dial: No International Authorization",
    13230: "Dial->Conference: Invalid muted value",
    13231: "Dial->Conference: Invalid endConferenceOnExit value",
    13232: "Dial->Conference: Invalid startConferenceOnEnter value",
    13233: "Dial->Conference: Invalid waitUrl value",
    13234: "Dial->Conference: Invalid waitMethod value",
    13235: "Dial->Conference: Invalid beep value",
    13236: "Dial->Conference: Invalid Conference Sid value",
    13237: "Dial->Conference: Invalid conference name",
    13238: "Dial->Conference: Invalid verb for waitUrl TwiML",
    13241: "Dial->SIP: Invalid method value",
    13242: "Dial->SIP: Invalid sendDigits value",
    13243: "Dial->SIP: Invalid SIP URI",
    13245: "Dial->SIP: Wrong API Version",
    13247: "Dial->SIP: Invalid callerID, invalid characters",
    13248: "Dial->SIP: Invalid callerID, too many characters",
    13249: "Dial->SIP: Invalid username or password attribute",
    13252: "Dial->SIP: Invalid header name",
    13253: "Dial->SIP: Header is too long",
    13254: "Dial->Sip: SIP URI DNS does not resolve or resolves to an non-public IP address",
    13255: "Dial->Sip: Dialing .sip.twilio.com addresses is not currently allowed",
    13310: "Gather: Invalid finishOnKey value",
    13311: "Gather: Invalid finishOnKey value",
    13312: "Gather: Invalid method value",
    13313: "Gather: Invalid timeout value",
    13314: "Gather: Invalid numDigits value",
    13320: "Gather: Invalid nested verb",
    13321: "Gather->Say: Invalid voice value",
    13322: "Gather->Say: Invalid loop value",
    13325: "Gather->Play: Invalid Content-Type",
    13410: "Play: Invalid loop value",
    13420: "Play: Invalid Content-Type",
    13510: "Say: Invalid loop value",
    13511: "Say: Invalid voice value",
    13520: "Say: Invalid text",
    13610: "Record: Invalid method value",
    13611: "Record: Invalid timeout value",
    13612: "Record: Invalid maxLength value",
    13613: "Record: Invalid finishOnKey value",
    13614: "Record: Invalid transcribe value",
    13615: "Record: maxLength too high for transcription",
    13616: "Record: playBeep must be true or false",
    13617: "Record: Recording length is out of range for transcription",
    13618: "Record: Recording not available for transcription",
    13710: "Redirect: Invalid method value",
    13910: "Pause: Invalid length value",
    14101: "To Attribute is Invalid",
    14102: "Message From Attribute is Invalid",
    14103: "Message Invalid Body",
    14104: "SMS method attribute invalid",
    14105: "Sms Verb statusCallback attribute Invalid",
    14106: "Message Reply TwiML document retrieval limit reached",
    14107: "Message rate limit exceeded",
    14108: "Message From Phone Number not SMS capable",
    14109: "Message Reply message limit exceeded",
    14110: "Invalid Verb for Message Reply",
    14111: "Invalid To phone number for Trial mode",
    14201: "Enqueue: Invalid method value; must be 'GET' or 'POST'",
    14202: "Enqueue: The waitUrl for the Enqueue verb is invalid.",
    14203: "Enqueue: The action URL for the Enqueue verb is invalid.",
    14204: "Enqueue: Queue name too short",
    14205: "Enqueue: Queue name too long",
    14206: "Enqueue: The waitUrlMethod value is invalid. You must specify one of 'GET' or 'POST'.",
    14210: "Dial->Queue: Invalid whisper method",
    14211: "Dial->Queue: Invalid whisper url",
    14212: "Dial->Queue: Queue name too short",
    14213: "Dial->Queue: Queue name too long",
    14214: "Dial->Queue: Invalid Call Sid. Unable to dequeue",
    14215: "Dial->Queue: Invalid ReservationSid. Unable to dequeue",
    14216: "Dial->Queue: Invalid ActivitySid provided for postWorkActivitySid",
    14217: "Dial->Queue: Could not find or accept provided reservationSid",
    14218: "Dial->Queue: Could not update worker to provided activity",
    14220: "Enqueue: Provided Workflow was not a valid sid",
    14221: "Enqueue: Provided Attributes JSON was not valid",
    14222: "Enqueue: Unable to create task",
    14223: "Enqueue: Unable to cleanup task",
    15000: "Call Progress: Internal Twilio Error",
    15001: "Call Progress: Account Queue Full",
    15002: "Call Progress: Queue Timeout",
    15003: "Call Progress: Error Response to Callback URL",
    20001: "Unknown parameters",
    20002: "Invalid FriendlyName",
    20003: "Permission Denied",
    20004: "Method not allowed",
    20005: "Account not active",
    20006: "Access Denied",
    20007: "Page size too large",
    20008: "Cannot access this resource with Test Credentials",
    20101: "Invalid Access Token",
    20102: "Invalid Access Token header",
    20103: "Invalid Access Token issuer/subject",
    20104: "Access Token expired or expiration date invalid",
    20105: "Access Token not yet valid",
    20106: "Invalid Access Token grants",
    20107: "Invalid Access Token signature",
    20403: "403 Forbidden",
    20429: "429 Too Many Requests",
    20500: "500 Internal Server Error",
    20503: "503 Service Unavailable",
    21100: "Accounts Resource",
    21200: "Calls Resource",
    21201: "No 'To' number specified",
    21202: "'To' number is a premium number",
    21203: "International calling not enabled",
    21204: "Call already initiated",
    21205: "Invalid URL",
    21206: "Invalid SendDigits",
    21207: "Invalid IfMachine",
    21208: "Invalid Timeout",
    21209: "Invalid Method",
    21210: "'From' phone number not verified",
    21211: "Invalid 'To' Phone Number",
    21212: "Invalid 'From' Phone Number",
    21213: "'From' phone number is required",
    21214: "'To' phone number cannot be reached",
    21215: "Account not authorized to call phone number",
    21216: "Account not allowed to call phone number",
    21217: "Phone number does not appear to be valid",
    21218: "Invalid ApplicationSid",
    21219: "'To' phone number not verified",
    21220: "Invalid call state",
    21221: "Invalid SipAuthUsername. Must be less than 256 chars",
    21222: "Invalid SipAuthUsername. Illegal chars",
    21223: "Invalid SipAuthPassword. Must be less than 256 chars",
    21224: "Invalid SipAuthPassword. Illegal chars",
    21225: "SipAuthPassword is required when providing SipAuthUsername",
    21227: "Headers portion of sip URI must be less than 1024 chars",
    21228: "Invalid SIP Header. Illegal chars in header name",
    21229: "Invalid SIP Header. Illegal chars in header value",
    21230: "Maximum Domains Reached",
    21231: "Domain Validation Error",
    21232: "Invalid Domain",
    21233: "Domain still has subdomains",
    21234: "Maximum IP Access Control Lists reached",
    21235: "IP Access Control List Validation Error",
    21236: "IP Access Control List Dependencies Violation",
    21237: "Maximum IP Addresses Reached for List",
    21238: "Address Validation Error",
    21239: "Maximum Credential Lists Reached",
    21240: "Credential List Validation Error",
    21241: "Credential List Dependencies Violation",
    21242: "Maximum Credentials Reached for List",
    21243: "Credential Validation Error",
    21401: "Invalid Phone Number",
    21402: "Invalid URL",
    21403: "Invalid Method",
    21404: "Inbound phone numbers not available to trial accounts",
    21405: "Cannot set VoiceFallbackUrl without setting Url",
    21406: "Cannot set SmsFallbackUrl without setting SmsUrl",
    21407: "This Phone Number type does not support SMS or MMS",
    21408: "Permission to send an SMS or MMS has not been enabled for the region indicated by the 'To' number",
    21409: "VoiceCallerIdLookup cannot be set for this phone number",
    21420: "ApplicationSid is not accessible",
    21421: "PhoneNumber is invalid",
    21422: "PhoneNumber is not available for purchase",
    21450: "Phone number already verified for your account",
    21451: "Invalid area code",
    21452: "No phone numbers found in area code",
    21453: "Phone number already verified for another account",
    21454: "Invalid CallDelay",
    21455: "Invalid PlayUrl",
    21456: "Invalid CallbackUrl",
    21459: "Phone number is blacklisted for verification",
    21457: "AreaCode Parameter not Supported",
    21458: "PhoneNumber Provisioning Type Mismatch",
    21470: "Invalid AccountSid",
    21471: "Account does not exist",
    21472: "Account is not active",
    21473: "AccountSid you are transferring to is not related to the originating owner of the phone number",
    21474: "API User must be the parent account to transfer phone numbers.",
    21475: "Unable to update Status, invalid Status.",
    21476: "Unable to update Status for subaccount, parent account is suspended.",
    21477: "Unable to update Status for parent accounts",
    21478: "Unable to update Status for subaccount, subaccount has been suspended by Twilio",
    21479: "Unable to update Status for subaccount, subaccount has been closed.",
    21480: "Reached maximum number of subaccounts",
    21481: "Invalid PageToken",
    21501: "Resource not available",
    21502: "Invalid callback url",
    21503: "Invalid transcription type",
    21504: "RecordingSid is required.",
    21601: "Phone number is not a valid SMS-capable/MMS-capable inbound phone number",
    21602: "'Body' OR MediaURL is required to send a Message",
    21603: "'From' phone number is required to send a Message",
    21604: "'To' phone number is required to send a Message",
    21605: "Maximum body length is 160 characters",
    21606: "The 'From' phone number provided is not a valid, message-capable Twilio phone number.",
    21607: "The 'From' number is not a valid, SMS-capable Twilio number",
    21608: "This number can send messages only to verified numbers",
    21609: "Invalid StatusCallback url",
    21610: "Message cannot be sent to the 'To' number because the customer has replied with STOP",
    21611: "This 'From' number has exceeded the maximum number of queued messages",
    21612: "The 'To' phone number is not currently reachable via SMS",
    21613: "PhoneNumber Requires an Address",
    21614: "'To' number is not a valid mobile number",
    21615: "PhoneNumber Requires a Local Address",
    21616: "The 'From' number matches multiple numbers for your account",
    21617: "The concatenated message body exceeds the 1600 character limit",
    21618: "The message body cannot be sent",
    21619: "A text message body or media urls must be specified",
    21620: "Invalid media URL(s)",
    21621: "The 'From' number has not been enabled for MMS",
    21622: "MMS has not been enabled for your account",
    21623: "Number of media files exceeds allowed limit",
    21624: "PhoneNumber Requires a Foreign Address",
    21625: "Address Required for Active IncomingPhoneNumber",
    21626: "Invalid 'StatusCallbackEvent'",
    21701: "The Messaging Service does not exist.",
    21702: "The Messaging Service is not available to send new messages.",
    21703: "The Messaging Service does not have a phone number available to send a message.",
    21704: "The Messaging Service contains no phone numbers.",
    21705: "The Messaging Service is invalid.",
    22001: "Call exceeded maximum time in queue",
    22002: "Call could not be dequeued",
    22003: "Queue with the given name already exists",
    30001: "Message Delivery - Queue overflow",
    30002: "Message Delivery - Account suspended",
    30003: "Message Delivery - Unreachable destination handset",
    30004: "Message Delivery - Message blocked",
    30005: "Message Delivery - Unknown destination handset",
    30006: "Message Delivery - Landline or unreachable carrier",
    30007: "Message Delivery - Carrier violation",
    30008: "Message Delivery - Unknown error",
    30009: "Inbound Message - Missing segment",
    30010: "Final Message price exceeded max price",
    32001: "SIP: Trunk CPS limit exceeded",
    32006: "SIP: Too many hops",
    32101: "SIP: Invalid phone number",
    32102: "SIP: Bad SDP",
    32103: "SIP: Empty body",
    32200: "SIP: Insufficient permissions",
    32201: "SIP: Source IP address not in ACL",
    32202: "SIP: Bad user credentials",
    32203: "SIP: Phone number blacklisted",
    32204: "SIP: Invalid caller ID",
    32205: "SIP: No international permission",
    32207: "SIP: Secure media not accepted",
    32208: "SIP: Secure media required",
    32209: "SIP: Secure transport required",
    40000: "TaskRouter Instruction does not have a Content-Type header of 'application/json' set.",
    40100: "TaskRouter Reject Instruction does not have a valid 'activity_sid' provided.",
    40110: "TaskRouter Call Instruction does not have a valid 'to' parameter provided.",
    40111: "TaskRouter Call Instruction does not have a valid 'from' parameter provided.",
    40112: "TaskRouter Call Instruction does not have a valid 'url' parameter provided.",
    40113: "TaskRouter Call Instruction encountered an error when requesting an outgoing call be made from the API.",
    40120: "TaskRouter Direct Instruction does not have a valid 'url' parameter provided.",
    40121: "TaskRouter Direct Instruction does not have a valid 'call_sid' parameter provided.",
    40122: "TaskRouter Direct Instruction encountered an error when redirecting a call via the API.",
    40130: "TaskRouter Dequeue Instruction does not have a valid 'post_work_activity_sid' provided.",
    40131: "TaskRouter Dequeue Instruction does not have a valid 'to' parameter provided.",
    40132: "TaskRouter Dequeue Instruction does not have a valid 'from' parameter provided.",
    40133: "TaskRouter Dequeue Instruction encountered an error when requesting an outgoing call be made from the API.",
    50001: "IP Messaging: FriendlyName not provided",
    50002: "IP Messaging: Account SID not provided",
    50050: "IP Messaging: Service Instance not found",
    50051: "IP Messaging: Service SID not provided",
    50052: "IP Messaging: Invalid consumption interval format",
    50053: "IP Messaging: Invalid typing indicator format",
    50054: "IP Messaging: Invalid webhook format",
    50055: "IP Messaging: Invalid webhook method",
    50056: "IP Messaging: Webhook disabled processing of command",
    50100: "IP Messaging: Role not found",
    50101: "IP Messaging: Channel role not found",
    50102: "IP Messaging: Deployment role not found",
    50103: "IP Messaging: Role SID not provided",
    50104: "IP Messaging: Permission not found",
    50105: "IP Messaging: Invalid role type",
    50106: "IP Messaging: Channel creator role not found",
    50107: "IP Messaging: User not authorized for command",
    50200: "IP Messaging: User not found",
    50201: "IP Messaging: User already exists",
    50202: "IP Messaging: User SID not provided",
    50203: "IP Messaging: Username reserved",
    50204: "IP Messaging: Username not provided",
    50205: "IP Messaging: User unauthorized to set role",
    50300: "IP Messaging: Channel not found",
    50301: "IP Messaging: Channel key not provided",
    50302: "IP Messaging: Unknown channel command",
    50303: "IP Messaging: Attributes too long",
    50304: "IP Messaging: Attributes not valid JSON",
    50305: "IP Messaging: Channel SID not provided",
    50306: "IP Messaging: Unique name should not match channel SID pattern",
    50307: "IP Messaging: Channel with provided unique name already exists",
    50400: "IP Messaging: User not member of channel",
    50401: "IP Messaging: Member SID not provided",
    50402: "IP Messaging: Member not found",
    50500: "IP Messaging: Message not found",
    50501: "IP Messaging: Message SID not provided",
    50502: "IP Messaging: Message index not provided",
    50503: "IP Messaging: Message body not provided",
    50600: "IP Messaging: Invite SID not provided",
    50601: "IP Messaging: Invite not found"
};

/*
 * Misc. generic error types
 */
const GENERIC = {
    MISSING_PARAMS    : 'missing_params',
    TOKEN_MISSING     : 'token_missing',
    TWILIO_ERROR      : 'twilio_error',
    UNSPECIFIED_ERROR : 'unspecified_error'
};

export { AUTH, USER, GENERIC, TWILIO }

