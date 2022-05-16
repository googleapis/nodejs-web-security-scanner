// Copyright 2022 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import * as Long from "long";
import {protobuf as $protobuf} from "google-gax";
/** Namespace google. */
export namespace google {

    /** Namespace cloud. */
    namespace cloud {

        /** Namespace websecurityscanner. */
        namespace websecurityscanner {

            /** Namespace v1. */
            namespace v1 {

                /** Properties of a CrawledUrl. */
                interface ICrawledUrl {

                    /** CrawledUrl httpMethod */
                    httpMethod?: (string|null);

                    /** CrawledUrl url */
                    url?: (string|null);

                    /** CrawledUrl body */
                    body?: (string|null);
                }

                /** Represents a CrawledUrl. */
                class CrawledUrl implements ICrawledUrl {

                    /**
                     * Constructs a new CrawledUrl.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1.ICrawledUrl);

                    /** CrawledUrl httpMethod. */
                    public httpMethod: string;

                    /** CrawledUrl url. */
                    public url: string;

                    /** CrawledUrl body. */
                    public body: string;

                    /**
                     * Creates a new CrawledUrl instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CrawledUrl instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1.ICrawledUrl): google.cloud.websecurityscanner.v1.CrawledUrl;

                    /**
                     * Encodes the specified CrawledUrl message. Does not implicitly {@link google.cloud.websecurityscanner.v1.CrawledUrl.verify|verify} messages.
                     * @param message CrawledUrl message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1.ICrawledUrl, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CrawledUrl message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1.CrawledUrl.verify|verify} messages.
                     * @param message CrawledUrl message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1.ICrawledUrl, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CrawledUrl message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CrawledUrl
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1.CrawledUrl;

                    /**
                     * Decodes a CrawledUrl message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CrawledUrl
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1.CrawledUrl;

                    /**
                     * Verifies a CrawledUrl message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CrawledUrl message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CrawledUrl
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1.CrawledUrl;

                    /**
                     * Creates a plain object from a CrawledUrl message. Also converts values to other types if specified.
                     * @param message CrawledUrl
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1.CrawledUrl, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CrawledUrl to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Finding. */
                interface IFinding {

                    /** Finding name */
                    name?: (string|null);

                    /** Finding findingType */
                    findingType?: (string|null);

                    /** Finding severity */
                    severity?: (google.cloud.websecurityscanner.v1.Finding.Severity|keyof typeof google.cloud.websecurityscanner.v1.Finding.Severity|null);

                    /** Finding httpMethod */
                    httpMethod?: (string|null);

                    /** Finding fuzzedUrl */
                    fuzzedUrl?: (string|null);

                    /** Finding body */
                    body?: (string|null);

                    /** Finding description */
                    description?: (string|null);

                    /** Finding reproductionUrl */
                    reproductionUrl?: (string|null);

                    /** Finding frameUrl */
                    frameUrl?: (string|null);

                    /** Finding finalUrl */
                    finalUrl?: (string|null);

                    /** Finding trackingId */
                    trackingId?: (string|null);

                    /** Finding form */
                    form?: (google.cloud.websecurityscanner.v1.IForm|null);

                    /** Finding outdatedLibrary */
                    outdatedLibrary?: (google.cloud.websecurityscanner.v1.IOutdatedLibrary|null);

                    /** Finding violatingResource */
                    violatingResource?: (google.cloud.websecurityscanner.v1.IViolatingResource|null);

                    /** Finding vulnerableHeaders */
                    vulnerableHeaders?: (google.cloud.websecurityscanner.v1.IVulnerableHeaders|null);

                    /** Finding vulnerableParameters */
                    vulnerableParameters?: (google.cloud.websecurityscanner.v1.IVulnerableParameters|null);

                    /** Finding xss */
                    xss?: (google.cloud.websecurityscanner.v1.IXss|null);
                }

                /** Represents a Finding. */
                class Finding implements IFinding {

                    /**
                     * Constructs a new Finding.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1.IFinding);

                    /** Finding name. */
                    public name: string;

                    /** Finding findingType. */
                    public findingType: string;

                    /** Finding severity. */
                    public severity: (google.cloud.websecurityscanner.v1.Finding.Severity|keyof typeof google.cloud.websecurityscanner.v1.Finding.Severity);

                    /** Finding httpMethod. */
                    public httpMethod: string;

                    /** Finding fuzzedUrl. */
                    public fuzzedUrl: string;

                    /** Finding body. */
                    public body: string;

                    /** Finding description. */
                    public description: string;

                    /** Finding reproductionUrl. */
                    public reproductionUrl: string;

                    /** Finding frameUrl. */
                    public frameUrl: string;

                    /** Finding finalUrl. */
                    public finalUrl: string;

                    /** Finding trackingId. */
                    public trackingId: string;

                    /** Finding form. */
                    public form?: (google.cloud.websecurityscanner.v1.IForm|null);

                    /** Finding outdatedLibrary. */
                    public outdatedLibrary?: (google.cloud.websecurityscanner.v1.IOutdatedLibrary|null);

                    /** Finding violatingResource. */
                    public violatingResource?: (google.cloud.websecurityscanner.v1.IViolatingResource|null);

                    /** Finding vulnerableHeaders. */
                    public vulnerableHeaders?: (google.cloud.websecurityscanner.v1.IVulnerableHeaders|null);

                    /** Finding vulnerableParameters. */
                    public vulnerableParameters?: (google.cloud.websecurityscanner.v1.IVulnerableParameters|null);

                    /** Finding xss. */
                    public xss?: (google.cloud.websecurityscanner.v1.IXss|null);

                    /**
                     * Creates a new Finding instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Finding instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1.IFinding): google.cloud.websecurityscanner.v1.Finding;

                    /**
                     * Encodes the specified Finding message. Does not implicitly {@link google.cloud.websecurityscanner.v1.Finding.verify|verify} messages.
                     * @param message Finding message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1.IFinding, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Finding message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1.Finding.verify|verify} messages.
                     * @param message Finding message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1.IFinding, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Finding message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Finding
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1.Finding;

                    /**
                     * Decodes a Finding message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Finding
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1.Finding;

                    /**
                     * Verifies a Finding message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Finding message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Finding
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1.Finding;

                    /**
                     * Creates a plain object from a Finding message. Also converts values to other types if specified.
                     * @param message Finding
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1.Finding, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Finding to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Finding {

                    /** Severity enum. */
                    enum Severity {
                        SEVERITY_UNSPECIFIED = 0,
                        CRITICAL = 1,
                        HIGH = 2,
                        MEDIUM = 3,
                        LOW = 4
                    }
                }

                /** Properties of a Form. */
                interface IForm {

                    /** Form actionUri */
                    actionUri?: (string|null);

                    /** Form fields */
                    fields?: (string[]|null);
                }

                /** Represents a Form. */
                class Form implements IForm {

                    /**
                     * Constructs a new Form.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1.IForm);

                    /** Form actionUri. */
                    public actionUri: string;

                    /** Form fields. */
                    public fields: string[];

                    /**
                     * Creates a new Form instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Form instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1.IForm): google.cloud.websecurityscanner.v1.Form;

                    /**
                     * Encodes the specified Form message. Does not implicitly {@link google.cloud.websecurityscanner.v1.Form.verify|verify} messages.
                     * @param message Form message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1.IForm, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Form message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1.Form.verify|verify} messages.
                     * @param message Form message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1.IForm, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Form message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Form
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1.Form;

                    /**
                     * Decodes a Form message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Form
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1.Form;

                    /**
                     * Verifies a Form message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Form message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Form
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1.Form;

                    /**
                     * Creates a plain object from a Form message. Also converts values to other types if specified.
                     * @param message Form
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1.Form, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Form to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an OutdatedLibrary. */
                interface IOutdatedLibrary {

                    /** OutdatedLibrary libraryName */
                    libraryName?: (string|null);

                    /** OutdatedLibrary version */
                    version?: (string|null);

                    /** OutdatedLibrary learnMoreUrls */
                    learnMoreUrls?: (string[]|null);
                }

                /** Represents an OutdatedLibrary. */
                class OutdatedLibrary implements IOutdatedLibrary {

                    /**
                     * Constructs a new OutdatedLibrary.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1.IOutdatedLibrary);

                    /** OutdatedLibrary libraryName. */
                    public libraryName: string;

                    /** OutdatedLibrary version. */
                    public version: string;

                    /** OutdatedLibrary learnMoreUrls. */
                    public learnMoreUrls: string[];

                    /**
                     * Creates a new OutdatedLibrary instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OutdatedLibrary instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1.IOutdatedLibrary): google.cloud.websecurityscanner.v1.OutdatedLibrary;

                    /**
                     * Encodes the specified OutdatedLibrary message. Does not implicitly {@link google.cloud.websecurityscanner.v1.OutdatedLibrary.verify|verify} messages.
                     * @param message OutdatedLibrary message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1.IOutdatedLibrary, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OutdatedLibrary message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1.OutdatedLibrary.verify|verify} messages.
                     * @param message OutdatedLibrary message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1.IOutdatedLibrary, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OutdatedLibrary message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OutdatedLibrary
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1.OutdatedLibrary;

                    /**
                     * Decodes an OutdatedLibrary message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OutdatedLibrary
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1.OutdatedLibrary;

                    /**
                     * Verifies an OutdatedLibrary message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an OutdatedLibrary message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns OutdatedLibrary
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1.OutdatedLibrary;

                    /**
                     * Creates a plain object from an OutdatedLibrary message. Also converts values to other types if specified.
                     * @param message OutdatedLibrary
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1.OutdatedLibrary, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OutdatedLibrary to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ViolatingResource. */
                interface IViolatingResource {

                    /** ViolatingResource contentType */
                    contentType?: (string|null);

                    /** ViolatingResource resourceUrl */
                    resourceUrl?: (string|null);
                }

                /** Represents a ViolatingResource. */
                class ViolatingResource implements IViolatingResource {

                    /**
                     * Constructs a new ViolatingResource.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1.IViolatingResource);

                    /** ViolatingResource contentType. */
                    public contentType: string;

                    /** ViolatingResource resourceUrl. */
                    public resourceUrl: string;

                    /**
                     * Creates a new ViolatingResource instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ViolatingResource instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1.IViolatingResource): google.cloud.websecurityscanner.v1.ViolatingResource;

                    /**
                     * Encodes the specified ViolatingResource message. Does not implicitly {@link google.cloud.websecurityscanner.v1.ViolatingResource.verify|verify} messages.
                     * @param message ViolatingResource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1.IViolatingResource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ViolatingResource message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1.ViolatingResource.verify|verify} messages.
                     * @param message ViolatingResource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1.IViolatingResource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ViolatingResource message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ViolatingResource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1.ViolatingResource;

                    /**
                     * Decodes a ViolatingResource message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ViolatingResource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1.ViolatingResource;

                    /**
                     * Verifies a ViolatingResource message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ViolatingResource message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ViolatingResource
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1.ViolatingResource;

                    /**
                     * Creates a plain object from a ViolatingResource message. Also converts values to other types if specified.
                     * @param message ViolatingResource
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1.ViolatingResource, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ViolatingResource to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a VulnerableParameters. */
                interface IVulnerableParameters {

                    /** VulnerableParameters parameterNames */
                    parameterNames?: (string[]|null);
                }

                /** Represents a VulnerableParameters. */
                class VulnerableParameters implements IVulnerableParameters {

                    /**
                     * Constructs a new VulnerableParameters.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1.IVulnerableParameters);

                    /** VulnerableParameters parameterNames. */
                    public parameterNames: string[];

                    /**
                     * Creates a new VulnerableParameters instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns VulnerableParameters instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1.IVulnerableParameters): google.cloud.websecurityscanner.v1.VulnerableParameters;

                    /**
                     * Encodes the specified VulnerableParameters message. Does not implicitly {@link google.cloud.websecurityscanner.v1.VulnerableParameters.verify|verify} messages.
                     * @param message VulnerableParameters message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1.IVulnerableParameters, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified VulnerableParameters message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1.VulnerableParameters.verify|verify} messages.
                     * @param message VulnerableParameters message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1.IVulnerableParameters, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a VulnerableParameters message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns VulnerableParameters
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1.VulnerableParameters;

                    /**
                     * Decodes a VulnerableParameters message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns VulnerableParameters
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1.VulnerableParameters;

                    /**
                     * Verifies a VulnerableParameters message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a VulnerableParameters message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns VulnerableParameters
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1.VulnerableParameters;

                    /**
                     * Creates a plain object from a VulnerableParameters message. Also converts values to other types if specified.
                     * @param message VulnerableParameters
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1.VulnerableParameters, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this VulnerableParameters to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a VulnerableHeaders. */
                interface IVulnerableHeaders {

                    /** VulnerableHeaders headers */
                    headers?: (google.cloud.websecurityscanner.v1.VulnerableHeaders.IHeader[]|null);

                    /** VulnerableHeaders missingHeaders */
                    missingHeaders?: (google.cloud.websecurityscanner.v1.VulnerableHeaders.IHeader[]|null);
                }

                /** Represents a VulnerableHeaders. */
                class VulnerableHeaders implements IVulnerableHeaders {

                    /**
                     * Constructs a new VulnerableHeaders.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1.IVulnerableHeaders);

                    /** VulnerableHeaders headers. */
                    public headers: google.cloud.websecurityscanner.v1.VulnerableHeaders.IHeader[];

                    /** VulnerableHeaders missingHeaders. */
                    public missingHeaders: google.cloud.websecurityscanner.v1.VulnerableHeaders.IHeader[];

                    /**
                     * Creates a new VulnerableHeaders instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns VulnerableHeaders instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1.IVulnerableHeaders): google.cloud.websecurityscanner.v1.VulnerableHeaders;

                    /**
                     * Encodes the specified VulnerableHeaders message. Does not implicitly {@link google.cloud.websecurityscanner.v1.VulnerableHeaders.verify|verify} messages.
                     * @param message VulnerableHeaders message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1.IVulnerableHeaders, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified VulnerableHeaders message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1.VulnerableHeaders.verify|verify} messages.
                     * @param message VulnerableHeaders message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1.IVulnerableHeaders, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a VulnerableHeaders message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns VulnerableHeaders
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1.VulnerableHeaders;

                    /**
                     * Decodes a VulnerableHeaders message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns VulnerableHeaders
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1.VulnerableHeaders;

                    /**
                     * Verifies a VulnerableHeaders message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a VulnerableHeaders message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns VulnerableHeaders
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1.VulnerableHeaders;

                    /**
                     * Creates a plain object from a VulnerableHeaders message. Also converts values to other types if specified.
                     * @param message VulnerableHeaders
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1.VulnerableHeaders, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this VulnerableHeaders to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace VulnerableHeaders {

                    /** Properties of a Header. */
                    interface IHeader {

                        /** Header name */
                        name?: (string|null);

                        /** Header value */
                        value?: (string|null);
                    }

                    /** Represents a Header. */
                    class Header implements IHeader {

                        /**
                         * Constructs a new Header.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.websecurityscanner.v1.VulnerableHeaders.IHeader);

                        /** Header name. */
                        public name: string;

                        /** Header value. */
                        public value: string;

                        /**
                         * Creates a new Header instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Header instance
                         */
                        public static create(properties?: google.cloud.websecurityscanner.v1.VulnerableHeaders.IHeader): google.cloud.websecurityscanner.v1.VulnerableHeaders.Header;

                        /**
                         * Encodes the specified Header message. Does not implicitly {@link google.cloud.websecurityscanner.v1.VulnerableHeaders.Header.verify|verify} messages.
                         * @param message Header message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.websecurityscanner.v1.VulnerableHeaders.IHeader, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Header message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1.VulnerableHeaders.Header.verify|verify} messages.
                         * @param message Header message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.websecurityscanner.v1.VulnerableHeaders.IHeader, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Header message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Header
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1.VulnerableHeaders.Header;

                        /**
                         * Decodes a Header message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Header
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1.VulnerableHeaders.Header;

                        /**
                         * Verifies a Header message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Header message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Header
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1.VulnerableHeaders.Header;

                        /**
                         * Creates a plain object from a Header message. Also converts values to other types if specified.
                         * @param message Header
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.websecurityscanner.v1.VulnerableHeaders.Header, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Header to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Properties of a Xss. */
                interface IXss {

                    /** Xss stackTraces */
                    stackTraces?: (string[]|null);

                    /** Xss errorMessage */
                    errorMessage?: (string|null);

                    /** Xss attackVector */
                    attackVector?: (google.cloud.websecurityscanner.v1.Xss.AttackVector|keyof typeof google.cloud.websecurityscanner.v1.Xss.AttackVector|null);

                    /** Xss storedXssSeedingUrl */
                    storedXssSeedingUrl?: (string|null);
                }

                /** Represents a Xss. */
                class Xss implements IXss {

                    /**
                     * Constructs a new Xss.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1.IXss);

                    /** Xss stackTraces. */
                    public stackTraces: string[];

                    /** Xss errorMessage. */
                    public errorMessage: string;

                    /** Xss attackVector. */
                    public attackVector: (google.cloud.websecurityscanner.v1.Xss.AttackVector|keyof typeof google.cloud.websecurityscanner.v1.Xss.AttackVector);

                    /** Xss storedXssSeedingUrl. */
                    public storedXssSeedingUrl: string;

                    /**
                     * Creates a new Xss instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Xss instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1.IXss): google.cloud.websecurityscanner.v1.Xss;

                    /**
                     * Encodes the specified Xss message. Does not implicitly {@link google.cloud.websecurityscanner.v1.Xss.verify|verify} messages.
                     * @param message Xss message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1.IXss, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Xss message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1.Xss.verify|verify} messages.
                     * @param message Xss message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1.IXss, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Xss message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Xss
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1.Xss;

                    /**
                     * Decodes a Xss message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Xss
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1.Xss;

                    /**
                     * Verifies a Xss message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Xss message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Xss
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1.Xss;

                    /**
                     * Creates a plain object from a Xss message. Also converts values to other types if specified.
                     * @param message Xss
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1.Xss, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Xss to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Xss {

                    /** AttackVector enum. */
                    enum AttackVector {
                        ATTACK_VECTOR_UNSPECIFIED = 0,
                        LOCAL_STORAGE = 1,
                        SESSION_STORAGE = 2,
                        WINDOW_NAME = 3,
                        REFERRER = 4,
                        FORM_INPUT = 5,
                        COOKIE = 6,
                        POST_MESSAGE = 7,
                        GET_PARAMETERS = 8,
                        URL_FRAGMENT = 9,
                        HTML_COMMENT = 10,
                        POST_PARAMETERS = 11,
                        PROTOCOL = 12,
                        STORED_XSS = 13,
                        SAME_ORIGIN = 14,
                        USER_CONTROLLABLE_URL = 15
                    }
                }

                /** Properties of a FindingTypeStats. */
                interface IFindingTypeStats {

                    /** FindingTypeStats findingType */
                    findingType?: (string|null);

                    /** FindingTypeStats findingCount */
                    findingCount?: (number|null);
                }

                /** Represents a FindingTypeStats. */
                class FindingTypeStats implements IFindingTypeStats {

                    /**
                     * Constructs a new FindingTypeStats.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1.IFindingTypeStats);

                    /** FindingTypeStats findingType. */
                    public findingType: string;

                    /** FindingTypeStats findingCount. */
                    public findingCount: number;

                    /**
                     * Creates a new FindingTypeStats instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FindingTypeStats instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1.IFindingTypeStats): google.cloud.websecurityscanner.v1.FindingTypeStats;

                    /**
                     * Encodes the specified FindingTypeStats message. Does not implicitly {@link google.cloud.websecurityscanner.v1.FindingTypeStats.verify|verify} messages.
                     * @param message FindingTypeStats message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1.IFindingTypeStats, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FindingTypeStats message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1.FindingTypeStats.verify|verify} messages.
                     * @param message FindingTypeStats message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1.IFindingTypeStats, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FindingTypeStats message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FindingTypeStats
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1.FindingTypeStats;

                    /**
                     * Decodes a FindingTypeStats message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FindingTypeStats
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1.FindingTypeStats;

                    /**
                     * Verifies a FindingTypeStats message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FindingTypeStats message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FindingTypeStats
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1.FindingTypeStats;

                    /**
                     * Creates a plain object from a FindingTypeStats message. Also converts values to other types if specified.
                     * @param message FindingTypeStats
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1.FindingTypeStats, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FindingTypeStats to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ScanConfig. */
                interface IScanConfig {

                    /** ScanConfig name */
                    name?: (string|null);

                    /** ScanConfig displayName */
                    displayName?: (string|null);

                    /** ScanConfig maxQps */
                    maxQps?: (number|null);

                    /** ScanConfig startingUrls */
                    startingUrls?: (string[]|null);

                    /** ScanConfig authentication */
                    authentication?: (google.cloud.websecurityscanner.v1.ScanConfig.IAuthentication|null);

                    /** ScanConfig userAgent */
                    userAgent?: (google.cloud.websecurityscanner.v1.ScanConfig.UserAgent|keyof typeof google.cloud.websecurityscanner.v1.ScanConfig.UserAgent|null);

                    /** ScanConfig blacklistPatterns */
                    blacklistPatterns?: (string[]|null);

                    /** ScanConfig schedule */
                    schedule?: (google.cloud.websecurityscanner.v1.ScanConfig.ISchedule|null);

                    /** ScanConfig exportToSecurityCommandCenter */
                    exportToSecurityCommandCenter?: (google.cloud.websecurityscanner.v1.ScanConfig.ExportToSecurityCommandCenter|keyof typeof google.cloud.websecurityscanner.v1.ScanConfig.ExportToSecurityCommandCenter|null);

                    /** ScanConfig riskLevel */
                    riskLevel?: (google.cloud.websecurityscanner.v1.ScanConfig.RiskLevel|keyof typeof google.cloud.websecurityscanner.v1.ScanConfig.RiskLevel|null);

                    /** ScanConfig managedScan */
                    managedScan?: (boolean|null);

                    /** ScanConfig staticIpScan */
                    staticIpScan?: (boolean|null);
                }

                /** Represents a ScanConfig. */
                class ScanConfig implements IScanConfig {

                    /**
                     * Constructs a new ScanConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1.IScanConfig);

                    /** ScanConfig name. */
                    public name: string;

                    /** ScanConfig displayName. */
                    public displayName: string;

                    /** ScanConfig maxQps. */
                    public maxQps: number;

                    /** ScanConfig startingUrls. */
                    public startingUrls: string[];

                    /** ScanConfig authentication. */
                    public authentication?: (google.cloud.websecurityscanner.v1.ScanConfig.IAuthentication|null);

                    /** ScanConfig userAgent. */
                    public userAgent: (google.cloud.websecurityscanner.v1.ScanConfig.UserAgent|keyof typeof google.cloud.websecurityscanner.v1.ScanConfig.UserAgent);

                    /** ScanConfig blacklistPatterns. */
                    public blacklistPatterns: string[];

                    /** ScanConfig schedule. */
                    public schedule?: (google.cloud.websecurityscanner.v1.ScanConfig.ISchedule|null);

                    /** ScanConfig exportToSecurityCommandCenter. */
                    public exportToSecurityCommandCenter: (google.cloud.websecurityscanner.v1.ScanConfig.ExportToSecurityCommandCenter|keyof typeof google.cloud.websecurityscanner.v1.ScanConfig.ExportToSecurityCommandCenter);

                    /** ScanConfig riskLevel. */
                    public riskLevel: (google.cloud.websecurityscanner.v1.ScanConfig.RiskLevel|keyof typeof google.cloud.websecurityscanner.v1.ScanConfig.RiskLevel);

                    /** ScanConfig managedScan. */
                    public managedScan: boolean;

                    /** ScanConfig staticIpScan. */
                    public staticIpScan: boolean;

                    /**
                     * Creates a new ScanConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ScanConfig instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1.IScanConfig): google.cloud.websecurityscanner.v1.ScanConfig;

                    /**
                     * Encodes the specified ScanConfig message. Does not implicitly {@link google.cloud.websecurityscanner.v1.ScanConfig.verify|verify} messages.
                     * @param message ScanConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1.IScanConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ScanConfig message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1.ScanConfig.verify|verify} messages.
                     * @param message ScanConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1.IScanConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ScanConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ScanConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1.ScanConfig;

                    /**
                     * Decodes a ScanConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ScanConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1.ScanConfig;

                    /**
                     * Verifies a ScanConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ScanConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ScanConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1.ScanConfig;

                    /**
                     * Creates a plain object from a ScanConfig message. Also converts values to other types if specified.
                     * @param message ScanConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1.ScanConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ScanConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace ScanConfig {

                    /** Properties of an Authentication. */
                    interface IAuthentication {

                        /** Authentication googleAccount */
                        googleAccount?: (google.cloud.websecurityscanner.v1.ScanConfig.Authentication.IGoogleAccount|null);

                        /** Authentication customAccount */
                        customAccount?: (google.cloud.websecurityscanner.v1.ScanConfig.Authentication.ICustomAccount|null);

                        /** Authentication iapCredential */
                        iapCredential?: (google.cloud.websecurityscanner.v1.ScanConfig.Authentication.IIapCredential|null);
                    }

                    /** Represents an Authentication. */
                    class Authentication implements IAuthentication {

                        /**
                         * Constructs a new Authentication.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.websecurityscanner.v1.ScanConfig.IAuthentication);

                        /** Authentication googleAccount. */
                        public googleAccount?: (google.cloud.websecurityscanner.v1.ScanConfig.Authentication.IGoogleAccount|null);

                        /** Authentication customAccount. */
                        public customAccount?: (google.cloud.websecurityscanner.v1.ScanConfig.Authentication.ICustomAccount|null);

                        /** Authentication iapCredential. */
                        public iapCredential?: (google.cloud.websecurityscanner.v1.ScanConfig.Authentication.IIapCredential|null);

                        /** Authentication authentication. */
                        public authentication?: ("googleAccount"|"customAccount"|"iapCredential");

                        /**
                         * Creates a new Authentication instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Authentication instance
                         */
                        public static create(properties?: google.cloud.websecurityscanner.v1.ScanConfig.IAuthentication): google.cloud.websecurityscanner.v1.ScanConfig.Authentication;

                        /**
                         * Encodes the specified Authentication message. Does not implicitly {@link google.cloud.websecurityscanner.v1.ScanConfig.Authentication.verify|verify} messages.
                         * @param message Authentication message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.websecurityscanner.v1.ScanConfig.IAuthentication, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Authentication message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1.ScanConfig.Authentication.verify|verify} messages.
                         * @param message Authentication message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.websecurityscanner.v1.ScanConfig.IAuthentication, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an Authentication message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Authentication
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1.ScanConfig.Authentication;

                        /**
                         * Decodes an Authentication message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Authentication
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1.ScanConfig.Authentication;

                        /**
                         * Verifies an Authentication message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an Authentication message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Authentication
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1.ScanConfig.Authentication;

                        /**
                         * Creates a plain object from an Authentication message. Also converts values to other types if specified.
                         * @param message Authentication
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.websecurityscanner.v1.ScanConfig.Authentication, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Authentication to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace Authentication {

                        /** Properties of a GoogleAccount. */
                        interface IGoogleAccount {

                            /** GoogleAccount username */
                            username?: (string|null);

                            /** GoogleAccount password */
                            password?: (string|null);
                        }

                        /** Represents a GoogleAccount. */
                        class GoogleAccount implements IGoogleAccount {

                            /**
                             * Constructs a new GoogleAccount.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.websecurityscanner.v1.ScanConfig.Authentication.IGoogleAccount);

                            /** GoogleAccount username. */
                            public username: string;

                            /** GoogleAccount password. */
                            public password: string;

                            /**
                             * Creates a new GoogleAccount instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns GoogleAccount instance
                             */
                            public static create(properties?: google.cloud.websecurityscanner.v1.ScanConfig.Authentication.IGoogleAccount): google.cloud.websecurityscanner.v1.ScanConfig.Authentication.GoogleAccount;

                            /**
                             * Encodes the specified GoogleAccount message. Does not implicitly {@link google.cloud.websecurityscanner.v1.ScanConfig.Authentication.GoogleAccount.verify|verify} messages.
                             * @param message GoogleAccount message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.websecurityscanner.v1.ScanConfig.Authentication.IGoogleAccount, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified GoogleAccount message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1.ScanConfig.Authentication.GoogleAccount.verify|verify} messages.
                             * @param message GoogleAccount message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.websecurityscanner.v1.ScanConfig.Authentication.IGoogleAccount, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a GoogleAccount message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns GoogleAccount
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1.ScanConfig.Authentication.GoogleAccount;

                            /**
                             * Decodes a GoogleAccount message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns GoogleAccount
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1.ScanConfig.Authentication.GoogleAccount;

                            /**
                             * Verifies a GoogleAccount message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a GoogleAccount message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns GoogleAccount
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1.ScanConfig.Authentication.GoogleAccount;

                            /**
                             * Creates a plain object from a GoogleAccount message. Also converts values to other types if specified.
                             * @param message GoogleAccount
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.websecurityscanner.v1.ScanConfig.Authentication.GoogleAccount, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this GoogleAccount to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a CustomAccount. */
                        interface ICustomAccount {

                            /** CustomAccount username */
                            username?: (string|null);

                            /** CustomAccount password */
                            password?: (string|null);

                            /** CustomAccount loginUrl */
                            loginUrl?: (string|null);
                        }

                        /** Represents a CustomAccount. */
                        class CustomAccount implements ICustomAccount {

                            /**
                             * Constructs a new CustomAccount.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.websecurityscanner.v1.ScanConfig.Authentication.ICustomAccount);

                            /** CustomAccount username. */
                            public username: string;

                            /** CustomAccount password. */
                            public password: string;

                            /** CustomAccount loginUrl. */
                            public loginUrl: string;

                            /**
                             * Creates a new CustomAccount instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns CustomAccount instance
                             */
                            public static create(properties?: google.cloud.websecurityscanner.v1.ScanConfig.Authentication.ICustomAccount): google.cloud.websecurityscanner.v1.ScanConfig.Authentication.CustomAccount;

                            /**
                             * Encodes the specified CustomAccount message. Does not implicitly {@link google.cloud.websecurityscanner.v1.ScanConfig.Authentication.CustomAccount.verify|verify} messages.
                             * @param message CustomAccount message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.websecurityscanner.v1.ScanConfig.Authentication.ICustomAccount, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified CustomAccount message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1.ScanConfig.Authentication.CustomAccount.verify|verify} messages.
                             * @param message CustomAccount message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.websecurityscanner.v1.ScanConfig.Authentication.ICustomAccount, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a CustomAccount message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns CustomAccount
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1.ScanConfig.Authentication.CustomAccount;

                            /**
                             * Decodes a CustomAccount message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns CustomAccount
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1.ScanConfig.Authentication.CustomAccount;

                            /**
                             * Verifies a CustomAccount message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a CustomAccount message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns CustomAccount
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1.ScanConfig.Authentication.CustomAccount;

                            /**
                             * Creates a plain object from a CustomAccount message. Also converts values to other types if specified.
                             * @param message CustomAccount
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.websecurityscanner.v1.ScanConfig.Authentication.CustomAccount, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this CustomAccount to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of an IapCredential. */
                        interface IIapCredential {

                            /** IapCredential iapTestServiceAccountInfo */
                            iapTestServiceAccountInfo?: (google.cloud.websecurityscanner.v1.ScanConfig.Authentication.IapCredential.IIapTestServiceAccountInfo|null);
                        }

                        /** Represents an IapCredential. */
                        class IapCredential implements IIapCredential {

                            /**
                             * Constructs a new IapCredential.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.websecurityscanner.v1.ScanConfig.Authentication.IIapCredential);

                            /** IapCredential iapTestServiceAccountInfo. */
                            public iapTestServiceAccountInfo?: (google.cloud.websecurityscanner.v1.ScanConfig.Authentication.IapCredential.IIapTestServiceAccountInfo|null);

                            /** IapCredential iapCredentials. */
                            public iapCredentials?: "iapTestServiceAccountInfo";

                            /**
                             * Creates a new IapCredential instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns IapCredential instance
                             */
                            public static create(properties?: google.cloud.websecurityscanner.v1.ScanConfig.Authentication.IIapCredential): google.cloud.websecurityscanner.v1.ScanConfig.Authentication.IapCredential;

                            /**
                             * Encodes the specified IapCredential message. Does not implicitly {@link google.cloud.websecurityscanner.v1.ScanConfig.Authentication.IapCredential.verify|verify} messages.
                             * @param message IapCredential message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.websecurityscanner.v1.ScanConfig.Authentication.IIapCredential, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified IapCredential message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1.ScanConfig.Authentication.IapCredential.verify|verify} messages.
                             * @param message IapCredential message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.websecurityscanner.v1.ScanConfig.Authentication.IIapCredential, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an IapCredential message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns IapCredential
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1.ScanConfig.Authentication.IapCredential;

                            /**
                             * Decodes an IapCredential message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns IapCredential
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1.ScanConfig.Authentication.IapCredential;

                            /**
                             * Verifies an IapCredential message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an IapCredential message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns IapCredential
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1.ScanConfig.Authentication.IapCredential;

                            /**
                             * Creates a plain object from an IapCredential message. Also converts values to other types if specified.
                             * @param message IapCredential
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.websecurityscanner.v1.ScanConfig.Authentication.IapCredential, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this IapCredential to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        namespace IapCredential {

                            /** Properties of an IapTestServiceAccountInfo. */
                            interface IIapTestServiceAccountInfo {

                                /** IapTestServiceAccountInfo targetAudienceClientId */
                                targetAudienceClientId?: (string|null);
                            }

                            /** Represents an IapTestServiceAccountInfo. */
                            class IapTestServiceAccountInfo implements IIapTestServiceAccountInfo {

                                /**
                                 * Constructs a new IapTestServiceAccountInfo.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: google.cloud.websecurityscanner.v1.ScanConfig.Authentication.IapCredential.IIapTestServiceAccountInfo);

                                /** IapTestServiceAccountInfo targetAudienceClientId. */
                                public targetAudienceClientId: string;

                                /**
                                 * Creates a new IapTestServiceAccountInfo instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns IapTestServiceAccountInfo instance
                                 */
                                public static create(properties?: google.cloud.websecurityscanner.v1.ScanConfig.Authentication.IapCredential.IIapTestServiceAccountInfo): google.cloud.websecurityscanner.v1.ScanConfig.Authentication.IapCredential.IapTestServiceAccountInfo;

                                /**
                                 * Encodes the specified IapTestServiceAccountInfo message. Does not implicitly {@link google.cloud.websecurityscanner.v1.ScanConfig.Authentication.IapCredential.IapTestServiceAccountInfo.verify|verify} messages.
                                 * @param message IapTestServiceAccountInfo message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: google.cloud.websecurityscanner.v1.ScanConfig.Authentication.IapCredential.IIapTestServiceAccountInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Encodes the specified IapTestServiceAccountInfo message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1.ScanConfig.Authentication.IapCredential.IapTestServiceAccountInfo.verify|verify} messages.
                                 * @param message IapTestServiceAccountInfo message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: google.cloud.websecurityscanner.v1.ScanConfig.Authentication.IapCredential.IIapTestServiceAccountInfo, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Decodes an IapTestServiceAccountInfo message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns IapTestServiceAccountInfo
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1.ScanConfig.Authentication.IapCredential.IapTestServiceAccountInfo;

                                /**
                                 * Decodes an IapTestServiceAccountInfo message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns IapTestServiceAccountInfo
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1.ScanConfig.Authentication.IapCredential.IapTestServiceAccountInfo;

                                /**
                                 * Verifies an IapTestServiceAccountInfo message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates an IapTestServiceAccountInfo message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns IapTestServiceAccountInfo
                                 */
                                public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1.ScanConfig.Authentication.IapCredential.IapTestServiceAccountInfo;

                                /**
                                 * Creates a plain object from an IapTestServiceAccountInfo message. Also converts values to other types if specified.
                                 * @param message IapTestServiceAccountInfo
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: google.cloud.websecurityscanner.v1.ScanConfig.Authentication.IapCredential.IapTestServiceAccountInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this IapTestServiceAccountInfo to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };
                            }
                        }
                    }

                    /** Properties of a Schedule. */
                    interface ISchedule {

                        /** Schedule scheduleTime */
                        scheduleTime?: (google.protobuf.ITimestamp|null);

                        /** Schedule intervalDurationDays */
                        intervalDurationDays?: (number|null);
                    }

                    /** Represents a Schedule. */
                    class Schedule implements ISchedule {

                        /**
                         * Constructs a new Schedule.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.websecurityscanner.v1.ScanConfig.ISchedule);

                        /** Schedule scheduleTime. */
                        public scheduleTime?: (google.protobuf.ITimestamp|null);

                        /** Schedule intervalDurationDays. */
                        public intervalDurationDays: number;

                        /**
                         * Creates a new Schedule instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Schedule instance
                         */
                        public static create(properties?: google.cloud.websecurityscanner.v1.ScanConfig.ISchedule): google.cloud.websecurityscanner.v1.ScanConfig.Schedule;

                        /**
                         * Encodes the specified Schedule message. Does not implicitly {@link google.cloud.websecurityscanner.v1.ScanConfig.Schedule.verify|verify} messages.
                         * @param message Schedule message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.websecurityscanner.v1.ScanConfig.ISchedule, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Schedule message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1.ScanConfig.Schedule.verify|verify} messages.
                         * @param message Schedule message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.websecurityscanner.v1.ScanConfig.ISchedule, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Schedule message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Schedule
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1.ScanConfig.Schedule;

                        /**
                         * Decodes a Schedule message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Schedule
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1.ScanConfig.Schedule;

                        /**
                         * Verifies a Schedule message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Schedule message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Schedule
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1.ScanConfig.Schedule;

                        /**
                         * Creates a plain object from a Schedule message. Also converts values to other types if specified.
                         * @param message Schedule
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.websecurityscanner.v1.ScanConfig.Schedule, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Schedule to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** UserAgent enum. */
                    enum UserAgent {
                        USER_AGENT_UNSPECIFIED = 0,
                        CHROME_LINUX = 1,
                        CHROME_ANDROID = 2,
                        SAFARI_IPHONE = 3
                    }

                    /** RiskLevel enum. */
                    enum RiskLevel {
                        RISK_LEVEL_UNSPECIFIED = 0,
                        NORMAL = 1,
                        LOW = 2
                    }

                    /** ExportToSecurityCommandCenter enum. */
                    enum ExportToSecurityCommandCenter {
                        EXPORT_TO_SECURITY_COMMAND_CENTER_UNSPECIFIED = 0,
                        ENABLED = 1,
                        DISABLED = 2
                    }
                }

                /** Properties of a ScanConfigError. */
                interface IScanConfigError {

                    /** ScanConfigError code */
                    code?: (google.cloud.websecurityscanner.v1.ScanConfigError.Code|keyof typeof google.cloud.websecurityscanner.v1.ScanConfigError.Code|null);

                    /** ScanConfigError fieldName */
                    fieldName?: (string|null);
                }

                /** Represents a ScanConfigError. */
                class ScanConfigError implements IScanConfigError {

                    /**
                     * Constructs a new ScanConfigError.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1.IScanConfigError);

                    /** ScanConfigError code. */
                    public code: (google.cloud.websecurityscanner.v1.ScanConfigError.Code|keyof typeof google.cloud.websecurityscanner.v1.ScanConfigError.Code);

                    /** ScanConfigError fieldName. */
                    public fieldName: string;

                    /**
                     * Creates a new ScanConfigError instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ScanConfigError instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1.IScanConfigError): google.cloud.websecurityscanner.v1.ScanConfigError;

                    /**
                     * Encodes the specified ScanConfigError message. Does not implicitly {@link google.cloud.websecurityscanner.v1.ScanConfigError.verify|verify} messages.
                     * @param message ScanConfigError message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1.IScanConfigError, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ScanConfigError message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1.ScanConfigError.verify|verify} messages.
                     * @param message ScanConfigError message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1.IScanConfigError, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ScanConfigError message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ScanConfigError
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1.ScanConfigError;

                    /**
                     * Decodes a ScanConfigError message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ScanConfigError
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1.ScanConfigError;

                    /**
                     * Verifies a ScanConfigError message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ScanConfigError message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ScanConfigError
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1.ScanConfigError;

                    /**
                     * Creates a plain object from a ScanConfigError message. Also converts values to other types if specified.
                     * @param message ScanConfigError
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1.ScanConfigError, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ScanConfigError to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace ScanConfigError {

                    /** Code enum. */
                    enum Code {
                        CODE_UNSPECIFIED = 0,
                        OK = 0,
                        INTERNAL_ERROR = 1,
                        APPENGINE_API_BACKEND_ERROR = 2,
                        APPENGINE_API_NOT_ACCESSIBLE = 3,
                        APPENGINE_DEFAULT_HOST_MISSING = 4,
                        CANNOT_USE_GOOGLE_COM_ACCOUNT = 6,
                        CANNOT_USE_OWNER_ACCOUNT = 7,
                        COMPUTE_API_BACKEND_ERROR = 8,
                        COMPUTE_API_NOT_ACCESSIBLE = 9,
                        CUSTOM_LOGIN_URL_DOES_NOT_BELONG_TO_CURRENT_PROJECT = 10,
                        CUSTOM_LOGIN_URL_MALFORMED = 11,
                        CUSTOM_LOGIN_URL_MAPPED_TO_NON_ROUTABLE_ADDRESS = 12,
                        CUSTOM_LOGIN_URL_MAPPED_TO_UNRESERVED_ADDRESS = 13,
                        CUSTOM_LOGIN_URL_HAS_NON_ROUTABLE_IP_ADDRESS = 14,
                        CUSTOM_LOGIN_URL_HAS_UNRESERVED_IP_ADDRESS = 15,
                        DUPLICATE_SCAN_NAME = 16,
                        INVALID_FIELD_VALUE = 18,
                        FAILED_TO_AUTHENTICATE_TO_TARGET = 19,
                        FINDING_TYPE_UNSPECIFIED = 20,
                        FORBIDDEN_TO_SCAN_COMPUTE = 21,
                        FORBIDDEN_UPDATE_TO_MANAGED_SCAN = 43,
                        MALFORMED_FILTER = 22,
                        MALFORMED_RESOURCE_NAME = 23,
                        PROJECT_INACTIVE = 24,
                        REQUIRED_FIELD = 25,
                        RESOURCE_NAME_INCONSISTENT = 26,
                        SCAN_ALREADY_RUNNING = 27,
                        SCAN_NOT_RUNNING = 28,
                        SEED_URL_DOES_NOT_BELONG_TO_CURRENT_PROJECT = 29,
                        SEED_URL_MALFORMED = 30,
                        SEED_URL_MAPPED_TO_NON_ROUTABLE_ADDRESS = 31,
                        SEED_URL_MAPPED_TO_UNRESERVED_ADDRESS = 32,
                        SEED_URL_HAS_NON_ROUTABLE_IP_ADDRESS = 33,
                        SEED_URL_HAS_UNRESERVED_IP_ADDRESS = 35,
                        SERVICE_ACCOUNT_NOT_CONFIGURED = 36,
                        TOO_MANY_SCANS = 37,
                        UNABLE_TO_RESOLVE_PROJECT_INFO = 38,
                        UNSUPPORTED_BLACKLIST_PATTERN_FORMAT = 39,
                        UNSUPPORTED_FILTER = 40,
                        UNSUPPORTED_FINDING_TYPE = 41,
                        UNSUPPORTED_URL_SCHEME = 42
                    }
                }

                /** Properties of a ScanRun. */
                interface IScanRun {

                    /** ScanRun name */
                    name?: (string|null);

                    /** ScanRun executionState */
                    executionState?: (google.cloud.websecurityscanner.v1.ScanRun.ExecutionState|keyof typeof google.cloud.websecurityscanner.v1.ScanRun.ExecutionState|null);

                    /** ScanRun resultState */
                    resultState?: (google.cloud.websecurityscanner.v1.ScanRun.ResultState|keyof typeof google.cloud.websecurityscanner.v1.ScanRun.ResultState|null);

                    /** ScanRun startTime */
                    startTime?: (google.protobuf.ITimestamp|null);

                    /** ScanRun endTime */
                    endTime?: (google.protobuf.ITimestamp|null);

                    /** ScanRun urlsCrawledCount */
                    urlsCrawledCount?: (number|Long|string|null);

                    /** ScanRun urlsTestedCount */
                    urlsTestedCount?: (number|Long|string|null);

                    /** ScanRun hasVulnerabilities */
                    hasVulnerabilities?: (boolean|null);

                    /** ScanRun progressPercent */
                    progressPercent?: (number|null);

                    /** ScanRun errorTrace */
                    errorTrace?: (google.cloud.websecurityscanner.v1.IScanRunErrorTrace|null);

                    /** ScanRun warningTraces */
                    warningTraces?: (google.cloud.websecurityscanner.v1.IScanRunWarningTrace[]|null);
                }

                /** Represents a ScanRun. */
                class ScanRun implements IScanRun {

                    /**
                     * Constructs a new ScanRun.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1.IScanRun);

                    /** ScanRun name. */
                    public name: string;

                    /** ScanRun executionState. */
                    public executionState: (google.cloud.websecurityscanner.v1.ScanRun.ExecutionState|keyof typeof google.cloud.websecurityscanner.v1.ScanRun.ExecutionState);

                    /** ScanRun resultState. */
                    public resultState: (google.cloud.websecurityscanner.v1.ScanRun.ResultState|keyof typeof google.cloud.websecurityscanner.v1.ScanRun.ResultState);

                    /** ScanRun startTime. */
                    public startTime?: (google.protobuf.ITimestamp|null);

                    /** ScanRun endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /** ScanRun urlsCrawledCount. */
                    public urlsCrawledCount: (number|Long|string);

                    /** ScanRun urlsTestedCount. */
                    public urlsTestedCount: (number|Long|string);

                    /** ScanRun hasVulnerabilities. */
                    public hasVulnerabilities: boolean;

                    /** ScanRun progressPercent. */
                    public progressPercent: number;

                    /** ScanRun errorTrace. */
                    public errorTrace?: (google.cloud.websecurityscanner.v1.IScanRunErrorTrace|null);

                    /** ScanRun warningTraces. */
                    public warningTraces: google.cloud.websecurityscanner.v1.IScanRunWarningTrace[];

                    /**
                     * Creates a new ScanRun instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ScanRun instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1.IScanRun): google.cloud.websecurityscanner.v1.ScanRun;

                    /**
                     * Encodes the specified ScanRun message. Does not implicitly {@link google.cloud.websecurityscanner.v1.ScanRun.verify|verify} messages.
                     * @param message ScanRun message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1.IScanRun, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ScanRun message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1.ScanRun.verify|verify} messages.
                     * @param message ScanRun message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1.IScanRun, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ScanRun message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ScanRun
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1.ScanRun;

                    /**
                     * Decodes a ScanRun message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ScanRun
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1.ScanRun;

                    /**
                     * Verifies a ScanRun message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ScanRun message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ScanRun
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1.ScanRun;

                    /**
                     * Creates a plain object from a ScanRun message. Also converts values to other types if specified.
                     * @param message ScanRun
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1.ScanRun, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ScanRun to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace ScanRun {

                    /** ExecutionState enum. */
                    enum ExecutionState {
                        EXECUTION_STATE_UNSPECIFIED = 0,
                        QUEUED = 1,
                        SCANNING = 2,
                        FINISHED = 3
                    }

                    /** ResultState enum. */
                    enum ResultState {
                        RESULT_STATE_UNSPECIFIED = 0,
                        SUCCESS = 1,
                        ERROR = 2,
                        KILLED = 3
                    }
                }

                /** Properties of a ScanRunErrorTrace. */
                interface IScanRunErrorTrace {

                    /** ScanRunErrorTrace code */
                    code?: (google.cloud.websecurityscanner.v1.ScanRunErrorTrace.Code|keyof typeof google.cloud.websecurityscanner.v1.ScanRunErrorTrace.Code|null);

                    /** ScanRunErrorTrace scanConfigError */
                    scanConfigError?: (google.cloud.websecurityscanner.v1.IScanConfigError|null);

                    /** ScanRunErrorTrace mostCommonHttpErrorCode */
                    mostCommonHttpErrorCode?: (number|null);
                }

                /** Represents a ScanRunErrorTrace. */
                class ScanRunErrorTrace implements IScanRunErrorTrace {

                    /**
                     * Constructs a new ScanRunErrorTrace.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1.IScanRunErrorTrace);

                    /** ScanRunErrorTrace code. */
                    public code: (google.cloud.websecurityscanner.v1.ScanRunErrorTrace.Code|keyof typeof google.cloud.websecurityscanner.v1.ScanRunErrorTrace.Code);

                    /** ScanRunErrorTrace scanConfigError. */
                    public scanConfigError?: (google.cloud.websecurityscanner.v1.IScanConfigError|null);

                    /** ScanRunErrorTrace mostCommonHttpErrorCode. */
                    public mostCommonHttpErrorCode: number;

                    /**
                     * Creates a new ScanRunErrorTrace instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ScanRunErrorTrace instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1.IScanRunErrorTrace): google.cloud.websecurityscanner.v1.ScanRunErrorTrace;

                    /**
                     * Encodes the specified ScanRunErrorTrace message. Does not implicitly {@link google.cloud.websecurityscanner.v1.ScanRunErrorTrace.verify|verify} messages.
                     * @param message ScanRunErrorTrace message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1.IScanRunErrorTrace, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ScanRunErrorTrace message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1.ScanRunErrorTrace.verify|verify} messages.
                     * @param message ScanRunErrorTrace message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1.IScanRunErrorTrace, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ScanRunErrorTrace message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ScanRunErrorTrace
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1.ScanRunErrorTrace;

                    /**
                     * Decodes a ScanRunErrorTrace message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ScanRunErrorTrace
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1.ScanRunErrorTrace;

                    /**
                     * Verifies a ScanRunErrorTrace message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ScanRunErrorTrace message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ScanRunErrorTrace
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1.ScanRunErrorTrace;

                    /**
                     * Creates a plain object from a ScanRunErrorTrace message. Also converts values to other types if specified.
                     * @param message ScanRunErrorTrace
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1.ScanRunErrorTrace, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ScanRunErrorTrace to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace ScanRunErrorTrace {

                    /** Code enum. */
                    enum Code {
                        CODE_UNSPECIFIED = 0,
                        INTERNAL_ERROR = 1,
                        SCAN_CONFIG_ISSUE = 2,
                        AUTHENTICATION_CONFIG_ISSUE = 3,
                        TIMED_OUT_WHILE_SCANNING = 4,
                        TOO_MANY_REDIRECTS = 5,
                        TOO_MANY_HTTP_ERRORS = 6
                    }
                }

                /** Properties of a ScanRunWarningTrace. */
                interface IScanRunWarningTrace {

                    /** ScanRunWarningTrace code */
                    code?: (google.cloud.websecurityscanner.v1.ScanRunWarningTrace.Code|keyof typeof google.cloud.websecurityscanner.v1.ScanRunWarningTrace.Code|null);
                }

                /** Represents a ScanRunWarningTrace. */
                class ScanRunWarningTrace implements IScanRunWarningTrace {

                    /**
                     * Constructs a new ScanRunWarningTrace.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1.IScanRunWarningTrace);

                    /** ScanRunWarningTrace code. */
                    public code: (google.cloud.websecurityscanner.v1.ScanRunWarningTrace.Code|keyof typeof google.cloud.websecurityscanner.v1.ScanRunWarningTrace.Code);

                    /**
                     * Creates a new ScanRunWarningTrace instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ScanRunWarningTrace instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1.IScanRunWarningTrace): google.cloud.websecurityscanner.v1.ScanRunWarningTrace;

                    /**
                     * Encodes the specified ScanRunWarningTrace message. Does not implicitly {@link google.cloud.websecurityscanner.v1.ScanRunWarningTrace.verify|verify} messages.
                     * @param message ScanRunWarningTrace message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1.IScanRunWarningTrace, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ScanRunWarningTrace message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1.ScanRunWarningTrace.verify|verify} messages.
                     * @param message ScanRunWarningTrace message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1.IScanRunWarningTrace, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ScanRunWarningTrace message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ScanRunWarningTrace
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1.ScanRunWarningTrace;

                    /**
                     * Decodes a ScanRunWarningTrace message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ScanRunWarningTrace
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1.ScanRunWarningTrace;

                    /**
                     * Verifies a ScanRunWarningTrace message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ScanRunWarningTrace message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ScanRunWarningTrace
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1.ScanRunWarningTrace;

                    /**
                     * Creates a plain object from a ScanRunWarningTrace message. Also converts values to other types if specified.
                     * @param message ScanRunWarningTrace
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1.ScanRunWarningTrace, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ScanRunWarningTrace to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace ScanRunWarningTrace {

                    /** Code enum. */
                    enum Code {
                        CODE_UNSPECIFIED = 0,
                        INSUFFICIENT_CRAWL_RESULTS = 1,
                        TOO_MANY_CRAWL_RESULTS = 2,
                        TOO_MANY_FUZZ_TASKS = 3,
                        BLOCKED_BY_IAP = 4
                    }
                }

                /** Represents a WebSecurityScanner */
                class WebSecurityScanner extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new WebSecurityScanner service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new WebSecurityScanner service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): WebSecurityScanner;

                    /**
                     * Calls CreateScanConfig.
                     * @param request CreateScanConfigRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ScanConfig
                     */
                    public createScanConfig(request: google.cloud.websecurityscanner.v1.ICreateScanConfigRequest, callback: google.cloud.websecurityscanner.v1.WebSecurityScanner.CreateScanConfigCallback): void;

                    /**
                     * Calls CreateScanConfig.
                     * @param request CreateScanConfigRequest message or plain object
                     * @returns Promise
                     */
                    public createScanConfig(request: google.cloud.websecurityscanner.v1.ICreateScanConfigRequest): Promise<google.cloud.websecurityscanner.v1.ScanConfig>;

                    /**
                     * Calls DeleteScanConfig.
                     * @param request DeleteScanConfigRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteScanConfig(request: google.cloud.websecurityscanner.v1.IDeleteScanConfigRequest, callback: google.cloud.websecurityscanner.v1.WebSecurityScanner.DeleteScanConfigCallback): void;

                    /**
                     * Calls DeleteScanConfig.
                     * @param request DeleteScanConfigRequest message or plain object
                     * @returns Promise
                     */
                    public deleteScanConfig(request: google.cloud.websecurityscanner.v1.IDeleteScanConfigRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls GetScanConfig.
                     * @param request GetScanConfigRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ScanConfig
                     */
                    public getScanConfig(request: google.cloud.websecurityscanner.v1.IGetScanConfigRequest, callback: google.cloud.websecurityscanner.v1.WebSecurityScanner.GetScanConfigCallback): void;

                    /**
                     * Calls GetScanConfig.
                     * @param request GetScanConfigRequest message or plain object
                     * @returns Promise
                     */
                    public getScanConfig(request: google.cloud.websecurityscanner.v1.IGetScanConfigRequest): Promise<google.cloud.websecurityscanner.v1.ScanConfig>;

                    /**
                     * Calls ListScanConfigs.
                     * @param request ListScanConfigsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListScanConfigsResponse
                     */
                    public listScanConfigs(request: google.cloud.websecurityscanner.v1.IListScanConfigsRequest, callback: google.cloud.websecurityscanner.v1.WebSecurityScanner.ListScanConfigsCallback): void;

                    /**
                     * Calls ListScanConfigs.
                     * @param request ListScanConfigsRequest message or plain object
                     * @returns Promise
                     */
                    public listScanConfigs(request: google.cloud.websecurityscanner.v1.IListScanConfigsRequest): Promise<google.cloud.websecurityscanner.v1.ListScanConfigsResponse>;

                    /**
                     * Calls UpdateScanConfig.
                     * @param request UpdateScanConfigRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ScanConfig
                     */
                    public updateScanConfig(request: google.cloud.websecurityscanner.v1.IUpdateScanConfigRequest, callback: google.cloud.websecurityscanner.v1.WebSecurityScanner.UpdateScanConfigCallback): void;

                    /**
                     * Calls UpdateScanConfig.
                     * @param request UpdateScanConfigRequest message or plain object
                     * @returns Promise
                     */
                    public updateScanConfig(request: google.cloud.websecurityscanner.v1.IUpdateScanConfigRequest): Promise<google.cloud.websecurityscanner.v1.ScanConfig>;

                    /**
                     * Calls StartScanRun.
                     * @param request StartScanRunRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ScanRun
                     */
                    public startScanRun(request: google.cloud.websecurityscanner.v1.IStartScanRunRequest, callback: google.cloud.websecurityscanner.v1.WebSecurityScanner.StartScanRunCallback): void;

                    /**
                     * Calls StartScanRun.
                     * @param request StartScanRunRequest message or plain object
                     * @returns Promise
                     */
                    public startScanRun(request: google.cloud.websecurityscanner.v1.IStartScanRunRequest): Promise<google.cloud.websecurityscanner.v1.ScanRun>;

                    /**
                     * Calls GetScanRun.
                     * @param request GetScanRunRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ScanRun
                     */
                    public getScanRun(request: google.cloud.websecurityscanner.v1.IGetScanRunRequest, callback: google.cloud.websecurityscanner.v1.WebSecurityScanner.GetScanRunCallback): void;

                    /**
                     * Calls GetScanRun.
                     * @param request GetScanRunRequest message or plain object
                     * @returns Promise
                     */
                    public getScanRun(request: google.cloud.websecurityscanner.v1.IGetScanRunRequest): Promise<google.cloud.websecurityscanner.v1.ScanRun>;

                    /**
                     * Calls ListScanRuns.
                     * @param request ListScanRunsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListScanRunsResponse
                     */
                    public listScanRuns(request: google.cloud.websecurityscanner.v1.IListScanRunsRequest, callback: google.cloud.websecurityscanner.v1.WebSecurityScanner.ListScanRunsCallback): void;

                    /**
                     * Calls ListScanRuns.
                     * @param request ListScanRunsRequest message or plain object
                     * @returns Promise
                     */
                    public listScanRuns(request: google.cloud.websecurityscanner.v1.IListScanRunsRequest): Promise<google.cloud.websecurityscanner.v1.ListScanRunsResponse>;

                    /**
                     * Calls StopScanRun.
                     * @param request StopScanRunRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ScanRun
                     */
                    public stopScanRun(request: google.cloud.websecurityscanner.v1.IStopScanRunRequest, callback: google.cloud.websecurityscanner.v1.WebSecurityScanner.StopScanRunCallback): void;

                    /**
                     * Calls StopScanRun.
                     * @param request StopScanRunRequest message or plain object
                     * @returns Promise
                     */
                    public stopScanRun(request: google.cloud.websecurityscanner.v1.IStopScanRunRequest): Promise<google.cloud.websecurityscanner.v1.ScanRun>;

                    /**
                     * Calls ListCrawledUrls.
                     * @param request ListCrawledUrlsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListCrawledUrlsResponse
                     */
                    public listCrawledUrls(request: google.cloud.websecurityscanner.v1.IListCrawledUrlsRequest, callback: google.cloud.websecurityscanner.v1.WebSecurityScanner.ListCrawledUrlsCallback): void;

                    /**
                     * Calls ListCrawledUrls.
                     * @param request ListCrawledUrlsRequest message or plain object
                     * @returns Promise
                     */
                    public listCrawledUrls(request: google.cloud.websecurityscanner.v1.IListCrawledUrlsRequest): Promise<google.cloud.websecurityscanner.v1.ListCrawledUrlsResponse>;

                    /**
                     * Calls GetFinding.
                     * @param request GetFindingRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Finding
                     */
                    public getFinding(request: google.cloud.websecurityscanner.v1.IGetFindingRequest, callback: google.cloud.websecurityscanner.v1.WebSecurityScanner.GetFindingCallback): void;

                    /**
                     * Calls GetFinding.
                     * @param request GetFindingRequest message or plain object
                     * @returns Promise
                     */
                    public getFinding(request: google.cloud.websecurityscanner.v1.IGetFindingRequest): Promise<google.cloud.websecurityscanner.v1.Finding>;

                    /**
                     * Calls ListFindings.
                     * @param request ListFindingsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListFindingsResponse
                     */
                    public listFindings(request: google.cloud.websecurityscanner.v1.IListFindingsRequest, callback: google.cloud.websecurityscanner.v1.WebSecurityScanner.ListFindingsCallback): void;

                    /**
                     * Calls ListFindings.
                     * @param request ListFindingsRequest message or plain object
                     * @returns Promise
                     */
                    public listFindings(request: google.cloud.websecurityscanner.v1.IListFindingsRequest): Promise<google.cloud.websecurityscanner.v1.ListFindingsResponse>;

                    /**
                     * Calls ListFindingTypeStats.
                     * @param request ListFindingTypeStatsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListFindingTypeStatsResponse
                     */
                    public listFindingTypeStats(request: google.cloud.websecurityscanner.v1.IListFindingTypeStatsRequest, callback: google.cloud.websecurityscanner.v1.WebSecurityScanner.ListFindingTypeStatsCallback): void;

                    /**
                     * Calls ListFindingTypeStats.
                     * @param request ListFindingTypeStatsRequest message or plain object
                     * @returns Promise
                     */
                    public listFindingTypeStats(request: google.cloud.websecurityscanner.v1.IListFindingTypeStatsRequest): Promise<google.cloud.websecurityscanner.v1.ListFindingTypeStatsResponse>;
                }

                namespace WebSecurityScanner {

                    /**
                     * Callback as used by {@link google.cloud.websecurityscanner.v1.WebSecurityScanner|createScanConfig}.
                     * @param error Error, if any
                     * @param [response] ScanConfig
                     */
                    type CreateScanConfigCallback = (error: (Error|null), response?: google.cloud.websecurityscanner.v1.ScanConfig) => void;

                    /**
                     * Callback as used by {@link google.cloud.websecurityscanner.v1.WebSecurityScanner|deleteScanConfig}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteScanConfigCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.websecurityscanner.v1.WebSecurityScanner|getScanConfig}.
                     * @param error Error, if any
                     * @param [response] ScanConfig
                     */
                    type GetScanConfigCallback = (error: (Error|null), response?: google.cloud.websecurityscanner.v1.ScanConfig) => void;

                    /**
                     * Callback as used by {@link google.cloud.websecurityscanner.v1.WebSecurityScanner|listScanConfigs}.
                     * @param error Error, if any
                     * @param [response] ListScanConfigsResponse
                     */
                    type ListScanConfigsCallback = (error: (Error|null), response?: google.cloud.websecurityscanner.v1.ListScanConfigsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.websecurityscanner.v1.WebSecurityScanner|updateScanConfig}.
                     * @param error Error, if any
                     * @param [response] ScanConfig
                     */
                    type UpdateScanConfigCallback = (error: (Error|null), response?: google.cloud.websecurityscanner.v1.ScanConfig) => void;

                    /**
                     * Callback as used by {@link google.cloud.websecurityscanner.v1.WebSecurityScanner|startScanRun}.
                     * @param error Error, if any
                     * @param [response] ScanRun
                     */
                    type StartScanRunCallback = (error: (Error|null), response?: google.cloud.websecurityscanner.v1.ScanRun) => void;

                    /**
                     * Callback as used by {@link google.cloud.websecurityscanner.v1.WebSecurityScanner|getScanRun}.
                     * @param error Error, if any
                     * @param [response] ScanRun
                     */
                    type GetScanRunCallback = (error: (Error|null), response?: google.cloud.websecurityscanner.v1.ScanRun) => void;

                    /**
                     * Callback as used by {@link google.cloud.websecurityscanner.v1.WebSecurityScanner|listScanRuns}.
                     * @param error Error, if any
                     * @param [response] ListScanRunsResponse
                     */
                    type ListScanRunsCallback = (error: (Error|null), response?: google.cloud.websecurityscanner.v1.ListScanRunsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.websecurityscanner.v1.WebSecurityScanner|stopScanRun}.
                     * @param error Error, if any
                     * @param [response] ScanRun
                     */
                    type StopScanRunCallback = (error: (Error|null), response?: google.cloud.websecurityscanner.v1.ScanRun) => void;

                    /**
                     * Callback as used by {@link google.cloud.websecurityscanner.v1.WebSecurityScanner|listCrawledUrls}.
                     * @param error Error, if any
                     * @param [response] ListCrawledUrlsResponse
                     */
                    type ListCrawledUrlsCallback = (error: (Error|null), response?: google.cloud.websecurityscanner.v1.ListCrawledUrlsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.websecurityscanner.v1.WebSecurityScanner|getFinding}.
                     * @param error Error, if any
                     * @param [response] Finding
                     */
                    type GetFindingCallback = (error: (Error|null), response?: google.cloud.websecurityscanner.v1.Finding) => void;

                    /**
                     * Callback as used by {@link google.cloud.websecurityscanner.v1.WebSecurityScanner|listFindings}.
                     * @param error Error, if any
                     * @param [response] ListFindingsResponse
                     */
                    type ListFindingsCallback = (error: (Error|null), response?: google.cloud.websecurityscanner.v1.ListFindingsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.websecurityscanner.v1.WebSecurityScanner|listFindingTypeStats}.
                     * @param error Error, if any
                     * @param [response] ListFindingTypeStatsResponse
                     */
                    type ListFindingTypeStatsCallback = (error: (Error|null), response?: google.cloud.websecurityscanner.v1.ListFindingTypeStatsResponse) => void;
                }

                /** Properties of a CreateScanConfigRequest. */
                interface ICreateScanConfigRequest {

                    /** CreateScanConfigRequest parent */
                    parent?: (string|null);

                    /** CreateScanConfigRequest scanConfig */
                    scanConfig?: (google.cloud.websecurityscanner.v1.IScanConfig|null);
                }

                /** Represents a CreateScanConfigRequest. */
                class CreateScanConfigRequest implements ICreateScanConfigRequest {

                    /**
                     * Constructs a new CreateScanConfigRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1.ICreateScanConfigRequest);

                    /** CreateScanConfigRequest parent. */
                    public parent: string;

                    /** CreateScanConfigRequest scanConfig. */
                    public scanConfig?: (google.cloud.websecurityscanner.v1.IScanConfig|null);

                    /**
                     * Creates a new CreateScanConfigRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateScanConfigRequest instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1.ICreateScanConfigRequest): google.cloud.websecurityscanner.v1.CreateScanConfigRequest;

                    /**
                     * Encodes the specified CreateScanConfigRequest message. Does not implicitly {@link google.cloud.websecurityscanner.v1.CreateScanConfigRequest.verify|verify} messages.
                     * @param message CreateScanConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1.ICreateScanConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateScanConfigRequest message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1.CreateScanConfigRequest.verify|verify} messages.
                     * @param message CreateScanConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1.ICreateScanConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateScanConfigRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateScanConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1.CreateScanConfigRequest;

                    /**
                     * Decodes a CreateScanConfigRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateScanConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1.CreateScanConfigRequest;

                    /**
                     * Verifies a CreateScanConfigRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateScanConfigRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateScanConfigRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1.CreateScanConfigRequest;

                    /**
                     * Creates a plain object from a CreateScanConfigRequest message. Also converts values to other types if specified.
                     * @param message CreateScanConfigRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1.CreateScanConfigRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateScanConfigRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteScanConfigRequest. */
                interface IDeleteScanConfigRequest {

                    /** DeleteScanConfigRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteScanConfigRequest. */
                class DeleteScanConfigRequest implements IDeleteScanConfigRequest {

                    /**
                     * Constructs a new DeleteScanConfigRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1.IDeleteScanConfigRequest);

                    /** DeleteScanConfigRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteScanConfigRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteScanConfigRequest instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1.IDeleteScanConfigRequest): google.cloud.websecurityscanner.v1.DeleteScanConfigRequest;

                    /**
                     * Encodes the specified DeleteScanConfigRequest message. Does not implicitly {@link google.cloud.websecurityscanner.v1.DeleteScanConfigRequest.verify|verify} messages.
                     * @param message DeleteScanConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1.IDeleteScanConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteScanConfigRequest message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1.DeleteScanConfigRequest.verify|verify} messages.
                     * @param message DeleteScanConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1.IDeleteScanConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteScanConfigRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteScanConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1.DeleteScanConfigRequest;

                    /**
                     * Decodes a DeleteScanConfigRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteScanConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1.DeleteScanConfigRequest;

                    /**
                     * Verifies a DeleteScanConfigRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteScanConfigRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteScanConfigRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1.DeleteScanConfigRequest;

                    /**
                     * Creates a plain object from a DeleteScanConfigRequest message. Also converts values to other types if specified.
                     * @param message DeleteScanConfigRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1.DeleteScanConfigRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteScanConfigRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetScanConfigRequest. */
                interface IGetScanConfigRequest {

                    /** GetScanConfigRequest name */
                    name?: (string|null);
                }

                /** Represents a GetScanConfigRequest. */
                class GetScanConfigRequest implements IGetScanConfigRequest {

                    /**
                     * Constructs a new GetScanConfigRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1.IGetScanConfigRequest);

                    /** GetScanConfigRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetScanConfigRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetScanConfigRequest instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1.IGetScanConfigRequest): google.cloud.websecurityscanner.v1.GetScanConfigRequest;

                    /**
                     * Encodes the specified GetScanConfigRequest message. Does not implicitly {@link google.cloud.websecurityscanner.v1.GetScanConfigRequest.verify|verify} messages.
                     * @param message GetScanConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1.IGetScanConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetScanConfigRequest message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1.GetScanConfigRequest.verify|verify} messages.
                     * @param message GetScanConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1.IGetScanConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetScanConfigRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetScanConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1.GetScanConfigRequest;

                    /**
                     * Decodes a GetScanConfigRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetScanConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1.GetScanConfigRequest;

                    /**
                     * Verifies a GetScanConfigRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetScanConfigRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetScanConfigRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1.GetScanConfigRequest;

                    /**
                     * Creates a plain object from a GetScanConfigRequest message. Also converts values to other types if specified.
                     * @param message GetScanConfigRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1.GetScanConfigRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetScanConfigRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListScanConfigsRequest. */
                interface IListScanConfigsRequest {

                    /** ListScanConfigsRequest parent */
                    parent?: (string|null);

                    /** ListScanConfigsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListScanConfigsRequest pageSize */
                    pageSize?: (number|null);
                }

                /** Represents a ListScanConfigsRequest. */
                class ListScanConfigsRequest implements IListScanConfigsRequest {

                    /**
                     * Constructs a new ListScanConfigsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1.IListScanConfigsRequest);

                    /** ListScanConfigsRequest parent. */
                    public parent: string;

                    /** ListScanConfigsRequest pageToken. */
                    public pageToken: string;

                    /** ListScanConfigsRequest pageSize. */
                    public pageSize: number;

                    /**
                     * Creates a new ListScanConfigsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListScanConfigsRequest instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1.IListScanConfigsRequest): google.cloud.websecurityscanner.v1.ListScanConfigsRequest;

                    /**
                     * Encodes the specified ListScanConfigsRequest message. Does not implicitly {@link google.cloud.websecurityscanner.v1.ListScanConfigsRequest.verify|verify} messages.
                     * @param message ListScanConfigsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1.IListScanConfigsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListScanConfigsRequest message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1.ListScanConfigsRequest.verify|verify} messages.
                     * @param message ListScanConfigsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1.IListScanConfigsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListScanConfigsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListScanConfigsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1.ListScanConfigsRequest;

                    /**
                     * Decodes a ListScanConfigsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListScanConfigsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1.ListScanConfigsRequest;

                    /**
                     * Verifies a ListScanConfigsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListScanConfigsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListScanConfigsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1.ListScanConfigsRequest;

                    /**
                     * Creates a plain object from a ListScanConfigsRequest message. Also converts values to other types if specified.
                     * @param message ListScanConfigsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1.ListScanConfigsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListScanConfigsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateScanConfigRequest. */
                interface IUpdateScanConfigRequest {

                    /** UpdateScanConfigRequest scanConfig */
                    scanConfig?: (google.cloud.websecurityscanner.v1.IScanConfig|null);

                    /** UpdateScanConfigRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateScanConfigRequest. */
                class UpdateScanConfigRequest implements IUpdateScanConfigRequest {

                    /**
                     * Constructs a new UpdateScanConfigRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1.IUpdateScanConfigRequest);

                    /** UpdateScanConfigRequest scanConfig. */
                    public scanConfig?: (google.cloud.websecurityscanner.v1.IScanConfig|null);

                    /** UpdateScanConfigRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateScanConfigRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateScanConfigRequest instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1.IUpdateScanConfigRequest): google.cloud.websecurityscanner.v1.UpdateScanConfigRequest;

                    /**
                     * Encodes the specified UpdateScanConfigRequest message. Does not implicitly {@link google.cloud.websecurityscanner.v1.UpdateScanConfigRequest.verify|verify} messages.
                     * @param message UpdateScanConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1.IUpdateScanConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateScanConfigRequest message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1.UpdateScanConfigRequest.verify|verify} messages.
                     * @param message UpdateScanConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1.IUpdateScanConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateScanConfigRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateScanConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1.UpdateScanConfigRequest;

                    /**
                     * Decodes an UpdateScanConfigRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateScanConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1.UpdateScanConfigRequest;

                    /**
                     * Verifies an UpdateScanConfigRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateScanConfigRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateScanConfigRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1.UpdateScanConfigRequest;

                    /**
                     * Creates a plain object from an UpdateScanConfigRequest message. Also converts values to other types if specified.
                     * @param message UpdateScanConfigRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1.UpdateScanConfigRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateScanConfigRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListScanConfigsResponse. */
                interface IListScanConfigsResponse {

                    /** ListScanConfigsResponse scanConfigs */
                    scanConfigs?: (google.cloud.websecurityscanner.v1.IScanConfig[]|null);

                    /** ListScanConfigsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListScanConfigsResponse. */
                class ListScanConfigsResponse implements IListScanConfigsResponse {

                    /**
                     * Constructs a new ListScanConfigsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1.IListScanConfigsResponse);

                    /** ListScanConfigsResponse scanConfigs. */
                    public scanConfigs: google.cloud.websecurityscanner.v1.IScanConfig[];

                    /** ListScanConfigsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListScanConfigsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListScanConfigsResponse instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1.IListScanConfigsResponse): google.cloud.websecurityscanner.v1.ListScanConfigsResponse;

                    /**
                     * Encodes the specified ListScanConfigsResponse message. Does not implicitly {@link google.cloud.websecurityscanner.v1.ListScanConfigsResponse.verify|verify} messages.
                     * @param message ListScanConfigsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1.IListScanConfigsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListScanConfigsResponse message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1.ListScanConfigsResponse.verify|verify} messages.
                     * @param message ListScanConfigsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1.IListScanConfigsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListScanConfigsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListScanConfigsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1.ListScanConfigsResponse;

                    /**
                     * Decodes a ListScanConfigsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListScanConfigsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1.ListScanConfigsResponse;

                    /**
                     * Verifies a ListScanConfigsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListScanConfigsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListScanConfigsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1.ListScanConfigsResponse;

                    /**
                     * Creates a plain object from a ListScanConfigsResponse message. Also converts values to other types if specified.
                     * @param message ListScanConfigsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1.ListScanConfigsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListScanConfigsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a StartScanRunRequest. */
                interface IStartScanRunRequest {

                    /** StartScanRunRequest name */
                    name?: (string|null);
                }

                /** Represents a StartScanRunRequest. */
                class StartScanRunRequest implements IStartScanRunRequest {

                    /**
                     * Constructs a new StartScanRunRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1.IStartScanRunRequest);

                    /** StartScanRunRequest name. */
                    public name: string;

                    /**
                     * Creates a new StartScanRunRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StartScanRunRequest instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1.IStartScanRunRequest): google.cloud.websecurityscanner.v1.StartScanRunRequest;

                    /**
                     * Encodes the specified StartScanRunRequest message. Does not implicitly {@link google.cloud.websecurityscanner.v1.StartScanRunRequest.verify|verify} messages.
                     * @param message StartScanRunRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1.IStartScanRunRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StartScanRunRequest message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1.StartScanRunRequest.verify|verify} messages.
                     * @param message StartScanRunRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1.IStartScanRunRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StartScanRunRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StartScanRunRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1.StartScanRunRequest;

                    /**
                     * Decodes a StartScanRunRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StartScanRunRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1.StartScanRunRequest;

                    /**
                     * Verifies a StartScanRunRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StartScanRunRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StartScanRunRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1.StartScanRunRequest;

                    /**
                     * Creates a plain object from a StartScanRunRequest message. Also converts values to other types if specified.
                     * @param message StartScanRunRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1.StartScanRunRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StartScanRunRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetScanRunRequest. */
                interface IGetScanRunRequest {

                    /** GetScanRunRequest name */
                    name?: (string|null);
                }

                /** Represents a GetScanRunRequest. */
                class GetScanRunRequest implements IGetScanRunRequest {

                    /**
                     * Constructs a new GetScanRunRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1.IGetScanRunRequest);

                    /** GetScanRunRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetScanRunRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetScanRunRequest instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1.IGetScanRunRequest): google.cloud.websecurityscanner.v1.GetScanRunRequest;

                    /**
                     * Encodes the specified GetScanRunRequest message. Does not implicitly {@link google.cloud.websecurityscanner.v1.GetScanRunRequest.verify|verify} messages.
                     * @param message GetScanRunRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1.IGetScanRunRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetScanRunRequest message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1.GetScanRunRequest.verify|verify} messages.
                     * @param message GetScanRunRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1.IGetScanRunRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetScanRunRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetScanRunRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1.GetScanRunRequest;

                    /**
                     * Decodes a GetScanRunRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetScanRunRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1.GetScanRunRequest;

                    /**
                     * Verifies a GetScanRunRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetScanRunRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetScanRunRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1.GetScanRunRequest;

                    /**
                     * Creates a plain object from a GetScanRunRequest message. Also converts values to other types if specified.
                     * @param message GetScanRunRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1.GetScanRunRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetScanRunRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListScanRunsRequest. */
                interface IListScanRunsRequest {

                    /** ListScanRunsRequest parent */
                    parent?: (string|null);

                    /** ListScanRunsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListScanRunsRequest pageSize */
                    pageSize?: (number|null);
                }

                /** Represents a ListScanRunsRequest. */
                class ListScanRunsRequest implements IListScanRunsRequest {

                    /**
                     * Constructs a new ListScanRunsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1.IListScanRunsRequest);

                    /** ListScanRunsRequest parent. */
                    public parent: string;

                    /** ListScanRunsRequest pageToken. */
                    public pageToken: string;

                    /** ListScanRunsRequest pageSize. */
                    public pageSize: number;

                    /**
                     * Creates a new ListScanRunsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListScanRunsRequest instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1.IListScanRunsRequest): google.cloud.websecurityscanner.v1.ListScanRunsRequest;

                    /**
                     * Encodes the specified ListScanRunsRequest message. Does not implicitly {@link google.cloud.websecurityscanner.v1.ListScanRunsRequest.verify|verify} messages.
                     * @param message ListScanRunsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1.IListScanRunsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListScanRunsRequest message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1.ListScanRunsRequest.verify|verify} messages.
                     * @param message ListScanRunsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1.IListScanRunsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListScanRunsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListScanRunsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1.ListScanRunsRequest;

                    /**
                     * Decodes a ListScanRunsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListScanRunsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1.ListScanRunsRequest;

                    /**
                     * Verifies a ListScanRunsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListScanRunsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListScanRunsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1.ListScanRunsRequest;

                    /**
                     * Creates a plain object from a ListScanRunsRequest message. Also converts values to other types if specified.
                     * @param message ListScanRunsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1.ListScanRunsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListScanRunsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListScanRunsResponse. */
                interface IListScanRunsResponse {

                    /** ListScanRunsResponse scanRuns */
                    scanRuns?: (google.cloud.websecurityscanner.v1.IScanRun[]|null);

                    /** ListScanRunsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListScanRunsResponse. */
                class ListScanRunsResponse implements IListScanRunsResponse {

                    /**
                     * Constructs a new ListScanRunsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1.IListScanRunsResponse);

                    /** ListScanRunsResponse scanRuns. */
                    public scanRuns: google.cloud.websecurityscanner.v1.IScanRun[];

                    /** ListScanRunsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListScanRunsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListScanRunsResponse instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1.IListScanRunsResponse): google.cloud.websecurityscanner.v1.ListScanRunsResponse;

                    /**
                     * Encodes the specified ListScanRunsResponse message. Does not implicitly {@link google.cloud.websecurityscanner.v1.ListScanRunsResponse.verify|verify} messages.
                     * @param message ListScanRunsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1.IListScanRunsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListScanRunsResponse message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1.ListScanRunsResponse.verify|verify} messages.
                     * @param message ListScanRunsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1.IListScanRunsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListScanRunsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListScanRunsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1.ListScanRunsResponse;

                    /**
                     * Decodes a ListScanRunsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListScanRunsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1.ListScanRunsResponse;

                    /**
                     * Verifies a ListScanRunsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListScanRunsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListScanRunsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1.ListScanRunsResponse;

                    /**
                     * Creates a plain object from a ListScanRunsResponse message. Also converts values to other types if specified.
                     * @param message ListScanRunsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1.ListScanRunsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListScanRunsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a StopScanRunRequest. */
                interface IStopScanRunRequest {

                    /** StopScanRunRequest name */
                    name?: (string|null);
                }

                /** Represents a StopScanRunRequest. */
                class StopScanRunRequest implements IStopScanRunRequest {

                    /**
                     * Constructs a new StopScanRunRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1.IStopScanRunRequest);

                    /** StopScanRunRequest name. */
                    public name: string;

                    /**
                     * Creates a new StopScanRunRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StopScanRunRequest instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1.IStopScanRunRequest): google.cloud.websecurityscanner.v1.StopScanRunRequest;

                    /**
                     * Encodes the specified StopScanRunRequest message. Does not implicitly {@link google.cloud.websecurityscanner.v1.StopScanRunRequest.verify|verify} messages.
                     * @param message StopScanRunRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1.IStopScanRunRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StopScanRunRequest message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1.StopScanRunRequest.verify|verify} messages.
                     * @param message StopScanRunRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1.IStopScanRunRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StopScanRunRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StopScanRunRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1.StopScanRunRequest;

                    /**
                     * Decodes a StopScanRunRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StopScanRunRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1.StopScanRunRequest;

                    /**
                     * Verifies a StopScanRunRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StopScanRunRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StopScanRunRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1.StopScanRunRequest;

                    /**
                     * Creates a plain object from a StopScanRunRequest message. Also converts values to other types if specified.
                     * @param message StopScanRunRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1.StopScanRunRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StopScanRunRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListCrawledUrlsRequest. */
                interface IListCrawledUrlsRequest {

                    /** ListCrawledUrlsRequest parent */
                    parent?: (string|null);

                    /** ListCrawledUrlsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListCrawledUrlsRequest pageSize */
                    pageSize?: (number|null);
                }

                /** Represents a ListCrawledUrlsRequest. */
                class ListCrawledUrlsRequest implements IListCrawledUrlsRequest {

                    /**
                     * Constructs a new ListCrawledUrlsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1.IListCrawledUrlsRequest);

                    /** ListCrawledUrlsRequest parent. */
                    public parent: string;

                    /** ListCrawledUrlsRequest pageToken. */
                    public pageToken: string;

                    /** ListCrawledUrlsRequest pageSize. */
                    public pageSize: number;

                    /**
                     * Creates a new ListCrawledUrlsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListCrawledUrlsRequest instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1.IListCrawledUrlsRequest): google.cloud.websecurityscanner.v1.ListCrawledUrlsRequest;

                    /**
                     * Encodes the specified ListCrawledUrlsRequest message. Does not implicitly {@link google.cloud.websecurityscanner.v1.ListCrawledUrlsRequest.verify|verify} messages.
                     * @param message ListCrawledUrlsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1.IListCrawledUrlsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListCrawledUrlsRequest message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1.ListCrawledUrlsRequest.verify|verify} messages.
                     * @param message ListCrawledUrlsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1.IListCrawledUrlsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListCrawledUrlsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListCrawledUrlsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1.ListCrawledUrlsRequest;

                    /**
                     * Decodes a ListCrawledUrlsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListCrawledUrlsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1.ListCrawledUrlsRequest;

                    /**
                     * Verifies a ListCrawledUrlsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListCrawledUrlsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListCrawledUrlsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1.ListCrawledUrlsRequest;

                    /**
                     * Creates a plain object from a ListCrawledUrlsRequest message. Also converts values to other types if specified.
                     * @param message ListCrawledUrlsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1.ListCrawledUrlsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListCrawledUrlsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListCrawledUrlsResponse. */
                interface IListCrawledUrlsResponse {

                    /** ListCrawledUrlsResponse crawledUrls */
                    crawledUrls?: (google.cloud.websecurityscanner.v1.ICrawledUrl[]|null);

                    /** ListCrawledUrlsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListCrawledUrlsResponse. */
                class ListCrawledUrlsResponse implements IListCrawledUrlsResponse {

                    /**
                     * Constructs a new ListCrawledUrlsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1.IListCrawledUrlsResponse);

                    /** ListCrawledUrlsResponse crawledUrls. */
                    public crawledUrls: google.cloud.websecurityscanner.v1.ICrawledUrl[];

                    /** ListCrawledUrlsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListCrawledUrlsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListCrawledUrlsResponse instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1.IListCrawledUrlsResponse): google.cloud.websecurityscanner.v1.ListCrawledUrlsResponse;

                    /**
                     * Encodes the specified ListCrawledUrlsResponse message. Does not implicitly {@link google.cloud.websecurityscanner.v1.ListCrawledUrlsResponse.verify|verify} messages.
                     * @param message ListCrawledUrlsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1.IListCrawledUrlsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListCrawledUrlsResponse message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1.ListCrawledUrlsResponse.verify|verify} messages.
                     * @param message ListCrawledUrlsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1.IListCrawledUrlsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListCrawledUrlsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListCrawledUrlsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1.ListCrawledUrlsResponse;

                    /**
                     * Decodes a ListCrawledUrlsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListCrawledUrlsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1.ListCrawledUrlsResponse;

                    /**
                     * Verifies a ListCrawledUrlsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListCrawledUrlsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListCrawledUrlsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1.ListCrawledUrlsResponse;

                    /**
                     * Creates a plain object from a ListCrawledUrlsResponse message. Also converts values to other types if specified.
                     * @param message ListCrawledUrlsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1.ListCrawledUrlsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListCrawledUrlsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetFindingRequest. */
                interface IGetFindingRequest {

                    /** GetFindingRequest name */
                    name?: (string|null);
                }

                /** Represents a GetFindingRequest. */
                class GetFindingRequest implements IGetFindingRequest {

                    /**
                     * Constructs a new GetFindingRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1.IGetFindingRequest);

                    /** GetFindingRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetFindingRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetFindingRequest instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1.IGetFindingRequest): google.cloud.websecurityscanner.v1.GetFindingRequest;

                    /**
                     * Encodes the specified GetFindingRequest message. Does not implicitly {@link google.cloud.websecurityscanner.v1.GetFindingRequest.verify|verify} messages.
                     * @param message GetFindingRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1.IGetFindingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetFindingRequest message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1.GetFindingRequest.verify|verify} messages.
                     * @param message GetFindingRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1.IGetFindingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetFindingRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetFindingRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1.GetFindingRequest;

                    /**
                     * Decodes a GetFindingRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetFindingRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1.GetFindingRequest;

                    /**
                     * Verifies a GetFindingRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetFindingRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetFindingRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1.GetFindingRequest;

                    /**
                     * Creates a plain object from a GetFindingRequest message. Also converts values to other types if specified.
                     * @param message GetFindingRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1.GetFindingRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetFindingRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListFindingsRequest. */
                interface IListFindingsRequest {

                    /** ListFindingsRequest parent */
                    parent?: (string|null);

                    /** ListFindingsRequest filter */
                    filter?: (string|null);

                    /** ListFindingsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListFindingsRequest pageSize */
                    pageSize?: (number|null);
                }

                /** Represents a ListFindingsRequest. */
                class ListFindingsRequest implements IListFindingsRequest {

                    /**
                     * Constructs a new ListFindingsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1.IListFindingsRequest);

                    /** ListFindingsRequest parent. */
                    public parent: string;

                    /** ListFindingsRequest filter. */
                    public filter: string;

                    /** ListFindingsRequest pageToken. */
                    public pageToken: string;

                    /** ListFindingsRequest pageSize. */
                    public pageSize: number;

                    /**
                     * Creates a new ListFindingsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListFindingsRequest instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1.IListFindingsRequest): google.cloud.websecurityscanner.v1.ListFindingsRequest;

                    /**
                     * Encodes the specified ListFindingsRequest message. Does not implicitly {@link google.cloud.websecurityscanner.v1.ListFindingsRequest.verify|verify} messages.
                     * @param message ListFindingsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1.IListFindingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListFindingsRequest message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1.ListFindingsRequest.verify|verify} messages.
                     * @param message ListFindingsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1.IListFindingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListFindingsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListFindingsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1.ListFindingsRequest;

                    /**
                     * Decodes a ListFindingsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListFindingsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1.ListFindingsRequest;

                    /**
                     * Verifies a ListFindingsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListFindingsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListFindingsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1.ListFindingsRequest;

                    /**
                     * Creates a plain object from a ListFindingsRequest message. Also converts values to other types if specified.
                     * @param message ListFindingsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1.ListFindingsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListFindingsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListFindingsResponse. */
                interface IListFindingsResponse {

                    /** ListFindingsResponse findings */
                    findings?: (google.cloud.websecurityscanner.v1.IFinding[]|null);

                    /** ListFindingsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListFindingsResponse. */
                class ListFindingsResponse implements IListFindingsResponse {

                    /**
                     * Constructs a new ListFindingsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1.IListFindingsResponse);

                    /** ListFindingsResponse findings. */
                    public findings: google.cloud.websecurityscanner.v1.IFinding[];

                    /** ListFindingsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListFindingsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListFindingsResponse instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1.IListFindingsResponse): google.cloud.websecurityscanner.v1.ListFindingsResponse;

                    /**
                     * Encodes the specified ListFindingsResponse message. Does not implicitly {@link google.cloud.websecurityscanner.v1.ListFindingsResponse.verify|verify} messages.
                     * @param message ListFindingsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1.IListFindingsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListFindingsResponse message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1.ListFindingsResponse.verify|verify} messages.
                     * @param message ListFindingsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1.IListFindingsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListFindingsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListFindingsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1.ListFindingsResponse;

                    /**
                     * Decodes a ListFindingsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListFindingsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1.ListFindingsResponse;

                    /**
                     * Verifies a ListFindingsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListFindingsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListFindingsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1.ListFindingsResponse;

                    /**
                     * Creates a plain object from a ListFindingsResponse message. Also converts values to other types if specified.
                     * @param message ListFindingsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1.ListFindingsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListFindingsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListFindingTypeStatsRequest. */
                interface IListFindingTypeStatsRequest {

                    /** ListFindingTypeStatsRequest parent */
                    parent?: (string|null);
                }

                /** Represents a ListFindingTypeStatsRequest. */
                class ListFindingTypeStatsRequest implements IListFindingTypeStatsRequest {

                    /**
                     * Constructs a new ListFindingTypeStatsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1.IListFindingTypeStatsRequest);

                    /** ListFindingTypeStatsRequest parent. */
                    public parent: string;

                    /**
                     * Creates a new ListFindingTypeStatsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListFindingTypeStatsRequest instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1.IListFindingTypeStatsRequest): google.cloud.websecurityscanner.v1.ListFindingTypeStatsRequest;

                    /**
                     * Encodes the specified ListFindingTypeStatsRequest message. Does not implicitly {@link google.cloud.websecurityscanner.v1.ListFindingTypeStatsRequest.verify|verify} messages.
                     * @param message ListFindingTypeStatsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1.IListFindingTypeStatsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListFindingTypeStatsRequest message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1.ListFindingTypeStatsRequest.verify|verify} messages.
                     * @param message ListFindingTypeStatsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1.IListFindingTypeStatsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListFindingTypeStatsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListFindingTypeStatsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1.ListFindingTypeStatsRequest;

                    /**
                     * Decodes a ListFindingTypeStatsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListFindingTypeStatsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1.ListFindingTypeStatsRequest;

                    /**
                     * Verifies a ListFindingTypeStatsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListFindingTypeStatsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListFindingTypeStatsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1.ListFindingTypeStatsRequest;

                    /**
                     * Creates a plain object from a ListFindingTypeStatsRequest message. Also converts values to other types if specified.
                     * @param message ListFindingTypeStatsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1.ListFindingTypeStatsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListFindingTypeStatsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListFindingTypeStatsResponse. */
                interface IListFindingTypeStatsResponse {

                    /** ListFindingTypeStatsResponse findingTypeStats */
                    findingTypeStats?: (google.cloud.websecurityscanner.v1.IFindingTypeStats[]|null);
                }

                /** Represents a ListFindingTypeStatsResponse. */
                class ListFindingTypeStatsResponse implements IListFindingTypeStatsResponse {

                    /**
                     * Constructs a new ListFindingTypeStatsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1.IListFindingTypeStatsResponse);

                    /** ListFindingTypeStatsResponse findingTypeStats. */
                    public findingTypeStats: google.cloud.websecurityscanner.v1.IFindingTypeStats[];

                    /**
                     * Creates a new ListFindingTypeStatsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListFindingTypeStatsResponse instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1.IListFindingTypeStatsResponse): google.cloud.websecurityscanner.v1.ListFindingTypeStatsResponse;

                    /**
                     * Encodes the specified ListFindingTypeStatsResponse message. Does not implicitly {@link google.cloud.websecurityscanner.v1.ListFindingTypeStatsResponse.verify|verify} messages.
                     * @param message ListFindingTypeStatsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1.IListFindingTypeStatsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListFindingTypeStatsResponse message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1.ListFindingTypeStatsResponse.verify|verify} messages.
                     * @param message ListFindingTypeStatsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1.IListFindingTypeStatsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListFindingTypeStatsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListFindingTypeStatsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1.ListFindingTypeStatsResponse;

                    /**
                     * Decodes a ListFindingTypeStatsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListFindingTypeStatsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1.ListFindingTypeStatsResponse;

                    /**
                     * Verifies a ListFindingTypeStatsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListFindingTypeStatsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListFindingTypeStatsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1.ListFindingTypeStatsResponse;

                    /**
                     * Creates a plain object from a ListFindingTypeStatsResponse message. Also converts values to other types if specified.
                     * @param message ListFindingTypeStatsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1.ListFindingTypeStatsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListFindingTypeStatsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Namespace v1alpha. */
            namespace v1alpha {

                /** Properties of a CrawledUrl. */
                interface ICrawledUrl {

                    /** CrawledUrl httpMethod */
                    httpMethod?: (string|null);

                    /** CrawledUrl url */
                    url?: (string|null);

                    /** CrawledUrl body */
                    body?: (string|null);
                }

                /** Represents a CrawledUrl. */
                class CrawledUrl implements ICrawledUrl {

                    /**
                     * Constructs a new CrawledUrl.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1alpha.ICrawledUrl);

                    /** CrawledUrl httpMethod. */
                    public httpMethod: string;

                    /** CrawledUrl url. */
                    public url: string;

                    /** CrawledUrl body. */
                    public body: string;

                    /**
                     * Creates a new CrawledUrl instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CrawledUrl instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1alpha.ICrawledUrl): google.cloud.websecurityscanner.v1alpha.CrawledUrl;

                    /**
                     * Encodes the specified CrawledUrl message. Does not implicitly {@link google.cloud.websecurityscanner.v1alpha.CrawledUrl.verify|verify} messages.
                     * @param message CrawledUrl message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1alpha.ICrawledUrl, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CrawledUrl message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1alpha.CrawledUrl.verify|verify} messages.
                     * @param message CrawledUrl message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1alpha.ICrawledUrl, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CrawledUrl message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CrawledUrl
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1alpha.CrawledUrl;

                    /**
                     * Decodes a CrawledUrl message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CrawledUrl
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1alpha.CrawledUrl;

                    /**
                     * Verifies a CrawledUrl message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CrawledUrl message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CrawledUrl
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1alpha.CrawledUrl;

                    /**
                     * Creates a plain object from a CrawledUrl message. Also converts values to other types if specified.
                     * @param message CrawledUrl
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1alpha.CrawledUrl, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CrawledUrl to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Finding. */
                interface IFinding {

                    /** Finding name */
                    name?: (string|null);

                    /** Finding findingType */
                    findingType?: (google.cloud.websecurityscanner.v1alpha.Finding.FindingType|keyof typeof google.cloud.websecurityscanner.v1alpha.Finding.FindingType|null);

                    /** Finding httpMethod */
                    httpMethod?: (string|null);

                    /** Finding fuzzedUrl */
                    fuzzedUrl?: (string|null);

                    /** Finding body */
                    body?: (string|null);

                    /** Finding description */
                    description?: (string|null);

                    /** Finding reproductionUrl */
                    reproductionUrl?: (string|null);

                    /** Finding frameUrl */
                    frameUrl?: (string|null);

                    /** Finding finalUrl */
                    finalUrl?: (string|null);

                    /** Finding trackingId */
                    trackingId?: (string|null);

                    /** Finding outdatedLibrary */
                    outdatedLibrary?: (google.cloud.websecurityscanner.v1alpha.IOutdatedLibrary|null);

                    /** Finding violatingResource */
                    violatingResource?: (google.cloud.websecurityscanner.v1alpha.IViolatingResource|null);

                    /** Finding vulnerableHeaders */
                    vulnerableHeaders?: (google.cloud.websecurityscanner.v1alpha.IVulnerableHeaders|null);

                    /** Finding vulnerableParameters */
                    vulnerableParameters?: (google.cloud.websecurityscanner.v1alpha.IVulnerableParameters|null);

                    /** Finding xss */
                    xss?: (google.cloud.websecurityscanner.v1alpha.IXss|null);
                }

                /** Represents a Finding. */
                class Finding implements IFinding {

                    /**
                     * Constructs a new Finding.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1alpha.IFinding);

                    /** Finding name. */
                    public name: string;

                    /** Finding findingType. */
                    public findingType: (google.cloud.websecurityscanner.v1alpha.Finding.FindingType|keyof typeof google.cloud.websecurityscanner.v1alpha.Finding.FindingType);

                    /** Finding httpMethod. */
                    public httpMethod: string;

                    /** Finding fuzzedUrl. */
                    public fuzzedUrl: string;

                    /** Finding body. */
                    public body: string;

                    /** Finding description. */
                    public description: string;

                    /** Finding reproductionUrl. */
                    public reproductionUrl: string;

                    /** Finding frameUrl. */
                    public frameUrl: string;

                    /** Finding finalUrl. */
                    public finalUrl: string;

                    /** Finding trackingId. */
                    public trackingId: string;

                    /** Finding outdatedLibrary. */
                    public outdatedLibrary?: (google.cloud.websecurityscanner.v1alpha.IOutdatedLibrary|null);

                    /** Finding violatingResource. */
                    public violatingResource?: (google.cloud.websecurityscanner.v1alpha.IViolatingResource|null);

                    /** Finding vulnerableHeaders. */
                    public vulnerableHeaders?: (google.cloud.websecurityscanner.v1alpha.IVulnerableHeaders|null);

                    /** Finding vulnerableParameters. */
                    public vulnerableParameters?: (google.cloud.websecurityscanner.v1alpha.IVulnerableParameters|null);

                    /** Finding xss. */
                    public xss?: (google.cloud.websecurityscanner.v1alpha.IXss|null);

                    /**
                     * Creates a new Finding instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Finding instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1alpha.IFinding): google.cloud.websecurityscanner.v1alpha.Finding;

                    /**
                     * Encodes the specified Finding message. Does not implicitly {@link google.cloud.websecurityscanner.v1alpha.Finding.verify|verify} messages.
                     * @param message Finding message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1alpha.IFinding, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Finding message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1alpha.Finding.verify|verify} messages.
                     * @param message Finding message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1alpha.IFinding, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Finding message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Finding
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1alpha.Finding;

                    /**
                     * Decodes a Finding message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Finding
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1alpha.Finding;

                    /**
                     * Verifies a Finding message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Finding message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Finding
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1alpha.Finding;

                    /**
                     * Creates a plain object from a Finding message. Also converts values to other types if specified.
                     * @param message Finding
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1alpha.Finding, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Finding to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Finding {

                    /** FindingType enum. */
                    enum FindingType {
                        FINDING_TYPE_UNSPECIFIED = 0,
                        MIXED_CONTENT = 1,
                        OUTDATED_LIBRARY = 2,
                        ROSETTA_FLASH = 5,
                        XSS_CALLBACK = 3,
                        XSS_ERROR = 4,
                        CLEAR_TEXT_PASSWORD = 6,
                        INVALID_CONTENT_TYPE = 7,
                        XSS_ANGULAR_CALLBACK = 8,
                        INVALID_HEADER = 9,
                        MISSPELLED_SECURITY_HEADER_NAME = 10,
                        MISMATCHING_SECURITY_HEADER_VALUES = 11
                    }
                }

                /** Properties of an OutdatedLibrary. */
                interface IOutdatedLibrary {

                    /** OutdatedLibrary libraryName */
                    libraryName?: (string|null);

                    /** OutdatedLibrary version */
                    version?: (string|null);

                    /** OutdatedLibrary learnMoreUrls */
                    learnMoreUrls?: (string[]|null);
                }

                /** Represents an OutdatedLibrary. */
                class OutdatedLibrary implements IOutdatedLibrary {

                    /**
                     * Constructs a new OutdatedLibrary.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1alpha.IOutdatedLibrary);

                    /** OutdatedLibrary libraryName. */
                    public libraryName: string;

                    /** OutdatedLibrary version. */
                    public version: string;

                    /** OutdatedLibrary learnMoreUrls. */
                    public learnMoreUrls: string[];

                    /**
                     * Creates a new OutdatedLibrary instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OutdatedLibrary instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1alpha.IOutdatedLibrary): google.cloud.websecurityscanner.v1alpha.OutdatedLibrary;

                    /**
                     * Encodes the specified OutdatedLibrary message. Does not implicitly {@link google.cloud.websecurityscanner.v1alpha.OutdatedLibrary.verify|verify} messages.
                     * @param message OutdatedLibrary message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1alpha.IOutdatedLibrary, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OutdatedLibrary message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1alpha.OutdatedLibrary.verify|verify} messages.
                     * @param message OutdatedLibrary message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1alpha.IOutdatedLibrary, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OutdatedLibrary message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OutdatedLibrary
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1alpha.OutdatedLibrary;

                    /**
                     * Decodes an OutdatedLibrary message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OutdatedLibrary
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1alpha.OutdatedLibrary;

                    /**
                     * Verifies an OutdatedLibrary message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an OutdatedLibrary message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns OutdatedLibrary
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1alpha.OutdatedLibrary;

                    /**
                     * Creates a plain object from an OutdatedLibrary message. Also converts values to other types if specified.
                     * @param message OutdatedLibrary
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1alpha.OutdatedLibrary, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OutdatedLibrary to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ViolatingResource. */
                interface IViolatingResource {

                    /** ViolatingResource contentType */
                    contentType?: (string|null);

                    /** ViolatingResource resourceUrl */
                    resourceUrl?: (string|null);
                }

                /** Represents a ViolatingResource. */
                class ViolatingResource implements IViolatingResource {

                    /**
                     * Constructs a new ViolatingResource.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1alpha.IViolatingResource);

                    /** ViolatingResource contentType. */
                    public contentType: string;

                    /** ViolatingResource resourceUrl. */
                    public resourceUrl: string;

                    /**
                     * Creates a new ViolatingResource instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ViolatingResource instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1alpha.IViolatingResource): google.cloud.websecurityscanner.v1alpha.ViolatingResource;

                    /**
                     * Encodes the specified ViolatingResource message. Does not implicitly {@link google.cloud.websecurityscanner.v1alpha.ViolatingResource.verify|verify} messages.
                     * @param message ViolatingResource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1alpha.IViolatingResource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ViolatingResource message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1alpha.ViolatingResource.verify|verify} messages.
                     * @param message ViolatingResource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1alpha.IViolatingResource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ViolatingResource message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ViolatingResource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1alpha.ViolatingResource;

                    /**
                     * Decodes a ViolatingResource message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ViolatingResource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1alpha.ViolatingResource;

                    /**
                     * Verifies a ViolatingResource message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ViolatingResource message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ViolatingResource
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1alpha.ViolatingResource;

                    /**
                     * Creates a plain object from a ViolatingResource message. Also converts values to other types if specified.
                     * @param message ViolatingResource
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1alpha.ViolatingResource, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ViolatingResource to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a VulnerableParameters. */
                interface IVulnerableParameters {

                    /** VulnerableParameters parameterNames */
                    parameterNames?: (string[]|null);
                }

                /** Represents a VulnerableParameters. */
                class VulnerableParameters implements IVulnerableParameters {

                    /**
                     * Constructs a new VulnerableParameters.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1alpha.IVulnerableParameters);

                    /** VulnerableParameters parameterNames. */
                    public parameterNames: string[];

                    /**
                     * Creates a new VulnerableParameters instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns VulnerableParameters instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1alpha.IVulnerableParameters): google.cloud.websecurityscanner.v1alpha.VulnerableParameters;

                    /**
                     * Encodes the specified VulnerableParameters message. Does not implicitly {@link google.cloud.websecurityscanner.v1alpha.VulnerableParameters.verify|verify} messages.
                     * @param message VulnerableParameters message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1alpha.IVulnerableParameters, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified VulnerableParameters message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1alpha.VulnerableParameters.verify|verify} messages.
                     * @param message VulnerableParameters message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1alpha.IVulnerableParameters, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a VulnerableParameters message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns VulnerableParameters
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1alpha.VulnerableParameters;

                    /**
                     * Decodes a VulnerableParameters message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns VulnerableParameters
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1alpha.VulnerableParameters;

                    /**
                     * Verifies a VulnerableParameters message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a VulnerableParameters message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns VulnerableParameters
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1alpha.VulnerableParameters;

                    /**
                     * Creates a plain object from a VulnerableParameters message. Also converts values to other types if specified.
                     * @param message VulnerableParameters
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1alpha.VulnerableParameters, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this VulnerableParameters to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a VulnerableHeaders. */
                interface IVulnerableHeaders {

                    /** VulnerableHeaders headers */
                    headers?: (google.cloud.websecurityscanner.v1alpha.VulnerableHeaders.IHeader[]|null);

                    /** VulnerableHeaders missingHeaders */
                    missingHeaders?: (google.cloud.websecurityscanner.v1alpha.VulnerableHeaders.IHeader[]|null);
                }

                /** Represents a VulnerableHeaders. */
                class VulnerableHeaders implements IVulnerableHeaders {

                    /**
                     * Constructs a new VulnerableHeaders.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1alpha.IVulnerableHeaders);

                    /** VulnerableHeaders headers. */
                    public headers: google.cloud.websecurityscanner.v1alpha.VulnerableHeaders.IHeader[];

                    /** VulnerableHeaders missingHeaders. */
                    public missingHeaders: google.cloud.websecurityscanner.v1alpha.VulnerableHeaders.IHeader[];

                    /**
                     * Creates a new VulnerableHeaders instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns VulnerableHeaders instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1alpha.IVulnerableHeaders): google.cloud.websecurityscanner.v1alpha.VulnerableHeaders;

                    /**
                     * Encodes the specified VulnerableHeaders message. Does not implicitly {@link google.cloud.websecurityscanner.v1alpha.VulnerableHeaders.verify|verify} messages.
                     * @param message VulnerableHeaders message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1alpha.IVulnerableHeaders, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified VulnerableHeaders message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1alpha.VulnerableHeaders.verify|verify} messages.
                     * @param message VulnerableHeaders message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1alpha.IVulnerableHeaders, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a VulnerableHeaders message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns VulnerableHeaders
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1alpha.VulnerableHeaders;

                    /**
                     * Decodes a VulnerableHeaders message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns VulnerableHeaders
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1alpha.VulnerableHeaders;

                    /**
                     * Verifies a VulnerableHeaders message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a VulnerableHeaders message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns VulnerableHeaders
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1alpha.VulnerableHeaders;

                    /**
                     * Creates a plain object from a VulnerableHeaders message. Also converts values to other types if specified.
                     * @param message VulnerableHeaders
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1alpha.VulnerableHeaders, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this VulnerableHeaders to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace VulnerableHeaders {

                    /** Properties of a Header. */
                    interface IHeader {

                        /** Header name */
                        name?: (string|null);

                        /** Header value */
                        value?: (string|null);
                    }

                    /** Represents a Header. */
                    class Header implements IHeader {

                        /**
                         * Constructs a new Header.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.websecurityscanner.v1alpha.VulnerableHeaders.IHeader);

                        /** Header name. */
                        public name: string;

                        /** Header value. */
                        public value: string;

                        /**
                         * Creates a new Header instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Header instance
                         */
                        public static create(properties?: google.cloud.websecurityscanner.v1alpha.VulnerableHeaders.IHeader): google.cloud.websecurityscanner.v1alpha.VulnerableHeaders.Header;

                        /**
                         * Encodes the specified Header message. Does not implicitly {@link google.cloud.websecurityscanner.v1alpha.VulnerableHeaders.Header.verify|verify} messages.
                         * @param message Header message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.websecurityscanner.v1alpha.VulnerableHeaders.IHeader, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Header message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1alpha.VulnerableHeaders.Header.verify|verify} messages.
                         * @param message Header message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.websecurityscanner.v1alpha.VulnerableHeaders.IHeader, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Header message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Header
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1alpha.VulnerableHeaders.Header;

                        /**
                         * Decodes a Header message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Header
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1alpha.VulnerableHeaders.Header;

                        /**
                         * Verifies a Header message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Header message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Header
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1alpha.VulnerableHeaders.Header;

                        /**
                         * Creates a plain object from a Header message. Also converts values to other types if specified.
                         * @param message Header
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.websecurityscanner.v1alpha.VulnerableHeaders.Header, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Header to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Properties of a Xss. */
                interface IXss {

                    /** Xss stackTraces */
                    stackTraces?: (string[]|null);

                    /** Xss errorMessage */
                    errorMessage?: (string|null);
                }

                /** Represents a Xss. */
                class Xss implements IXss {

                    /**
                     * Constructs a new Xss.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1alpha.IXss);

                    /** Xss stackTraces. */
                    public stackTraces: string[];

                    /** Xss errorMessage. */
                    public errorMessage: string;

                    /**
                     * Creates a new Xss instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Xss instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1alpha.IXss): google.cloud.websecurityscanner.v1alpha.Xss;

                    /**
                     * Encodes the specified Xss message. Does not implicitly {@link google.cloud.websecurityscanner.v1alpha.Xss.verify|verify} messages.
                     * @param message Xss message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1alpha.IXss, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Xss message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1alpha.Xss.verify|verify} messages.
                     * @param message Xss message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1alpha.IXss, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Xss message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Xss
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1alpha.Xss;

                    /**
                     * Decodes a Xss message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Xss
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1alpha.Xss;

                    /**
                     * Verifies a Xss message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Xss message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Xss
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1alpha.Xss;

                    /**
                     * Creates a plain object from a Xss message. Also converts values to other types if specified.
                     * @param message Xss
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1alpha.Xss, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Xss to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a FindingTypeStats. */
                interface IFindingTypeStats {

                    /** FindingTypeStats findingType */
                    findingType?: (google.cloud.websecurityscanner.v1alpha.Finding.FindingType|keyof typeof google.cloud.websecurityscanner.v1alpha.Finding.FindingType|null);

                    /** FindingTypeStats findingCount */
                    findingCount?: (number|null);
                }

                /** Represents a FindingTypeStats. */
                class FindingTypeStats implements IFindingTypeStats {

                    /**
                     * Constructs a new FindingTypeStats.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1alpha.IFindingTypeStats);

                    /** FindingTypeStats findingType. */
                    public findingType: (google.cloud.websecurityscanner.v1alpha.Finding.FindingType|keyof typeof google.cloud.websecurityscanner.v1alpha.Finding.FindingType);

                    /** FindingTypeStats findingCount. */
                    public findingCount: number;

                    /**
                     * Creates a new FindingTypeStats instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FindingTypeStats instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1alpha.IFindingTypeStats): google.cloud.websecurityscanner.v1alpha.FindingTypeStats;

                    /**
                     * Encodes the specified FindingTypeStats message. Does not implicitly {@link google.cloud.websecurityscanner.v1alpha.FindingTypeStats.verify|verify} messages.
                     * @param message FindingTypeStats message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1alpha.IFindingTypeStats, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FindingTypeStats message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1alpha.FindingTypeStats.verify|verify} messages.
                     * @param message FindingTypeStats message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1alpha.IFindingTypeStats, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FindingTypeStats message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FindingTypeStats
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1alpha.FindingTypeStats;

                    /**
                     * Decodes a FindingTypeStats message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FindingTypeStats
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1alpha.FindingTypeStats;

                    /**
                     * Verifies a FindingTypeStats message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FindingTypeStats message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FindingTypeStats
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1alpha.FindingTypeStats;

                    /**
                     * Creates a plain object from a FindingTypeStats message. Also converts values to other types if specified.
                     * @param message FindingTypeStats
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1alpha.FindingTypeStats, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FindingTypeStats to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ScanConfig. */
                interface IScanConfig {

                    /** ScanConfig name */
                    name?: (string|null);

                    /** ScanConfig displayName */
                    displayName?: (string|null);

                    /** ScanConfig maxQps */
                    maxQps?: (number|null);

                    /** ScanConfig startingUrls */
                    startingUrls?: (string[]|null);

                    /** ScanConfig authentication */
                    authentication?: (google.cloud.websecurityscanner.v1alpha.ScanConfig.IAuthentication|null);

                    /** ScanConfig userAgent */
                    userAgent?: (google.cloud.websecurityscanner.v1alpha.ScanConfig.UserAgent|keyof typeof google.cloud.websecurityscanner.v1alpha.ScanConfig.UserAgent|null);

                    /** ScanConfig blacklistPatterns */
                    blacklistPatterns?: (string[]|null);

                    /** ScanConfig schedule */
                    schedule?: (google.cloud.websecurityscanner.v1alpha.ScanConfig.ISchedule|null);

                    /** ScanConfig targetPlatforms */
                    targetPlatforms?: (google.cloud.websecurityscanner.v1alpha.ScanConfig.TargetPlatform[]|null);

                    /** ScanConfig latestRun */
                    latestRun?: (google.cloud.websecurityscanner.v1alpha.IScanRun|null);
                }

                /** Represents a ScanConfig. */
                class ScanConfig implements IScanConfig {

                    /**
                     * Constructs a new ScanConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1alpha.IScanConfig);

                    /** ScanConfig name. */
                    public name: string;

                    /** ScanConfig displayName. */
                    public displayName: string;

                    /** ScanConfig maxQps. */
                    public maxQps: number;

                    /** ScanConfig startingUrls. */
                    public startingUrls: string[];

                    /** ScanConfig authentication. */
                    public authentication?: (google.cloud.websecurityscanner.v1alpha.ScanConfig.IAuthentication|null);

                    /** ScanConfig userAgent. */
                    public userAgent: (google.cloud.websecurityscanner.v1alpha.ScanConfig.UserAgent|keyof typeof google.cloud.websecurityscanner.v1alpha.ScanConfig.UserAgent);

                    /** ScanConfig blacklistPatterns. */
                    public blacklistPatterns: string[];

                    /** ScanConfig schedule. */
                    public schedule?: (google.cloud.websecurityscanner.v1alpha.ScanConfig.ISchedule|null);

                    /** ScanConfig targetPlatforms. */
                    public targetPlatforms: google.cloud.websecurityscanner.v1alpha.ScanConfig.TargetPlatform[];

                    /** ScanConfig latestRun. */
                    public latestRun?: (google.cloud.websecurityscanner.v1alpha.IScanRun|null);

                    /**
                     * Creates a new ScanConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ScanConfig instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1alpha.IScanConfig): google.cloud.websecurityscanner.v1alpha.ScanConfig;

                    /**
                     * Encodes the specified ScanConfig message. Does not implicitly {@link google.cloud.websecurityscanner.v1alpha.ScanConfig.verify|verify} messages.
                     * @param message ScanConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1alpha.IScanConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ScanConfig message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1alpha.ScanConfig.verify|verify} messages.
                     * @param message ScanConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1alpha.IScanConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ScanConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ScanConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1alpha.ScanConfig;

                    /**
                     * Decodes a ScanConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ScanConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1alpha.ScanConfig;

                    /**
                     * Verifies a ScanConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ScanConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ScanConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1alpha.ScanConfig;

                    /**
                     * Creates a plain object from a ScanConfig message. Also converts values to other types if specified.
                     * @param message ScanConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1alpha.ScanConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ScanConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace ScanConfig {

                    /** Properties of an Authentication. */
                    interface IAuthentication {

                        /** Authentication googleAccount */
                        googleAccount?: (google.cloud.websecurityscanner.v1alpha.ScanConfig.Authentication.IGoogleAccount|null);

                        /** Authentication customAccount */
                        customAccount?: (google.cloud.websecurityscanner.v1alpha.ScanConfig.Authentication.ICustomAccount|null);
                    }

                    /** Represents an Authentication. */
                    class Authentication implements IAuthentication {

                        /**
                         * Constructs a new Authentication.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.websecurityscanner.v1alpha.ScanConfig.IAuthentication);

                        /** Authentication googleAccount. */
                        public googleAccount?: (google.cloud.websecurityscanner.v1alpha.ScanConfig.Authentication.IGoogleAccount|null);

                        /** Authentication customAccount. */
                        public customAccount?: (google.cloud.websecurityscanner.v1alpha.ScanConfig.Authentication.ICustomAccount|null);

                        /** Authentication authentication. */
                        public authentication?: ("googleAccount"|"customAccount");

                        /**
                         * Creates a new Authentication instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Authentication instance
                         */
                        public static create(properties?: google.cloud.websecurityscanner.v1alpha.ScanConfig.IAuthentication): google.cloud.websecurityscanner.v1alpha.ScanConfig.Authentication;

                        /**
                         * Encodes the specified Authentication message. Does not implicitly {@link google.cloud.websecurityscanner.v1alpha.ScanConfig.Authentication.verify|verify} messages.
                         * @param message Authentication message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.websecurityscanner.v1alpha.ScanConfig.IAuthentication, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Authentication message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1alpha.ScanConfig.Authentication.verify|verify} messages.
                         * @param message Authentication message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.websecurityscanner.v1alpha.ScanConfig.IAuthentication, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an Authentication message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Authentication
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1alpha.ScanConfig.Authentication;

                        /**
                         * Decodes an Authentication message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Authentication
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1alpha.ScanConfig.Authentication;

                        /**
                         * Verifies an Authentication message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an Authentication message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Authentication
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1alpha.ScanConfig.Authentication;

                        /**
                         * Creates a plain object from an Authentication message. Also converts values to other types if specified.
                         * @param message Authentication
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.websecurityscanner.v1alpha.ScanConfig.Authentication, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Authentication to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace Authentication {

                        /** Properties of a GoogleAccount. */
                        interface IGoogleAccount {

                            /** GoogleAccount username */
                            username?: (string|null);

                            /** GoogleAccount password */
                            password?: (string|null);
                        }

                        /** Represents a GoogleAccount. */
                        class GoogleAccount implements IGoogleAccount {

                            /**
                             * Constructs a new GoogleAccount.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.websecurityscanner.v1alpha.ScanConfig.Authentication.IGoogleAccount);

                            /** GoogleAccount username. */
                            public username: string;

                            /** GoogleAccount password. */
                            public password: string;

                            /**
                             * Creates a new GoogleAccount instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns GoogleAccount instance
                             */
                            public static create(properties?: google.cloud.websecurityscanner.v1alpha.ScanConfig.Authentication.IGoogleAccount): google.cloud.websecurityscanner.v1alpha.ScanConfig.Authentication.GoogleAccount;

                            /**
                             * Encodes the specified GoogleAccount message. Does not implicitly {@link google.cloud.websecurityscanner.v1alpha.ScanConfig.Authentication.GoogleAccount.verify|verify} messages.
                             * @param message GoogleAccount message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.websecurityscanner.v1alpha.ScanConfig.Authentication.IGoogleAccount, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified GoogleAccount message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1alpha.ScanConfig.Authentication.GoogleAccount.verify|verify} messages.
                             * @param message GoogleAccount message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.websecurityscanner.v1alpha.ScanConfig.Authentication.IGoogleAccount, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a GoogleAccount message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns GoogleAccount
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1alpha.ScanConfig.Authentication.GoogleAccount;

                            /**
                             * Decodes a GoogleAccount message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns GoogleAccount
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1alpha.ScanConfig.Authentication.GoogleAccount;

                            /**
                             * Verifies a GoogleAccount message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a GoogleAccount message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns GoogleAccount
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1alpha.ScanConfig.Authentication.GoogleAccount;

                            /**
                             * Creates a plain object from a GoogleAccount message. Also converts values to other types if specified.
                             * @param message GoogleAccount
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.websecurityscanner.v1alpha.ScanConfig.Authentication.GoogleAccount, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this GoogleAccount to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a CustomAccount. */
                        interface ICustomAccount {

                            /** CustomAccount username */
                            username?: (string|null);

                            /** CustomAccount password */
                            password?: (string|null);

                            /** CustomAccount loginUrl */
                            loginUrl?: (string|null);
                        }

                        /** Represents a CustomAccount. */
                        class CustomAccount implements ICustomAccount {

                            /**
                             * Constructs a new CustomAccount.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.websecurityscanner.v1alpha.ScanConfig.Authentication.ICustomAccount);

                            /** CustomAccount username. */
                            public username: string;

                            /** CustomAccount password. */
                            public password: string;

                            /** CustomAccount loginUrl. */
                            public loginUrl: string;

                            /**
                             * Creates a new CustomAccount instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns CustomAccount instance
                             */
                            public static create(properties?: google.cloud.websecurityscanner.v1alpha.ScanConfig.Authentication.ICustomAccount): google.cloud.websecurityscanner.v1alpha.ScanConfig.Authentication.CustomAccount;

                            /**
                             * Encodes the specified CustomAccount message. Does not implicitly {@link google.cloud.websecurityscanner.v1alpha.ScanConfig.Authentication.CustomAccount.verify|verify} messages.
                             * @param message CustomAccount message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.websecurityscanner.v1alpha.ScanConfig.Authentication.ICustomAccount, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified CustomAccount message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1alpha.ScanConfig.Authentication.CustomAccount.verify|verify} messages.
                             * @param message CustomAccount message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.websecurityscanner.v1alpha.ScanConfig.Authentication.ICustomAccount, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a CustomAccount message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns CustomAccount
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1alpha.ScanConfig.Authentication.CustomAccount;

                            /**
                             * Decodes a CustomAccount message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns CustomAccount
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1alpha.ScanConfig.Authentication.CustomAccount;

                            /**
                             * Verifies a CustomAccount message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a CustomAccount message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns CustomAccount
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1alpha.ScanConfig.Authentication.CustomAccount;

                            /**
                             * Creates a plain object from a CustomAccount message. Also converts values to other types if specified.
                             * @param message CustomAccount
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.websecurityscanner.v1alpha.ScanConfig.Authentication.CustomAccount, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this CustomAccount to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }
                    }

                    /** Properties of a Schedule. */
                    interface ISchedule {

                        /** Schedule scheduleTime */
                        scheduleTime?: (google.protobuf.ITimestamp|null);

                        /** Schedule intervalDurationDays */
                        intervalDurationDays?: (number|null);
                    }

                    /** Represents a Schedule. */
                    class Schedule implements ISchedule {

                        /**
                         * Constructs a new Schedule.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.websecurityscanner.v1alpha.ScanConfig.ISchedule);

                        /** Schedule scheduleTime. */
                        public scheduleTime?: (google.protobuf.ITimestamp|null);

                        /** Schedule intervalDurationDays. */
                        public intervalDurationDays: number;

                        /**
                         * Creates a new Schedule instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Schedule instance
                         */
                        public static create(properties?: google.cloud.websecurityscanner.v1alpha.ScanConfig.ISchedule): google.cloud.websecurityscanner.v1alpha.ScanConfig.Schedule;

                        /**
                         * Encodes the specified Schedule message. Does not implicitly {@link google.cloud.websecurityscanner.v1alpha.ScanConfig.Schedule.verify|verify} messages.
                         * @param message Schedule message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.websecurityscanner.v1alpha.ScanConfig.ISchedule, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Schedule message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1alpha.ScanConfig.Schedule.verify|verify} messages.
                         * @param message Schedule message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.websecurityscanner.v1alpha.ScanConfig.ISchedule, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Schedule message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Schedule
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1alpha.ScanConfig.Schedule;

                        /**
                         * Decodes a Schedule message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Schedule
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1alpha.ScanConfig.Schedule;

                        /**
                         * Verifies a Schedule message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Schedule message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Schedule
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1alpha.ScanConfig.Schedule;

                        /**
                         * Creates a plain object from a Schedule message. Also converts values to other types if specified.
                         * @param message Schedule
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.websecurityscanner.v1alpha.ScanConfig.Schedule, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Schedule to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** UserAgent enum. */
                    enum UserAgent {
                        USER_AGENT_UNSPECIFIED = 0,
                        CHROME_LINUX = 1,
                        CHROME_ANDROID = 2,
                        SAFARI_IPHONE = 3
                    }

                    /** TargetPlatform enum. */
                    enum TargetPlatform {
                        TARGET_PLATFORM_UNSPECIFIED = 0,
                        APP_ENGINE = 1,
                        COMPUTE = 2
                    }
                }

                /** Properties of a ScanRun. */
                interface IScanRun {

                    /** ScanRun name */
                    name?: (string|null);

                    /** ScanRun executionState */
                    executionState?: (google.cloud.websecurityscanner.v1alpha.ScanRun.ExecutionState|keyof typeof google.cloud.websecurityscanner.v1alpha.ScanRun.ExecutionState|null);

                    /** ScanRun resultState */
                    resultState?: (google.cloud.websecurityscanner.v1alpha.ScanRun.ResultState|keyof typeof google.cloud.websecurityscanner.v1alpha.ScanRun.ResultState|null);

                    /** ScanRun startTime */
                    startTime?: (google.protobuf.ITimestamp|null);

                    /** ScanRun endTime */
                    endTime?: (google.protobuf.ITimestamp|null);

                    /** ScanRun urlsCrawledCount */
                    urlsCrawledCount?: (number|Long|string|null);

                    /** ScanRun urlsTestedCount */
                    urlsTestedCount?: (number|Long|string|null);

                    /** ScanRun hasVulnerabilities */
                    hasVulnerabilities?: (boolean|null);

                    /** ScanRun progressPercent */
                    progressPercent?: (number|null);
                }

                /** Represents a ScanRun. */
                class ScanRun implements IScanRun {

                    /**
                     * Constructs a new ScanRun.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1alpha.IScanRun);

                    /** ScanRun name. */
                    public name: string;

                    /** ScanRun executionState. */
                    public executionState: (google.cloud.websecurityscanner.v1alpha.ScanRun.ExecutionState|keyof typeof google.cloud.websecurityscanner.v1alpha.ScanRun.ExecutionState);

                    /** ScanRun resultState. */
                    public resultState: (google.cloud.websecurityscanner.v1alpha.ScanRun.ResultState|keyof typeof google.cloud.websecurityscanner.v1alpha.ScanRun.ResultState);

                    /** ScanRun startTime. */
                    public startTime?: (google.protobuf.ITimestamp|null);

                    /** ScanRun endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /** ScanRun urlsCrawledCount. */
                    public urlsCrawledCount: (number|Long|string);

                    /** ScanRun urlsTestedCount. */
                    public urlsTestedCount: (number|Long|string);

                    /** ScanRun hasVulnerabilities. */
                    public hasVulnerabilities: boolean;

                    /** ScanRun progressPercent. */
                    public progressPercent: number;

                    /**
                     * Creates a new ScanRun instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ScanRun instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1alpha.IScanRun): google.cloud.websecurityscanner.v1alpha.ScanRun;

                    /**
                     * Encodes the specified ScanRun message. Does not implicitly {@link google.cloud.websecurityscanner.v1alpha.ScanRun.verify|verify} messages.
                     * @param message ScanRun message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1alpha.IScanRun, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ScanRun message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1alpha.ScanRun.verify|verify} messages.
                     * @param message ScanRun message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1alpha.IScanRun, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ScanRun message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ScanRun
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1alpha.ScanRun;

                    /**
                     * Decodes a ScanRun message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ScanRun
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1alpha.ScanRun;

                    /**
                     * Verifies a ScanRun message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ScanRun message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ScanRun
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1alpha.ScanRun;

                    /**
                     * Creates a plain object from a ScanRun message. Also converts values to other types if specified.
                     * @param message ScanRun
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1alpha.ScanRun, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ScanRun to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace ScanRun {

                    /** ExecutionState enum. */
                    enum ExecutionState {
                        EXECUTION_STATE_UNSPECIFIED = 0,
                        QUEUED = 1,
                        SCANNING = 2,
                        FINISHED = 3
                    }

                    /** ResultState enum. */
                    enum ResultState {
                        RESULT_STATE_UNSPECIFIED = 0,
                        SUCCESS = 1,
                        ERROR = 2,
                        KILLED = 3
                    }
                }

                /** Represents a WebSecurityScanner */
                class WebSecurityScanner extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new WebSecurityScanner service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new WebSecurityScanner service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): WebSecurityScanner;

                    /**
                     * Calls CreateScanConfig.
                     * @param request CreateScanConfigRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ScanConfig
                     */
                    public createScanConfig(request: google.cloud.websecurityscanner.v1alpha.ICreateScanConfigRequest, callback: google.cloud.websecurityscanner.v1alpha.WebSecurityScanner.CreateScanConfigCallback): void;

                    /**
                     * Calls CreateScanConfig.
                     * @param request CreateScanConfigRequest message or plain object
                     * @returns Promise
                     */
                    public createScanConfig(request: google.cloud.websecurityscanner.v1alpha.ICreateScanConfigRequest): Promise<google.cloud.websecurityscanner.v1alpha.ScanConfig>;

                    /**
                     * Calls DeleteScanConfig.
                     * @param request DeleteScanConfigRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteScanConfig(request: google.cloud.websecurityscanner.v1alpha.IDeleteScanConfigRequest, callback: google.cloud.websecurityscanner.v1alpha.WebSecurityScanner.DeleteScanConfigCallback): void;

                    /**
                     * Calls DeleteScanConfig.
                     * @param request DeleteScanConfigRequest message or plain object
                     * @returns Promise
                     */
                    public deleteScanConfig(request: google.cloud.websecurityscanner.v1alpha.IDeleteScanConfigRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls GetScanConfig.
                     * @param request GetScanConfigRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ScanConfig
                     */
                    public getScanConfig(request: google.cloud.websecurityscanner.v1alpha.IGetScanConfigRequest, callback: google.cloud.websecurityscanner.v1alpha.WebSecurityScanner.GetScanConfigCallback): void;

                    /**
                     * Calls GetScanConfig.
                     * @param request GetScanConfigRequest message or plain object
                     * @returns Promise
                     */
                    public getScanConfig(request: google.cloud.websecurityscanner.v1alpha.IGetScanConfigRequest): Promise<google.cloud.websecurityscanner.v1alpha.ScanConfig>;

                    /**
                     * Calls ListScanConfigs.
                     * @param request ListScanConfigsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListScanConfigsResponse
                     */
                    public listScanConfigs(request: google.cloud.websecurityscanner.v1alpha.IListScanConfigsRequest, callback: google.cloud.websecurityscanner.v1alpha.WebSecurityScanner.ListScanConfigsCallback): void;

                    /**
                     * Calls ListScanConfigs.
                     * @param request ListScanConfigsRequest message or plain object
                     * @returns Promise
                     */
                    public listScanConfigs(request: google.cloud.websecurityscanner.v1alpha.IListScanConfigsRequest): Promise<google.cloud.websecurityscanner.v1alpha.ListScanConfigsResponse>;

                    /**
                     * Calls UpdateScanConfig.
                     * @param request UpdateScanConfigRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ScanConfig
                     */
                    public updateScanConfig(request: google.cloud.websecurityscanner.v1alpha.IUpdateScanConfigRequest, callback: google.cloud.websecurityscanner.v1alpha.WebSecurityScanner.UpdateScanConfigCallback): void;

                    /**
                     * Calls UpdateScanConfig.
                     * @param request UpdateScanConfigRequest message or plain object
                     * @returns Promise
                     */
                    public updateScanConfig(request: google.cloud.websecurityscanner.v1alpha.IUpdateScanConfigRequest): Promise<google.cloud.websecurityscanner.v1alpha.ScanConfig>;

                    /**
                     * Calls StartScanRun.
                     * @param request StartScanRunRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ScanRun
                     */
                    public startScanRun(request: google.cloud.websecurityscanner.v1alpha.IStartScanRunRequest, callback: google.cloud.websecurityscanner.v1alpha.WebSecurityScanner.StartScanRunCallback): void;

                    /**
                     * Calls StartScanRun.
                     * @param request StartScanRunRequest message or plain object
                     * @returns Promise
                     */
                    public startScanRun(request: google.cloud.websecurityscanner.v1alpha.IStartScanRunRequest): Promise<google.cloud.websecurityscanner.v1alpha.ScanRun>;

                    /**
                     * Calls GetScanRun.
                     * @param request GetScanRunRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ScanRun
                     */
                    public getScanRun(request: google.cloud.websecurityscanner.v1alpha.IGetScanRunRequest, callback: google.cloud.websecurityscanner.v1alpha.WebSecurityScanner.GetScanRunCallback): void;

                    /**
                     * Calls GetScanRun.
                     * @param request GetScanRunRequest message or plain object
                     * @returns Promise
                     */
                    public getScanRun(request: google.cloud.websecurityscanner.v1alpha.IGetScanRunRequest): Promise<google.cloud.websecurityscanner.v1alpha.ScanRun>;

                    /**
                     * Calls ListScanRuns.
                     * @param request ListScanRunsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListScanRunsResponse
                     */
                    public listScanRuns(request: google.cloud.websecurityscanner.v1alpha.IListScanRunsRequest, callback: google.cloud.websecurityscanner.v1alpha.WebSecurityScanner.ListScanRunsCallback): void;

                    /**
                     * Calls ListScanRuns.
                     * @param request ListScanRunsRequest message or plain object
                     * @returns Promise
                     */
                    public listScanRuns(request: google.cloud.websecurityscanner.v1alpha.IListScanRunsRequest): Promise<google.cloud.websecurityscanner.v1alpha.ListScanRunsResponse>;

                    /**
                     * Calls StopScanRun.
                     * @param request StopScanRunRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ScanRun
                     */
                    public stopScanRun(request: google.cloud.websecurityscanner.v1alpha.IStopScanRunRequest, callback: google.cloud.websecurityscanner.v1alpha.WebSecurityScanner.StopScanRunCallback): void;

                    /**
                     * Calls StopScanRun.
                     * @param request StopScanRunRequest message or plain object
                     * @returns Promise
                     */
                    public stopScanRun(request: google.cloud.websecurityscanner.v1alpha.IStopScanRunRequest): Promise<google.cloud.websecurityscanner.v1alpha.ScanRun>;

                    /**
                     * Calls ListCrawledUrls.
                     * @param request ListCrawledUrlsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListCrawledUrlsResponse
                     */
                    public listCrawledUrls(request: google.cloud.websecurityscanner.v1alpha.IListCrawledUrlsRequest, callback: google.cloud.websecurityscanner.v1alpha.WebSecurityScanner.ListCrawledUrlsCallback): void;

                    /**
                     * Calls ListCrawledUrls.
                     * @param request ListCrawledUrlsRequest message or plain object
                     * @returns Promise
                     */
                    public listCrawledUrls(request: google.cloud.websecurityscanner.v1alpha.IListCrawledUrlsRequest): Promise<google.cloud.websecurityscanner.v1alpha.ListCrawledUrlsResponse>;

                    /**
                     * Calls GetFinding.
                     * @param request GetFindingRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Finding
                     */
                    public getFinding(request: google.cloud.websecurityscanner.v1alpha.IGetFindingRequest, callback: google.cloud.websecurityscanner.v1alpha.WebSecurityScanner.GetFindingCallback): void;

                    /**
                     * Calls GetFinding.
                     * @param request GetFindingRequest message or plain object
                     * @returns Promise
                     */
                    public getFinding(request: google.cloud.websecurityscanner.v1alpha.IGetFindingRequest): Promise<google.cloud.websecurityscanner.v1alpha.Finding>;

                    /**
                     * Calls ListFindings.
                     * @param request ListFindingsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListFindingsResponse
                     */
                    public listFindings(request: google.cloud.websecurityscanner.v1alpha.IListFindingsRequest, callback: google.cloud.websecurityscanner.v1alpha.WebSecurityScanner.ListFindingsCallback): void;

                    /**
                     * Calls ListFindings.
                     * @param request ListFindingsRequest message or plain object
                     * @returns Promise
                     */
                    public listFindings(request: google.cloud.websecurityscanner.v1alpha.IListFindingsRequest): Promise<google.cloud.websecurityscanner.v1alpha.ListFindingsResponse>;

                    /**
                     * Calls ListFindingTypeStats.
                     * @param request ListFindingTypeStatsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListFindingTypeStatsResponse
                     */
                    public listFindingTypeStats(request: google.cloud.websecurityscanner.v1alpha.IListFindingTypeStatsRequest, callback: google.cloud.websecurityscanner.v1alpha.WebSecurityScanner.ListFindingTypeStatsCallback): void;

                    /**
                     * Calls ListFindingTypeStats.
                     * @param request ListFindingTypeStatsRequest message or plain object
                     * @returns Promise
                     */
                    public listFindingTypeStats(request: google.cloud.websecurityscanner.v1alpha.IListFindingTypeStatsRequest): Promise<google.cloud.websecurityscanner.v1alpha.ListFindingTypeStatsResponse>;
                }

                namespace WebSecurityScanner {

                    /**
                     * Callback as used by {@link google.cloud.websecurityscanner.v1alpha.WebSecurityScanner|createScanConfig}.
                     * @param error Error, if any
                     * @param [response] ScanConfig
                     */
                    type CreateScanConfigCallback = (error: (Error|null), response?: google.cloud.websecurityscanner.v1alpha.ScanConfig) => void;

                    /**
                     * Callback as used by {@link google.cloud.websecurityscanner.v1alpha.WebSecurityScanner|deleteScanConfig}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteScanConfigCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.websecurityscanner.v1alpha.WebSecurityScanner|getScanConfig}.
                     * @param error Error, if any
                     * @param [response] ScanConfig
                     */
                    type GetScanConfigCallback = (error: (Error|null), response?: google.cloud.websecurityscanner.v1alpha.ScanConfig) => void;

                    /**
                     * Callback as used by {@link google.cloud.websecurityscanner.v1alpha.WebSecurityScanner|listScanConfigs}.
                     * @param error Error, if any
                     * @param [response] ListScanConfigsResponse
                     */
                    type ListScanConfigsCallback = (error: (Error|null), response?: google.cloud.websecurityscanner.v1alpha.ListScanConfigsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.websecurityscanner.v1alpha.WebSecurityScanner|updateScanConfig}.
                     * @param error Error, if any
                     * @param [response] ScanConfig
                     */
                    type UpdateScanConfigCallback = (error: (Error|null), response?: google.cloud.websecurityscanner.v1alpha.ScanConfig) => void;

                    /**
                     * Callback as used by {@link google.cloud.websecurityscanner.v1alpha.WebSecurityScanner|startScanRun}.
                     * @param error Error, if any
                     * @param [response] ScanRun
                     */
                    type StartScanRunCallback = (error: (Error|null), response?: google.cloud.websecurityscanner.v1alpha.ScanRun) => void;

                    /**
                     * Callback as used by {@link google.cloud.websecurityscanner.v1alpha.WebSecurityScanner|getScanRun}.
                     * @param error Error, if any
                     * @param [response] ScanRun
                     */
                    type GetScanRunCallback = (error: (Error|null), response?: google.cloud.websecurityscanner.v1alpha.ScanRun) => void;

                    /**
                     * Callback as used by {@link google.cloud.websecurityscanner.v1alpha.WebSecurityScanner|listScanRuns}.
                     * @param error Error, if any
                     * @param [response] ListScanRunsResponse
                     */
                    type ListScanRunsCallback = (error: (Error|null), response?: google.cloud.websecurityscanner.v1alpha.ListScanRunsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.websecurityscanner.v1alpha.WebSecurityScanner|stopScanRun}.
                     * @param error Error, if any
                     * @param [response] ScanRun
                     */
                    type StopScanRunCallback = (error: (Error|null), response?: google.cloud.websecurityscanner.v1alpha.ScanRun) => void;

                    /**
                     * Callback as used by {@link google.cloud.websecurityscanner.v1alpha.WebSecurityScanner|listCrawledUrls}.
                     * @param error Error, if any
                     * @param [response] ListCrawledUrlsResponse
                     */
                    type ListCrawledUrlsCallback = (error: (Error|null), response?: google.cloud.websecurityscanner.v1alpha.ListCrawledUrlsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.websecurityscanner.v1alpha.WebSecurityScanner|getFinding}.
                     * @param error Error, if any
                     * @param [response] Finding
                     */
                    type GetFindingCallback = (error: (Error|null), response?: google.cloud.websecurityscanner.v1alpha.Finding) => void;

                    /**
                     * Callback as used by {@link google.cloud.websecurityscanner.v1alpha.WebSecurityScanner|listFindings}.
                     * @param error Error, if any
                     * @param [response] ListFindingsResponse
                     */
                    type ListFindingsCallback = (error: (Error|null), response?: google.cloud.websecurityscanner.v1alpha.ListFindingsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.websecurityscanner.v1alpha.WebSecurityScanner|listFindingTypeStats}.
                     * @param error Error, if any
                     * @param [response] ListFindingTypeStatsResponse
                     */
                    type ListFindingTypeStatsCallback = (error: (Error|null), response?: google.cloud.websecurityscanner.v1alpha.ListFindingTypeStatsResponse) => void;
                }

                /** Properties of a CreateScanConfigRequest. */
                interface ICreateScanConfigRequest {

                    /** CreateScanConfigRequest parent */
                    parent?: (string|null);

                    /** CreateScanConfigRequest scanConfig */
                    scanConfig?: (google.cloud.websecurityscanner.v1alpha.IScanConfig|null);
                }

                /** Represents a CreateScanConfigRequest. */
                class CreateScanConfigRequest implements ICreateScanConfigRequest {

                    /**
                     * Constructs a new CreateScanConfigRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1alpha.ICreateScanConfigRequest);

                    /** CreateScanConfigRequest parent. */
                    public parent: string;

                    /** CreateScanConfigRequest scanConfig. */
                    public scanConfig?: (google.cloud.websecurityscanner.v1alpha.IScanConfig|null);

                    /**
                     * Creates a new CreateScanConfigRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateScanConfigRequest instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1alpha.ICreateScanConfigRequest): google.cloud.websecurityscanner.v1alpha.CreateScanConfigRequest;

                    /**
                     * Encodes the specified CreateScanConfigRequest message. Does not implicitly {@link google.cloud.websecurityscanner.v1alpha.CreateScanConfigRequest.verify|verify} messages.
                     * @param message CreateScanConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1alpha.ICreateScanConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateScanConfigRequest message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1alpha.CreateScanConfigRequest.verify|verify} messages.
                     * @param message CreateScanConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1alpha.ICreateScanConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateScanConfigRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateScanConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1alpha.CreateScanConfigRequest;

                    /**
                     * Decodes a CreateScanConfigRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateScanConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1alpha.CreateScanConfigRequest;

                    /**
                     * Verifies a CreateScanConfigRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateScanConfigRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateScanConfigRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1alpha.CreateScanConfigRequest;

                    /**
                     * Creates a plain object from a CreateScanConfigRequest message. Also converts values to other types if specified.
                     * @param message CreateScanConfigRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1alpha.CreateScanConfigRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateScanConfigRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteScanConfigRequest. */
                interface IDeleteScanConfigRequest {

                    /** DeleteScanConfigRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteScanConfigRequest. */
                class DeleteScanConfigRequest implements IDeleteScanConfigRequest {

                    /**
                     * Constructs a new DeleteScanConfigRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1alpha.IDeleteScanConfigRequest);

                    /** DeleteScanConfigRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteScanConfigRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteScanConfigRequest instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1alpha.IDeleteScanConfigRequest): google.cloud.websecurityscanner.v1alpha.DeleteScanConfigRequest;

                    /**
                     * Encodes the specified DeleteScanConfigRequest message. Does not implicitly {@link google.cloud.websecurityscanner.v1alpha.DeleteScanConfigRequest.verify|verify} messages.
                     * @param message DeleteScanConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1alpha.IDeleteScanConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteScanConfigRequest message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1alpha.DeleteScanConfigRequest.verify|verify} messages.
                     * @param message DeleteScanConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1alpha.IDeleteScanConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteScanConfigRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteScanConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1alpha.DeleteScanConfigRequest;

                    /**
                     * Decodes a DeleteScanConfigRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteScanConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1alpha.DeleteScanConfigRequest;

                    /**
                     * Verifies a DeleteScanConfigRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteScanConfigRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteScanConfigRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1alpha.DeleteScanConfigRequest;

                    /**
                     * Creates a plain object from a DeleteScanConfigRequest message. Also converts values to other types if specified.
                     * @param message DeleteScanConfigRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1alpha.DeleteScanConfigRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteScanConfigRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetScanConfigRequest. */
                interface IGetScanConfigRequest {

                    /** GetScanConfigRequest name */
                    name?: (string|null);
                }

                /** Represents a GetScanConfigRequest. */
                class GetScanConfigRequest implements IGetScanConfigRequest {

                    /**
                     * Constructs a new GetScanConfigRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1alpha.IGetScanConfigRequest);

                    /** GetScanConfigRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetScanConfigRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetScanConfigRequest instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1alpha.IGetScanConfigRequest): google.cloud.websecurityscanner.v1alpha.GetScanConfigRequest;

                    /**
                     * Encodes the specified GetScanConfigRequest message. Does not implicitly {@link google.cloud.websecurityscanner.v1alpha.GetScanConfigRequest.verify|verify} messages.
                     * @param message GetScanConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1alpha.IGetScanConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetScanConfigRequest message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1alpha.GetScanConfigRequest.verify|verify} messages.
                     * @param message GetScanConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1alpha.IGetScanConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetScanConfigRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetScanConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1alpha.GetScanConfigRequest;

                    /**
                     * Decodes a GetScanConfigRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetScanConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1alpha.GetScanConfigRequest;

                    /**
                     * Verifies a GetScanConfigRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetScanConfigRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetScanConfigRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1alpha.GetScanConfigRequest;

                    /**
                     * Creates a plain object from a GetScanConfigRequest message. Also converts values to other types if specified.
                     * @param message GetScanConfigRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1alpha.GetScanConfigRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetScanConfigRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListScanConfigsRequest. */
                interface IListScanConfigsRequest {

                    /** ListScanConfigsRequest parent */
                    parent?: (string|null);

                    /** ListScanConfigsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListScanConfigsRequest pageSize */
                    pageSize?: (number|null);
                }

                /** Represents a ListScanConfigsRequest. */
                class ListScanConfigsRequest implements IListScanConfigsRequest {

                    /**
                     * Constructs a new ListScanConfigsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1alpha.IListScanConfigsRequest);

                    /** ListScanConfigsRequest parent. */
                    public parent: string;

                    /** ListScanConfigsRequest pageToken. */
                    public pageToken: string;

                    /** ListScanConfigsRequest pageSize. */
                    public pageSize: number;

                    /**
                     * Creates a new ListScanConfigsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListScanConfigsRequest instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1alpha.IListScanConfigsRequest): google.cloud.websecurityscanner.v1alpha.ListScanConfigsRequest;

                    /**
                     * Encodes the specified ListScanConfigsRequest message. Does not implicitly {@link google.cloud.websecurityscanner.v1alpha.ListScanConfigsRequest.verify|verify} messages.
                     * @param message ListScanConfigsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1alpha.IListScanConfigsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListScanConfigsRequest message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1alpha.ListScanConfigsRequest.verify|verify} messages.
                     * @param message ListScanConfigsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1alpha.IListScanConfigsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListScanConfigsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListScanConfigsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1alpha.ListScanConfigsRequest;

                    /**
                     * Decodes a ListScanConfigsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListScanConfigsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1alpha.ListScanConfigsRequest;

                    /**
                     * Verifies a ListScanConfigsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListScanConfigsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListScanConfigsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1alpha.ListScanConfigsRequest;

                    /**
                     * Creates a plain object from a ListScanConfigsRequest message. Also converts values to other types if specified.
                     * @param message ListScanConfigsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1alpha.ListScanConfigsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListScanConfigsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateScanConfigRequest. */
                interface IUpdateScanConfigRequest {

                    /** UpdateScanConfigRequest scanConfig */
                    scanConfig?: (google.cloud.websecurityscanner.v1alpha.IScanConfig|null);

                    /** UpdateScanConfigRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateScanConfigRequest. */
                class UpdateScanConfigRequest implements IUpdateScanConfigRequest {

                    /**
                     * Constructs a new UpdateScanConfigRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1alpha.IUpdateScanConfigRequest);

                    /** UpdateScanConfigRequest scanConfig. */
                    public scanConfig?: (google.cloud.websecurityscanner.v1alpha.IScanConfig|null);

                    /** UpdateScanConfigRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateScanConfigRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateScanConfigRequest instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1alpha.IUpdateScanConfigRequest): google.cloud.websecurityscanner.v1alpha.UpdateScanConfigRequest;

                    /**
                     * Encodes the specified UpdateScanConfigRequest message. Does not implicitly {@link google.cloud.websecurityscanner.v1alpha.UpdateScanConfigRequest.verify|verify} messages.
                     * @param message UpdateScanConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1alpha.IUpdateScanConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateScanConfigRequest message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1alpha.UpdateScanConfigRequest.verify|verify} messages.
                     * @param message UpdateScanConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1alpha.IUpdateScanConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateScanConfigRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateScanConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1alpha.UpdateScanConfigRequest;

                    /**
                     * Decodes an UpdateScanConfigRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateScanConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1alpha.UpdateScanConfigRequest;

                    /**
                     * Verifies an UpdateScanConfigRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateScanConfigRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateScanConfigRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1alpha.UpdateScanConfigRequest;

                    /**
                     * Creates a plain object from an UpdateScanConfigRequest message. Also converts values to other types if specified.
                     * @param message UpdateScanConfigRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1alpha.UpdateScanConfigRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateScanConfigRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListScanConfigsResponse. */
                interface IListScanConfigsResponse {

                    /** ListScanConfigsResponse scanConfigs */
                    scanConfigs?: (google.cloud.websecurityscanner.v1alpha.IScanConfig[]|null);

                    /** ListScanConfigsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListScanConfigsResponse. */
                class ListScanConfigsResponse implements IListScanConfigsResponse {

                    /**
                     * Constructs a new ListScanConfigsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1alpha.IListScanConfigsResponse);

                    /** ListScanConfigsResponse scanConfigs. */
                    public scanConfigs: google.cloud.websecurityscanner.v1alpha.IScanConfig[];

                    /** ListScanConfigsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListScanConfigsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListScanConfigsResponse instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1alpha.IListScanConfigsResponse): google.cloud.websecurityscanner.v1alpha.ListScanConfigsResponse;

                    /**
                     * Encodes the specified ListScanConfigsResponse message. Does not implicitly {@link google.cloud.websecurityscanner.v1alpha.ListScanConfigsResponse.verify|verify} messages.
                     * @param message ListScanConfigsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1alpha.IListScanConfigsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListScanConfigsResponse message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1alpha.ListScanConfigsResponse.verify|verify} messages.
                     * @param message ListScanConfigsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1alpha.IListScanConfigsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListScanConfigsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListScanConfigsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1alpha.ListScanConfigsResponse;

                    /**
                     * Decodes a ListScanConfigsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListScanConfigsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1alpha.ListScanConfigsResponse;

                    /**
                     * Verifies a ListScanConfigsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListScanConfigsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListScanConfigsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1alpha.ListScanConfigsResponse;

                    /**
                     * Creates a plain object from a ListScanConfigsResponse message. Also converts values to other types if specified.
                     * @param message ListScanConfigsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1alpha.ListScanConfigsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListScanConfigsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a StartScanRunRequest. */
                interface IStartScanRunRequest {

                    /** StartScanRunRequest name */
                    name?: (string|null);
                }

                /** Represents a StartScanRunRequest. */
                class StartScanRunRequest implements IStartScanRunRequest {

                    /**
                     * Constructs a new StartScanRunRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1alpha.IStartScanRunRequest);

                    /** StartScanRunRequest name. */
                    public name: string;

                    /**
                     * Creates a new StartScanRunRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StartScanRunRequest instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1alpha.IStartScanRunRequest): google.cloud.websecurityscanner.v1alpha.StartScanRunRequest;

                    /**
                     * Encodes the specified StartScanRunRequest message. Does not implicitly {@link google.cloud.websecurityscanner.v1alpha.StartScanRunRequest.verify|verify} messages.
                     * @param message StartScanRunRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1alpha.IStartScanRunRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StartScanRunRequest message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1alpha.StartScanRunRequest.verify|verify} messages.
                     * @param message StartScanRunRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1alpha.IStartScanRunRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StartScanRunRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StartScanRunRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1alpha.StartScanRunRequest;

                    /**
                     * Decodes a StartScanRunRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StartScanRunRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1alpha.StartScanRunRequest;

                    /**
                     * Verifies a StartScanRunRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StartScanRunRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StartScanRunRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1alpha.StartScanRunRequest;

                    /**
                     * Creates a plain object from a StartScanRunRequest message. Also converts values to other types if specified.
                     * @param message StartScanRunRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1alpha.StartScanRunRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StartScanRunRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetScanRunRequest. */
                interface IGetScanRunRequest {

                    /** GetScanRunRequest name */
                    name?: (string|null);
                }

                /** Represents a GetScanRunRequest. */
                class GetScanRunRequest implements IGetScanRunRequest {

                    /**
                     * Constructs a new GetScanRunRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1alpha.IGetScanRunRequest);

                    /** GetScanRunRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetScanRunRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetScanRunRequest instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1alpha.IGetScanRunRequest): google.cloud.websecurityscanner.v1alpha.GetScanRunRequest;

                    /**
                     * Encodes the specified GetScanRunRequest message. Does not implicitly {@link google.cloud.websecurityscanner.v1alpha.GetScanRunRequest.verify|verify} messages.
                     * @param message GetScanRunRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1alpha.IGetScanRunRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetScanRunRequest message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1alpha.GetScanRunRequest.verify|verify} messages.
                     * @param message GetScanRunRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1alpha.IGetScanRunRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetScanRunRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetScanRunRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1alpha.GetScanRunRequest;

                    /**
                     * Decodes a GetScanRunRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetScanRunRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1alpha.GetScanRunRequest;

                    /**
                     * Verifies a GetScanRunRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetScanRunRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetScanRunRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1alpha.GetScanRunRequest;

                    /**
                     * Creates a plain object from a GetScanRunRequest message. Also converts values to other types if specified.
                     * @param message GetScanRunRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1alpha.GetScanRunRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetScanRunRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListScanRunsRequest. */
                interface IListScanRunsRequest {

                    /** ListScanRunsRequest parent */
                    parent?: (string|null);

                    /** ListScanRunsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListScanRunsRequest pageSize */
                    pageSize?: (number|null);
                }

                /** Represents a ListScanRunsRequest. */
                class ListScanRunsRequest implements IListScanRunsRequest {

                    /**
                     * Constructs a new ListScanRunsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1alpha.IListScanRunsRequest);

                    /** ListScanRunsRequest parent. */
                    public parent: string;

                    /** ListScanRunsRequest pageToken. */
                    public pageToken: string;

                    /** ListScanRunsRequest pageSize. */
                    public pageSize: number;

                    /**
                     * Creates a new ListScanRunsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListScanRunsRequest instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1alpha.IListScanRunsRequest): google.cloud.websecurityscanner.v1alpha.ListScanRunsRequest;

                    /**
                     * Encodes the specified ListScanRunsRequest message. Does not implicitly {@link google.cloud.websecurityscanner.v1alpha.ListScanRunsRequest.verify|verify} messages.
                     * @param message ListScanRunsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1alpha.IListScanRunsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListScanRunsRequest message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1alpha.ListScanRunsRequest.verify|verify} messages.
                     * @param message ListScanRunsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1alpha.IListScanRunsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListScanRunsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListScanRunsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1alpha.ListScanRunsRequest;

                    /**
                     * Decodes a ListScanRunsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListScanRunsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1alpha.ListScanRunsRequest;

                    /**
                     * Verifies a ListScanRunsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListScanRunsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListScanRunsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1alpha.ListScanRunsRequest;

                    /**
                     * Creates a plain object from a ListScanRunsRequest message. Also converts values to other types if specified.
                     * @param message ListScanRunsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1alpha.ListScanRunsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListScanRunsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListScanRunsResponse. */
                interface IListScanRunsResponse {

                    /** ListScanRunsResponse scanRuns */
                    scanRuns?: (google.cloud.websecurityscanner.v1alpha.IScanRun[]|null);

                    /** ListScanRunsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListScanRunsResponse. */
                class ListScanRunsResponse implements IListScanRunsResponse {

                    /**
                     * Constructs a new ListScanRunsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1alpha.IListScanRunsResponse);

                    /** ListScanRunsResponse scanRuns. */
                    public scanRuns: google.cloud.websecurityscanner.v1alpha.IScanRun[];

                    /** ListScanRunsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListScanRunsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListScanRunsResponse instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1alpha.IListScanRunsResponse): google.cloud.websecurityscanner.v1alpha.ListScanRunsResponse;

                    /**
                     * Encodes the specified ListScanRunsResponse message. Does not implicitly {@link google.cloud.websecurityscanner.v1alpha.ListScanRunsResponse.verify|verify} messages.
                     * @param message ListScanRunsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1alpha.IListScanRunsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListScanRunsResponse message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1alpha.ListScanRunsResponse.verify|verify} messages.
                     * @param message ListScanRunsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1alpha.IListScanRunsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListScanRunsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListScanRunsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1alpha.ListScanRunsResponse;

                    /**
                     * Decodes a ListScanRunsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListScanRunsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1alpha.ListScanRunsResponse;

                    /**
                     * Verifies a ListScanRunsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListScanRunsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListScanRunsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1alpha.ListScanRunsResponse;

                    /**
                     * Creates a plain object from a ListScanRunsResponse message. Also converts values to other types if specified.
                     * @param message ListScanRunsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1alpha.ListScanRunsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListScanRunsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a StopScanRunRequest. */
                interface IStopScanRunRequest {

                    /** StopScanRunRequest name */
                    name?: (string|null);
                }

                /** Represents a StopScanRunRequest. */
                class StopScanRunRequest implements IStopScanRunRequest {

                    /**
                     * Constructs a new StopScanRunRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1alpha.IStopScanRunRequest);

                    /** StopScanRunRequest name. */
                    public name: string;

                    /**
                     * Creates a new StopScanRunRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StopScanRunRequest instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1alpha.IStopScanRunRequest): google.cloud.websecurityscanner.v1alpha.StopScanRunRequest;

                    /**
                     * Encodes the specified StopScanRunRequest message. Does not implicitly {@link google.cloud.websecurityscanner.v1alpha.StopScanRunRequest.verify|verify} messages.
                     * @param message StopScanRunRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1alpha.IStopScanRunRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StopScanRunRequest message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1alpha.StopScanRunRequest.verify|verify} messages.
                     * @param message StopScanRunRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1alpha.IStopScanRunRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StopScanRunRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StopScanRunRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1alpha.StopScanRunRequest;

                    /**
                     * Decodes a StopScanRunRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StopScanRunRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1alpha.StopScanRunRequest;

                    /**
                     * Verifies a StopScanRunRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StopScanRunRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StopScanRunRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1alpha.StopScanRunRequest;

                    /**
                     * Creates a plain object from a StopScanRunRequest message. Also converts values to other types if specified.
                     * @param message StopScanRunRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1alpha.StopScanRunRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StopScanRunRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListCrawledUrlsRequest. */
                interface IListCrawledUrlsRequest {

                    /** ListCrawledUrlsRequest parent */
                    parent?: (string|null);

                    /** ListCrawledUrlsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListCrawledUrlsRequest pageSize */
                    pageSize?: (number|null);
                }

                /** Represents a ListCrawledUrlsRequest. */
                class ListCrawledUrlsRequest implements IListCrawledUrlsRequest {

                    /**
                     * Constructs a new ListCrawledUrlsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1alpha.IListCrawledUrlsRequest);

                    /** ListCrawledUrlsRequest parent. */
                    public parent: string;

                    /** ListCrawledUrlsRequest pageToken. */
                    public pageToken: string;

                    /** ListCrawledUrlsRequest pageSize. */
                    public pageSize: number;

                    /**
                     * Creates a new ListCrawledUrlsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListCrawledUrlsRequest instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1alpha.IListCrawledUrlsRequest): google.cloud.websecurityscanner.v1alpha.ListCrawledUrlsRequest;

                    /**
                     * Encodes the specified ListCrawledUrlsRequest message. Does not implicitly {@link google.cloud.websecurityscanner.v1alpha.ListCrawledUrlsRequest.verify|verify} messages.
                     * @param message ListCrawledUrlsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1alpha.IListCrawledUrlsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListCrawledUrlsRequest message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1alpha.ListCrawledUrlsRequest.verify|verify} messages.
                     * @param message ListCrawledUrlsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1alpha.IListCrawledUrlsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListCrawledUrlsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListCrawledUrlsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1alpha.ListCrawledUrlsRequest;

                    /**
                     * Decodes a ListCrawledUrlsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListCrawledUrlsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1alpha.ListCrawledUrlsRequest;

                    /**
                     * Verifies a ListCrawledUrlsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListCrawledUrlsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListCrawledUrlsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1alpha.ListCrawledUrlsRequest;

                    /**
                     * Creates a plain object from a ListCrawledUrlsRequest message. Also converts values to other types if specified.
                     * @param message ListCrawledUrlsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1alpha.ListCrawledUrlsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListCrawledUrlsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListCrawledUrlsResponse. */
                interface IListCrawledUrlsResponse {

                    /** ListCrawledUrlsResponse crawledUrls */
                    crawledUrls?: (google.cloud.websecurityscanner.v1alpha.ICrawledUrl[]|null);

                    /** ListCrawledUrlsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListCrawledUrlsResponse. */
                class ListCrawledUrlsResponse implements IListCrawledUrlsResponse {

                    /**
                     * Constructs a new ListCrawledUrlsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1alpha.IListCrawledUrlsResponse);

                    /** ListCrawledUrlsResponse crawledUrls. */
                    public crawledUrls: google.cloud.websecurityscanner.v1alpha.ICrawledUrl[];

                    /** ListCrawledUrlsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListCrawledUrlsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListCrawledUrlsResponse instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1alpha.IListCrawledUrlsResponse): google.cloud.websecurityscanner.v1alpha.ListCrawledUrlsResponse;

                    /**
                     * Encodes the specified ListCrawledUrlsResponse message. Does not implicitly {@link google.cloud.websecurityscanner.v1alpha.ListCrawledUrlsResponse.verify|verify} messages.
                     * @param message ListCrawledUrlsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1alpha.IListCrawledUrlsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListCrawledUrlsResponse message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1alpha.ListCrawledUrlsResponse.verify|verify} messages.
                     * @param message ListCrawledUrlsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1alpha.IListCrawledUrlsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListCrawledUrlsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListCrawledUrlsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1alpha.ListCrawledUrlsResponse;

                    /**
                     * Decodes a ListCrawledUrlsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListCrawledUrlsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1alpha.ListCrawledUrlsResponse;

                    /**
                     * Verifies a ListCrawledUrlsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListCrawledUrlsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListCrawledUrlsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1alpha.ListCrawledUrlsResponse;

                    /**
                     * Creates a plain object from a ListCrawledUrlsResponse message. Also converts values to other types if specified.
                     * @param message ListCrawledUrlsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1alpha.ListCrawledUrlsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListCrawledUrlsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetFindingRequest. */
                interface IGetFindingRequest {

                    /** GetFindingRequest name */
                    name?: (string|null);
                }

                /** Represents a GetFindingRequest. */
                class GetFindingRequest implements IGetFindingRequest {

                    /**
                     * Constructs a new GetFindingRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1alpha.IGetFindingRequest);

                    /** GetFindingRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetFindingRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetFindingRequest instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1alpha.IGetFindingRequest): google.cloud.websecurityscanner.v1alpha.GetFindingRequest;

                    /**
                     * Encodes the specified GetFindingRequest message. Does not implicitly {@link google.cloud.websecurityscanner.v1alpha.GetFindingRequest.verify|verify} messages.
                     * @param message GetFindingRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1alpha.IGetFindingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetFindingRequest message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1alpha.GetFindingRequest.verify|verify} messages.
                     * @param message GetFindingRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1alpha.IGetFindingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetFindingRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetFindingRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1alpha.GetFindingRequest;

                    /**
                     * Decodes a GetFindingRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetFindingRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1alpha.GetFindingRequest;

                    /**
                     * Verifies a GetFindingRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetFindingRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetFindingRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1alpha.GetFindingRequest;

                    /**
                     * Creates a plain object from a GetFindingRequest message. Also converts values to other types if specified.
                     * @param message GetFindingRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1alpha.GetFindingRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetFindingRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListFindingsRequest. */
                interface IListFindingsRequest {

                    /** ListFindingsRequest parent */
                    parent?: (string|null);

                    /** ListFindingsRequest filter */
                    filter?: (string|null);

                    /** ListFindingsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListFindingsRequest pageSize */
                    pageSize?: (number|null);
                }

                /** Represents a ListFindingsRequest. */
                class ListFindingsRequest implements IListFindingsRequest {

                    /**
                     * Constructs a new ListFindingsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1alpha.IListFindingsRequest);

                    /** ListFindingsRequest parent. */
                    public parent: string;

                    /** ListFindingsRequest filter. */
                    public filter: string;

                    /** ListFindingsRequest pageToken. */
                    public pageToken: string;

                    /** ListFindingsRequest pageSize. */
                    public pageSize: number;

                    /**
                     * Creates a new ListFindingsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListFindingsRequest instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1alpha.IListFindingsRequest): google.cloud.websecurityscanner.v1alpha.ListFindingsRequest;

                    /**
                     * Encodes the specified ListFindingsRequest message. Does not implicitly {@link google.cloud.websecurityscanner.v1alpha.ListFindingsRequest.verify|verify} messages.
                     * @param message ListFindingsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1alpha.IListFindingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListFindingsRequest message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1alpha.ListFindingsRequest.verify|verify} messages.
                     * @param message ListFindingsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1alpha.IListFindingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListFindingsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListFindingsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1alpha.ListFindingsRequest;

                    /**
                     * Decodes a ListFindingsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListFindingsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1alpha.ListFindingsRequest;

                    /**
                     * Verifies a ListFindingsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListFindingsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListFindingsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1alpha.ListFindingsRequest;

                    /**
                     * Creates a plain object from a ListFindingsRequest message. Also converts values to other types if specified.
                     * @param message ListFindingsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1alpha.ListFindingsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListFindingsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListFindingsResponse. */
                interface IListFindingsResponse {

                    /** ListFindingsResponse findings */
                    findings?: (google.cloud.websecurityscanner.v1alpha.IFinding[]|null);

                    /** ListFindingsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListFindingsResponse. */
                class ListFindingsResponse implements IListFindingsResponse {

                    /**
                     * Constructs a new ListFindingsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1alpha.IListFindingsResponse);

                    /** ListFindingsResponse findings. */
                    public findings: google.cloud.websecurityscanner.v1alpha.IFinding[];

                    /** ListFindingsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListFindingsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListFindingsResponse instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1alpha.IListFindingsResponse): google.cloud.websecurityscanner.v1alpha.ListFindingsResponse;

                    /**
                     * Encodes the specified ListFindingsResponse message. Does not implicitly {@link google.cloud.websecurityscanner.v1alpha.ListFindingsResponse.verify|verify} messages.
                     * @param message ListFindingsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1alpha.IListFindingsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListFindingsResponse message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1alpha.ListFindingsResponse.verify|verify} messages.
                     * @param message ListFindingsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1alpha.IListFindingsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListFindingsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListFindingsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1alpha.ListFindingsResponse;

                    /**
                     * Decodes a ListFindingsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListFindingsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1alpha.ListFindingsResponse;

                    /**
                     * Verifies a ListFindingsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListFindingsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListFindingsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1alpha.ListFindingsResponse;

                    /**
                     * Creates a plain object from a ListFindingsResponse message. Also converts values to other types if specified.
                     * @param message ListFindingsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1alpha.ListFindingsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListFindingsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListFindingTypeStatsRequest. */
                interface IListFindingTypeStatsRequest {

                    /** ListFindingTypeStatsRequest parent */
                    parent?: (string|null);
                }

                /** Represents a ListFindingTypeStatsRequest. */
                class ListFindingTypeStatsRequest implements IListFindingTypeStatsRequest {

                    /**
                     * Constructs a new ListFindingTypeStatsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1alpha.IListFindingTypeStatsRequest);

                    /** ListFindingTypeStatsRequest parent. */
                    public parent: string;

                    /**
                     * Creates a new ListFindingTypeStatsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListFindingTypeStatsRequest instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1alpha.IListFindingTypeStatsRequest): google.cloud.websecurityscanner.v1alpha.ListFindingTypeStatsRequest;

                    /**
                     * Encodes the specified ListFindingTypeStatsRequest message. Does not implicitly {@link google.cloud.websecurityscanner.v1alpha.ListFindingTypeStatsRequest.verify|verify} messages.
                     * @param message ListFindingTypeStatsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1alpha.IListFindingTypeStatsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListFindingTypeStatsRequest message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1alpha.ListFindingTypeStatsRequest.verify|verify} messages.
                     * @param message ListFindingTypeStatsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1alpha.IListFindingTypeStatsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListFindingTypeStatsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListFindingTypeStatsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1alpha.ListFindingTypeStatsRequest;

                    /**
                     * Decodes a ListFindingTypeStatsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListFindingTypeStatsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1alpha.ListFindingTypeStatsRequest;

                    /**
                     * Verifies a ListFindingTypeStatsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListFindingTypeStatsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListFindingTypeStatsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1alpha.ListFindingTypeStatsRequest;

                    /**
                     * Creates a plain object from a ListFindingTypeStatsRequest message. Also converts values to other types if specified.
                     * @param message ListFindingTypeStatsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1alpha.ListFindingTypeStatsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListFindingTypeStatsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListFindingTypeStatsResponse. */
                interface IListFindingTypeStatsResponse {

                    /** ListFindingTypeStatsResponse findingTypeStats */
                    findingTypeStats?: (google.cloud.websecurityscanner.v1alpha.IFindingTypeStats[]|null);
                }

                /** Represents a ListFindingTypeStatsResponse. */
                class ListFindingTypeStatsResponse implements IListFindingTypeStatsResponse {

                    /**
                     * Constructs a new ListFindingTypeStatsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1alpha.IListFindingTypeStatsResponse);

                    /** ListFindingTypeStatsResponse findingTypeStats. */
                    public findingTypeStats: google.cloud.websecurityscanner.v1alpha.IFindingTypeStats[];

                    /**
                     * Creates a new ListFindingTypeStatsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListFindingTypeStatsResponse instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1alpha.IListFindingTypeStatsResponse): google.cloud.websecurityscanner.v1alpha.ListFindingTypeStatsResponse;

                    /**
                     * Encodes the specified ListFindingTypeStatsResponse message. Does not implicitly {@link google.cloud.websecurityscanner.v1alpha.ListFindingTypeStatsResponse.verify|verify} messages.
                     * @param message ListFindingTypeStatsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1alpha.IListFindingTypeStatsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListFindingTypeStatsResponse message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1alpha.ListFindingTypeStatsResponse.verify|verify} messages.
                     * @param message ListFindingTypeStatsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1alpha.IListFindingTypeStatsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListFindingTypeStatsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListFindingTypeStatsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1alpha.ListFindingTypeStatsResponse;

                    /**
                     * Decodes a ListFindingTypeStatsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListFindingTypeStatsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1alpha.ListFindingTypeStatsResponse;

                    /**
                     * Verifies a ListFindingTypeStatsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListFindingTypeStatsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListFindingTypeStatsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1alpha.ListFindingTypeStatsResponse;

                    /**
                     * Creates a plain object from a ListFindingTypeStatsResponse message. Also converts values to other types if specified.
                     * @param message ListFindingTypeStatsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1alpha.ListFindingTypeStatsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListFindingTypeStatsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Namespace v1beta. */
            namespace v1beta {

                /** Properties of a CrawledUrl. */
                interface ICrawledUrl {

                    /** CrawledUrl httpMethod */
                    httpMethod?: (string|null);

                    /** CrawledUrl url */
                    url?: (string|null);

                    /** CrawledUrl body */
                    body?: (string|null);
                }

                /** Represents a CrawledUrl. */
                class CrawledUrl implements ICrawledUrl {

                    /**
                     * Constructs a new CrawledUrl.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1beta.ICrawledUrl);

                    /** CrawledUrl httpMethod. */
                    public httpMethod: string;

                    /** CrawledUrl url. */
                    public url: string;

                    /** CrawledUrl body. */
                    public body: string;

                    /**
                     * Creates a new CrawledUrl instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CrawledUrl instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1beta.ICrawledUrl): google.cloud.websecurityscanner.v1beta.CrawledUrl;

                    /**
                     * Encodes the specified CrawledUrl message. Does not implicitly {@link google.cloud.websecurityscanner.v1beta.CrawledUrl.verify|verify} messages.
                     * @param message CrawledUrl message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1beta.ICrawledUrl, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CrawledUrl message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1beta.CrawledUrl.verify|verify} messages.
                     * @param message CrawledUrl message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1beta.ICrawledUrl, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CrawledUrl message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CrawledUrl
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1beta.CrawledUrl;

                    /**
                     * Decodes a CrawledUrl message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CrawledUrl
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1beta.CrawledUrl;

                    /**
                     * Verifies a CrawledUrl message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CrawledUrl message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CrawledUrl
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1beta.CrawledUrl;

                    /**
                     * Creates a plain object from a CrawledUrl message. Also converts values to other types if specified.
                     * @param message CrawledUrl
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1beta.CrawledUrl, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CrawledUrl to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Finding. */
                interface IFinding {

                    /** Finding name */
                    name?: (string|null);

                    /** Finding findingType */
                    findingType?: (string|null);

                    /** Finding httpMethod */
                    httpMethod?: (string|null);

                    /** Finding fuzzedUrl */
                    fuzzedUrl?: (string|null);

                    /** Finding body */
                    body?: (string|null);

                    /** Finding description */
                    description?: (string|null);

                    /** Finding reproductionUrl */
                    reproductionUrl?: (string|null);

                    /** Finding frameUrl */
                    frameUrl?: (string|null);

                    /** Finding finalUrl */
                    finalUrl?: (string|null);

                    /** Finding trackingId */
                    trackingId?: (string|null);

                    /** Finding form */
                    form?: (google.cloud.websecurityscanner.v1beta.IForm|null);

                    /** Finding outdatedLibrary */
                    outdatedLibrary?: (google.cloud.websecurityscanner.v1beta.IOutdatedLibrary|null);

                    /** Finding violatingResource */
                    violatingResource?: (google.cloud.websecurityscanner.v1beta.IViolatingResource|null);

                    /** Finding vulnerableHeaders */
                    vulnerableHeaders?: (google.cloud.websecurityscanner.v1beta.IVulnerableHeaders|null);

                    /** Finding vulnerableParameters */
                    vulnerableParameters?: (google.cloud.websecurityscanner.v1beta.IVulnerableParameters|null);

                    /** Finding xss */
                    xss?: (google.cloud.websecurityscanner.v1beta.IXss|null);
                }

                /** Represents a Finding. */
                class Finding implements IFinding {

                    /**
                     * Constructs a new Finding.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1beta.IFinding);

                    /** Finding name. */
                    public name: string;

                    /** Finding findingType. */
                    public findingType: string;

                    /** Finding httpMethod. */
                    public httpMethod: string;

                    /** Finding fuzzedUrl. */
                    public fuzzedUrl: string;

                    /** Finding body. */
                    public body: string;

                    /** Finding description. */
                    public description: string;

                    /** Finding reproductionUrl. */
                    public reproductionUrl: string;

                    /** Finding frameUrl. */
                    public frameUrl: string;

                    /** Finding finalUrl. */
                    public finalUrl: string;

                    /** Finding trackingId. */
                    public trackingId: string;

                    /** Finding form. */
                    public form?: (google.cloud.websecurityscanner.v1beta.IForm|null);

                    /** Finding outdatedLibrary. */
                    public outdatedLibrary?: (google.cloud.websecurityscanner.v1beta.IOutdatedLibrary|null);

                    /** Finding violatingResource. */
                    public violatingResource?: (google.cloud.websecurityscanner.v1beta.IViolatingResource|null);

                    /** Finding vulnerableHeaders. */
                    public vulnerableHeaders?: (google.cloud.websecurityscanner.v1beta.IVulnerableHeaders|null);

                    /** Finding vulnerableParameters. */
                    public vulnerableParameters?: (google.cloud.websecurityscanner.v1beta.IVulnerableParameters|null);

                    /** Finding xss. */
                    public xss?: (google.cloud.websecurityscanner.v1beta.IXss|null);

                    /**
                     * Creates a new Finding instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Finding instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1beta.IFinding): google.cloud.websecurityscanner.v1beta.Finding;

                    /**
                     * Encodes the specified Finding message. Does not implicitly {@link google.cloud.websecurityscanner.v1beta.Finding.verify|verify} messages.
                     * @param message Finding message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1beta.IFinding, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Finding message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1beta.Finding.verify|verify} messages.
                     * @param message Finding message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1beta.IFinding, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Finding message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Finding
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1beta.Finding;

                    /**
                     * Decodes a Finding message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Finding
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1beta.Finding;

                    /**
                     * Verifies a Finding message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Finding message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Finding
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1beta.Finding;

                    /**
                     * Creates a plain object from a Finding message. Also converts values to other types if specified.
                     * @param message Finding
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1beta.Finding, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Finding to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Form. */
                interface IForm {

                    /** Form actionUri */
                    actionUri?: (string|null);

                    /** Form fields */
                    fields?: (string[]|null);
                }

                /** Represents a Form. */
                class Form implements IForm {

                    /**
                     * Constructs a new Form.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1beta.IForm);

                    /** Form actionUri. */
                    public actionUri: string;

                    /** Form fields. */
                    public fields: string[];

                    /**
                     * Creates a new Form instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Form instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1beta.IForm): google.cloud.websecurityscanner.v1beta.Form;

                    /**
                     * Encodes the specified Form message. Does not implicitly {@link google.cloud.websecurityscanner.v1beta.Form.verify|verify} messages.
                     * @param message Form message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1beta.IForm, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Form message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1beta.Form.verify|verify} messages.
                     * @param message Form message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1beta.IForm, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Form message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Form
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1beta.Form;

                    /**
                     * Decodes a Form message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Form
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1beta.Form;

                    /**
                     * Verifies a Form message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Form message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Form
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1beta.Form;

                    /**
                     * Creates a plain object from a Form message. Also converts values to other types if specified.
                     * @param message Form
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1beta.Form, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Form to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an OutdatedLibrary. */
                interface IOutdatedLibrary {

                    /** OutdatedLibrary libraryName */
                    libraryName?: (string|null);

                    /** OutdatedLibrary version */
                    version?: (string|null);

                    /** OutdatedLibrary learnMoreUrls */
                    learnMoreUrls?: (string[]|null);
                }

                /** Represents an OutdatedLibrary. */
                class OutdatedLibrary implements IOutdatedLibrary {

                    /**
                     * Constructs a new OutdatedLibrary.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1beta.IOutdatedLibrary);

                    /** OutdatedLibrary libraryName. */
                    public libraryName: string;

                    /** OutdatedLibrary version. */
                    public version: string;

                    /** OutdatedLibrary learnMoreUrls. */
                    public learnMoreUrls: string[];

                    /**
                     * Creates a new OutdatedLibrary instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OutdatedLibrary instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1beta.IOutdatedLibrary): google.cloud.websecurityscanner.v1beta.OutdatedLibrary;

                    /**
                     * Encodes the specified OutdatedLibrary message. Does not implicitly {@link google.cloud.websecurityscanner.v1beta.OutdatedLibrary.verify|verify} messages.
                     * @param message OutdatedLibrary message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1beta.IOutdatedLibrary, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OutdatedLibrary message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1beta.OutdatedLibrary.verify|verify} messages.
                     * @param message OutdatedLibrary message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1beta.IOutdatedLibrary, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OutdatedLibrary message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OutdatedLibrary
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1beta.OutdatedLibrary;

                    /**
                     * Decodes an OutdatedLibrary message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OutdatedLibrary
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1beta.OutdatedLibrary;

                    /**
                     * Verifies an OutdatedLibrary message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an OutdatedLibrary message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns OutdatedLibrary
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1beta.OutdatedLibrary;

                    /**
                     * Creates a plain object from an OutdatedLibrary message. Also converts values to other types if specified.
                     * @param message OutdatedLibrary
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1beta.OutdatedLibrary, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OutdatedLibrary to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ViolatingResource. */
                interface IViolatingResource {

                    /** ViolatingResource contentType */
                    contentType?: (string|null);

                    /** ViolatingResource resourceUrl */
                    resourceUrl?: (string|null);
                }

                /** Represents a ViolatingResource. */
                class ViolatingResource implements IViolatingResource {

                    /**
                     * Constructs a new ViolatingResource.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1beta.IViolatingResource);

                    /** ViolatingResource contentType. */
                    public contentType: string;

                    /** ViolatingResource resourceUrl. */
                    public resourceUrl: string;

                    /**
                     * Creates a new ViolatingResource instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ViolatingResource instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1beta.IViolatingResource): google.cloud.websecurityscanner.v1beta.ViolatingResource;

                    /**
                     * Encodes the specified ViolatingResource message. Does not implicitly {@link google.cloud.websecurityscanner.v1beta.ViolatingResource.verify|verify} messages.
                     * @param message ViolatingResource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1beta.IViolatingResource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ViolatingResource message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1beta.ViolatingResource.verify|verify} messages.
                     * @param message ViolatingResource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1beta.IViolatingResource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ViolatingResource message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ViolatingResource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1beta.ViolatingResource;

                    /**
                     * Decodes a ViolatingResource message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ViolatingResource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1beta.ViolatingResource;

                    /**
                     * Verifies a ViolatingResource message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ViolatingResource message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ViolatingResource
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1beta.ViolatingResource;

                    /**
                     * Creates a plain object from a ViolatingResource message. Also converts values to other types if specified.
                     * @param message ViolatingResource
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1beta.ViolatingResource, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ViolatingResource to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a VulnerableParameters. */
                interface IVulnerableParameters {

                    /** VulnerableParameters parameterNames */
                    parameterNames?: (string[]|null);
                }

                /** Represents a VulnerableParameters. */
                class VulnerableParameters implements IVulnerableParameters {

                    /**
                     * Constructs a new VulnerableParameters.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1beta.IVulnerableParameters);

                    /** VulnerableParameters parameterNames. */
                    public parameterNames: string[];

                    /**
                     * Creates a new VulnerableParameters instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns VulnerableParameters instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1beta.IVulnerableParameters): google.cloud.websecurityscanner.v1beta.VulnerableParameters;

                    /**
                     * Encodes the specified VulnerableParameters message. Does not implicitly {@link google.cloud.websecurityscanner.v1beta.VulnerableParameters.verify|verify} messages.
                     * @param message VulnerableParameters message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1beta.IVulnerableParameters, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified VulnerableParameters message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1beta.VulnerableParameters.verify|verify} messages.
                     * @param message VulnerableParameters message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1beta.IVulnerableParameters, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a VulnerableParameters message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns VulnerableParameters
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1beta.VulnerableParameters;

                    /**
                     * Decodes a VulnerableParameters message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns VulnerableParameters
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1beta.VulnerableParameters;

                    /**
                     * Verifies a VulnerableParameters message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a VulnerableParameters message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns VulnerableParameters
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1beta.VulnerableParameters;

                    /**
                     * Creates a plain object from a VulnerableParameters message. Also converts values to other types if specified.
                     * @param message VulnerableParameters
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1beta.VulnerableParameters, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this VulnerableParameters to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a VulnerableHeaders. */
                interface IVulnerableHeaders {

                    /** VulnerableHeaders headers */
                    headers?: (google.cloud.websecurityscanner.v1beta.VulnerableHeaders.IHeader[]|null);

                    /** VulnerableHeaders missingHeaders */
                    missingHeaders?: (google.cloud.websecurityscanner.v1beta.VulnerableHeaders.IHeader[]|null);
                }

                /** Represents a VulnerableHeaders. */
                class VulnerableHeaders implements IVulnerableHeaders {

                    /**
                     * Constructs a new VulnerableHeaders.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1beta.IVulnerableHeaders);

                    /** VulnerableHeaders headers. */
                    public headers: google.cloud.websecurityscanner.v1beta.VulnerableHeaders.IHeader[];

                    /** VulnerableHeaders missingHeaders. */
                    public missingHeaders: google.cloud.websecurityscanner.v1beta.VulnerableHeaders.IHeader[];

                    /**
                     * Creates a new VulnerableHeaders instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns VulnerableHeaders instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1beta.IVulnerableHeaders): google.cloud.websecurityscanner.v1beta.VulnerableHeaders;

                    /**
                     * Encodes the specified VulnerableHeaders message. Does not implicitly {@link google.cloud.websecurityscanner.v1beta.VulnerableHeaders.verify|verify} messages.
                     * @param message VulnerableHeaders message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1beta.IVulnerableHeaders, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified VulnerableHeaders message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1beta.VulnerableHeaders.verify|verify} messages.
                     * @param message VulnerableHeaders message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1beta.IVulnerableHeaders, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a VulnerableHeaders message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns VulnerableHeaders
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1beta.VulnerableHeaders;

                    /**
                     * Decodes a VulnerableHeaders message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns VulnerableHeaders
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1beta.VulnerableHeaders;

                    /**
                     * Verifies a VulnerableHeaders message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a VulnerableHeaders message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns VulnerableHeaders
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1beta.VulnerableHeaders;

                    /**
                     * Creates a plain object from a VulnerableHeaders message. Also converts values to other types if specified.
                     * @param message VulnerableHeaders
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1beta.VulnerableHeaders, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this VulnerableHeaders to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace VulnerableHeaders {

                    /** Properties of a Header. */
                    interface IHeader {

                        /** Header name */
                        name?: (string|null);

                        /** Header value */
                        value?: (string|null);
                    }

                    /** Represents a Header. */
                    class Header implements IHeader {

                        /**
                         * Constructs a new Header.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.websecurityscanner.v1beta.VulnerableHeaders.IHeader);

                        /** Header name. */
                        public name: string;

                        /** Header value. */
                        public value: string;

                        /**
                         * Creates a new Header instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Header instance
                         */
                        public static create(properties?: google.cloud.websecurityscanner.v1beta.VulnerableHeaders.IHeader): google.cloud.websecurityscanner.v1beta.VulnerableHeaders.Header;

                        /**
                         * Encodes the specified Header message. Does not implicitly {@link google.cloud.websecurityscanner.v1beta.VulnerableHeaders.Header.verify|verify} messages.
                         * @param message Header message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.websecurityscanner.v1beta.VulnerableHeaders.IHeader, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Header message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1beta.VulnerableHeaders.Header.verify|verify} messages.
                         * @param message Header message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.websecurityscanner.v1beta.VulnerableHeaders.IHeader, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Header message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Header
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1beta.VulnerableHeaders.Header;

                        /**
                         * Decodes a Header message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Header
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1beta.VulnerableHeaders.Header;

                        /**
                         * Verifies a Header message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Header message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Header
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1beta.VulnerableHeaders.Header;

                        /**
                         * Creates a plain object from a Header message. Also converts values to other types if specified.
                         * @param message Header
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.websecurityscanner.v1beta.VulnerableHeaders.Header, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Header to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Properties of a Xss. */
                interface IXss {

                    /** Xss stackTraces */
                    stackTraces?: (string[]|null);

                    /** Xss errorMessage */
                    errorMessage?: (string|null);
                }

                /** Represents a Xss. */
                class Xss implements IXss {

                    /**
                     * Constructs a new Xss.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1beta.IXss);

                    /** Xss stackTraces. */
                    public stackTraces: string[];

                    /** Xss errorMessage. */
                    public errorMessage: string;

                    /**
                     * Creates a new Xss instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Xss instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1beta.IXss): google.cloud.websecurityscanner.v1beta.Xss;

                    /**
                     * Encodes the specified Xss message. Does not implicitly {@link google.cloud.websecurityscanner.v1beta.Xss.verify|verify} messages.
                     * @param message Xss message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1beta.IXss, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Xss message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1beta.Xss.verify|verify} messages.
                     * @param message Xss message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1beta.IXss, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Xss message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Xss
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1beta.Xss;

                    /**
                     * Decodes a Xss message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Xss
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1beta.Xss;

                    /**
                     * Verifies a Xss message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Xss message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Xss
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1beta.Xss;

                    /**
                     * Creates a plain object from a Xss message. Also converts values to other types if specified.
                     * @param message Xss
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1beta.Xss, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Xss to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a FindingTypeStats. */
                interface IFindingTypeStats {

                    /** FindingTypeStats findingType */
                    findingType?: (string|null);

                    /** FindingTypeStats findingCount */
                    findingCount?: (number|null);
                }

                /** Represents a FindingTypeStats. */
                class FindingTypeStats implements IFindingTypeStats {

                    /**
                     * Constructs a new FindingTypeStats.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1beta.IFindingTypeStats);

                    /** FindingTypeStats findingType. */
                    public findingType: string;

                    /** FindingTypeStats findingCount. */
                    public findingCount: number;

                    /**
                     * Creates a new FindingTypeStats instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FindingTypeStats instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1beta.IFindingTypeStats): google.cloud.websecurityscanner.v1beta.FindingTypeStats;

                    /**
                     * Encodes the specified FindingTypeStats message. Does not implicitly {@link google.cloud.websecurityscanner.v1beta.FindingTypeStats.verify|verify} messages.
                     * @param message FindingTypeStats message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1beta.IFindingTypeStats, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FindingTypeStats message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1beta.FindingTypeStats.verify|verify} messages.
                     * @param message FindingTypeStats message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1beta.IFindingTypeStats, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FindingTypeStats message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FindingTypeStats
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1beta.FindingTypeStats;

                    /**
                     * Decodes a FindingTypeStats message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FindingTypeStats
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1beta.FindingTypeStats;

                    /**
                     * Verifies a FindingTypeStats message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FindingTypeStats message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FindingTypeStats
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1beta.FindingTypeStats;

                    /**
                     * Creates a plain object from a FindingTypeStats message. Also converts values to other types if specified.
                     * @param message FindingTypeStats
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1beta.FindingTypeStats, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FindingTypeStats to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ScanConfig. */
                interface IScanConfig {

                    /** ScanConfig name */
                    name?: (string|null);

                    /** ScanConfig displayName */
                    displayName?: (string|null);

                    /** ScanConfig maxQps */
                    maxQps?: (number|null);

                    /** ScanConfig startingUrls */
                    startingUrls?: (string[]|null);

                    /** ScanConfig authentication */
                    authentication?: (google.cloud.websecurityscanner.v1beta.ScanConfig.IAuthentication|null);

                    /** ScanConfig userAgent */
                    userAgent?: (google.cloud.websecurityscanner.v1beta.ScanConfig.UserAgent|keyof typeof google.cloud.websecurityscanner.v1beta.ScanConfig.UserAgent|null);

                    /** ScanConfig blacklistPatterns */
                    blacklistPatterns?: (string[]|null);

                    /** ScanConfig schedule */
                    schedule?: (google.cloud.websecurityscanner.v1beta.ScanConfig.ISchedule|null);

                    /** ScanConfig targetPlatforms */
                    targetPlatforms?: (google.cloud.websecurityscanner.v1beta.ScanConfig.TargetPlatform[]|null);

                    /** ScanConfig exportToSecurityCommandCenter */
                    exportToSecurityCommandCenter?: (google.cloud.websecurityscanner.v1beta.ScanConfig.ExportToSecurityCommandCenter|keyof typeof google.cloud.websecurityscanner.v1beta.ScanConfig.ExportToSecurityCommandCenter|null);

                    /** ScanConfig latestRun */
                    latestRun?: (google.cloud.websecurityscanner.v1beta.IScanRun|null);

                    /** ScanConfig riskLevel */
                    riskLevel?: (google.cloud.websecurityscanner.v1beta.ScanConfig.RiskLevel|keyof typeof google.cloud.websecurityscanner.v1beta.ScanConfig.RiskLevel|null);
                }

                /** Represents a ScanConfig. */
                class ScanConfig implements IScanConfig {

                    /**
                     * Constructs a new ScanConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1beta.IScanConfig);

                    /** ScanConfig name. */
                    public name: string;

                    /** ScanConfig displayName. */
                    public displayName: string;

                    /** ScanConfig maxQps. */
                    public maxQps: number;

                    /** ScanConfig startingUrls. */
                    public startingUrls: string[];

                    /** ScanConfig authentication. */
                    public authentication?: (google.cloud.websecurityscanner.v1beta.ScanConfig.IAuthentication|null);

                    /** ScanConfig userAgent. */
                    public userAgent: (google.cloud.websecurityscanner.v1beta.ScanConfig.UserAgent|keyof typeof google.cloud.websecurityscanner.v1beta.ScanConfig.UserAgent);

                    /** ScanConfig blacklistPatterns. */
                    public blacklistPatterns: string[];

                    /** ScanConfig schedule. */
                    public schedule?: (google.cloud.websecurityscanner.v1beta.ScanConfig.ISchedule|null);

                    /** ScanConfig targetPlatforms. */
                    public targetPlatforms: google.cloud.websecurityscanner.v1beta.ScanConfig.TargetPlatform[];

                    /** ScanConfig exportToSecurityCommandCenter. */
                    public exportToSecurityCommandCenter: (google.cloud.websecurityscanner.v1beta.ScanConfig.ExportToSecurityCommandCenter|keyof typeof google.cloud.websecurityscanner.v1beta.ScanConfig.ExportToSecurityCommandCenter);

                    /** ScanConfig latestRun. */
                    public latestRun?: (google.cloud.websecurityscanner.v1beta.IScanRun|null);

                    /** ScanConfig riskLevel. */
                    public riskLevel: (google.cloud.websecurityscanner.v1beta.ScanConfig.RiskLevel|keyof typeof google.cloud.websecurityscanner.v1beta.ScanConfig.RiskLevel);

                    /**
                     * Creates a new ScanConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ScanConfig instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1beta.IScanConfig): google.cloud.websecurityscanner.v1beta.ScanConfig;

                    /**
                     * Encodes the specified ScanConfig message. Does not implicitly {@link google.cloud.websecurityscanner.v1beta.ScanConfig.verify|verify} messages.
                     * @param message ScanConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1beta.IScanConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ScanConfig message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1beta.ScanConfig.verify|verify} messages.
                     * @param message ScanConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1beta.IScanConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ScanConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ScanConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1beta.ScanConfig;

                    /**
                     * Decodes a ScanConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ScanConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1beta.ScanConfig;

                    /**
                     * Verifies a ScanConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ScanConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ScanConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1beta.ScanConfig;

                    /**
                     * Creates a plain object from a ScanConfig message. Also converts values to other types if specified.
                     * @param message ScanConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1beta.ScanConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ScanConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace ScanConfig {

                    /** Properties of an Authentication. */
                    interface IAuthentication {

                        /** Authentication googleAccount */
                        googleAccount?: (google.cloud.websecurityscanner.v1beta.ScanConfig.Authentication.IGoogleAccount|null);

                        /** Authentication customAccount */
                        customAccount?: (google.cloud.websecurityscanner.v1beta.ScanConfig.Authentication.ICustomAccount|null);
                    }

                    /** Represents an Authentication. */
                    class Authentication implements IAuthentication {

                        /**
                         * Constructs a new Authentication.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.websecurityscanner.v1beta.ScanConfig.IAuthentication);

                        /** Authentication googleAccount. */
                        public googleAccount?: (google.cloud.websecurityscanner.v1beta.ScanConfig.Authentication.IGoogleAccount|null);

                        /** Authentication customAccount. */
                        public customAccount?: (google.cloud.websecurityscanner.v1beta.ScanConfig.Authentication.ICustomAccount|null);

                        /** Authentication authentication. */
                        public authentication?: ("googleAccount"|"customAccount");

                        /**
                         * Creates a new Authentication instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Authentication instance
                         */
                        public static create(properties?: google.cloud.websecurityscanner.v1beta.ScanConfig.IAuthentication): google.cloud.websecurityscanner.v1beta.ScanConfig.Authentication;

                        /**
                         * Encodes the specified Authentication message. Does not implicitly {@link google.cloud.websecurityscanner.v1beta.ScanConfig.Authentication.verify|verify} messages.
                         * @param message Authentication message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.websecurityscanner.v1beta.ScanConfig.IAuthentication, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Authentication message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1beta.ScanConfig.Authentication.verify|verify} messages.
                         * @param message Authentication message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.websecurityscanner.v1beta.ScanConfig.IAuthentication, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an Authentication message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Authentication
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1beta.ScanConfig.Authentication;

                        /**
                         * Decodes an Authentication message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Authentication
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1beta.ScanConfig.Authentication;

                        /**
                         * Verifies an Authentication message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an Authentication message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Authentication
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1beta.ScanConfig.Authentication;

                        /**
                         * Creates a plain object from an Authentication message. Also converts values to other types if specified.
                         * @param message Authentication
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.websecurityscanner.v1beta.ScanConfig.Authentication, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Authentication to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace Authentication {

                        /** Properties of a GoogleAccount. */
                        interface IGoogleAccount {

                            /** GoogleAccount username */
                            username?: (string|null);

                            /** GoogleAccount password */
                            password?: (string|null);
                        }

                        /** Represents a GoogleAccount. */
                        class GoogleAccount implements IGoogleAccount {

                            /**
                             * Constructs a new GoogleAccount.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.websecurityscanner.v1beta.ScanConfig.Authentication.IGoogleAccount);

                            /** GoogleAccount username. */
                            public username: string;

                            /** GoogleAccount password. */
                            public password: string;

                            /**
                             * Creates a new GoogleAccount instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns GoogleAccount instance
                             */
                            public static create(properties?: google.cloud.websecurityscanner.v1beta.ScanConfig.Authentication.IGoogleAccount): google.cloud.websecurityscanner.v1beta.ScanConfig.Authentication.GoogleAccount;

                            /**
                             * Encodes the specified GoogleAccount message. Does not implicitly {@link google.cloud.websecurityscanner.v1beta.ScanConfig.Authentication.GoogleAccount.verify|verify} messages.
                             * @param message GoogleAccount message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.websecurityscanner.v1beta.ScanConfig.Authentication.IGoogleAccount, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified GoogleAccount message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1beta.ScanConfig.Authentication.GoogleAccount.verify|verify} messages.
                             * @param message GoogleAccount message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.websecurityscanner.v1beta.ScanConfig.Authentication.IGoogleAccount, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a GoogleAccount message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns GoogleAccount
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1beta.ScanConfig.Authentication.GoogleAccount;

                            /**
                             * Decodes a GoogleAccount message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns GoogleAccount
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1beta.ScanConfig.Authentication.GoogleAccount;

                            /**
                             * Verifies a GoogleAccount message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a GoogleAccount message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns GoogleAccount
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1beta.ScanConfig.Authentication.GoogleAccount;

                            /**
                             * Creates a plain object from a GoogleAccount message. Also converts values to other types if specified.
                             * @param message GoogleAccount
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.websecurityscanner.v1beta.ScanConfig.Authentication.GoogleAccount, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this GoogleAccount to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }

                        /** Properties of a CustomAccount. */
                        interface ICustomAccount {

                            /** CustomAccount username */
                            username?: (string|null);

                            /** CustomAccount password */
                            password?: (string|null);

                            /** CustomAccount loginUrl */
                            loginUrl?: (string|null);
                        }

                        /** Represents a CustomAccount. */
                        class CustomAccount implements ICustomAccount {

                            /**
                             * Constructs a new CustomAccount.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.websecurityscanner.v1beta.ScanConfig.Authentication.ICustomAccount);

                            /** CustomAccount username. */
                            public username: string;

                            /** CustomAccount password. */
                            public password: string;

                            /** CustomAccount loginUrl. */
                            public loginUrl: string;

                            /**
                             * Creates a new CustomAccount instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns CustomAccount instance
                             */
                            public static create(properties?: google.cloud.websecurityscanner.v1beta.ScanConfig.Authentication.ICustomAccount): google.cloud.websecurityscanner.v1beta.ScanConfig.Authentication.CustomAccount;

                            /**
                             * Encodes the specified CustomAccount message. Does not implicitly {@link google.cloud.websecurityscanner.v1beta.ScanConfig.Authentication.CustomAccount.verify|verify} messages.
                             * @param message CustomAccount message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.websecurityscanner.v1beta.ScanConfig.Authentication.ICustomAccount, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified CustomAccount message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1beta.ScanConfig.Authentication.CustomAccount.verify|verify} messages.
                             * @param message CustomAccount message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.websecurityscanner.v1beta.ScanConfig.Authentication.ICustomAccount, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a CustomAccount message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns CustomAccount
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1beta.ScanConfig.Authentication.CustomAccount;

                            /**
                             * Decodes a CustomAccount message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns CustomAccount
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1beta.ScanConfig.Authentication.CustomAccount;

                            /**
                             * Verifies a CustomAccount message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a CustomAccount message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns CustomAccount
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1beta.ScanConfig.Authentication.CustomAccount;

                            /**
                             * Creates a plain object from a CustomAccount message. Also converts values to other types if specified.
                             * @param message CustomAccount
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.websecurityscanner.v1beta.ScanConfig.Authentication.CustomAccount, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this CustomAccount to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }
                    }

                    /** Properties of a Schedule. */
                    interface ISchedule {

                        /** Schedule scheduleTime */
                        scheduleTime?: (google.protobuf.ITimestamp|null);

                        /** Schedule intervalDurationDays */
                        intervalDurationDays?: (number|null);
                    }

                    /** Represents a Schedule. */
                    class Schedule implements ISchedule {

                        /**
                         * Constructs a new Schedule.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.websecurityscanner.v1beta.ScanConfig.ISchedule);

                        /** Schedule scheduleTime. */
                        public scheduleTime?: (google.protobuf.ITimestamp|null);

                        /** Schedule intervalDurationDays. */
                        public intervalDurationDays: number;

                        /**
                         * Creates a new Schedule instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Schedule instance
                         */
                        public static create(properties?: google.cloud.websecurityscanner.v1beta.ScanConfig.ISchedule): google.cloud.websecurityscanner.v1beta.ScanConfig.Schedule;

                        /**
                         * Encodes the specified Schedule message. Does not implicitly {@link google.cloud.websecurityscanner.v1beta.ScanConfig.Schedule.verify|verify} messages.
                         * @param message Schedule message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.websecurityscanner.v1beta.ScanConfig.ISchedule, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Schedule message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1beta.ScanConfig.Schedule.verify|verify} messages.
                         * @param message Schedule message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.websecurityscanner.v1beta.ScanConfig.ISchedule, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Schedule message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Schedule
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1beta.ScanConfig.Schedule;

                        /**
                         * Decodes a Schedule message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Schedule
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1beta.ScanConfig.Schedule;

                        /**
                         * Verifies a Schedule message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Schedule message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Schedule
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1beta.ScanConfig.Schedule;

                        /**
                         * Creates a plain object from a Schedule message. Also converts values to other types if specified.
                         * @param message Schedule
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.websecurityscanner.v1beta.ScanConfig.Schedule, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Schedule to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** UserAgent enum. */
                    enum UserAgent {
                        USER_AGENT_UNSPECIFIED = 0,
                        CHROME_LINUX = 1,
                        CHROME_ANDROID = 2,
                        SAFARI_IPHONE = 3
                    }

                    /** TargetPlatform enum. */
                    enum TargetPlatform {
                        TARGET_PLATFORM_UNSPECIFIED = 0,
                        APP_ENGINE = 1,
                        COMPUTE = 2
                    }

                    /** RiskLevel enum. */
                    enum RiskLevel {
                        RISK_LEVEL_UNSPECIFIED = 0,
                        NORMAL = 1,
                        LOW = 2
                    }

                    /** ExportToSecurityCommandCenter enum. */
                    enum ExportToSecurityCommandCenter {
                        EXPORT_TO_SECURITY_COMMAND_CENTER_UNSPECIFIED = 0,
                        ENABLED = 1,
                        DISABLED = 2
                    }
                }

                /** Properties of a ScanRun. */
                interface IScanRun {

                    /** ScanRun name */
                    name?: (string|null);

                    /** ScanRun executionState */
                    executionState?: (google.cloud.websecurityscanner.v1beta.ScanRun.ExecutionState|keyof typeof google.cloud.websecurityscanner.v1beta.ScanRun.ExecutionState|null);

                    /** ScanRun resultState */
                    resultState?: (google.cloud.websecurityscanner.v1beta.ScanRun.ResultState|keyof typeof google.cloud.websecurityscanner.v1beta.ScanRun.ResultState|null);

                    /** ScanRun startTime */
                    startTime?: (google.protobuf.ITimestamp|null);

                    /** ScanRun endTime */
                    endTime?: (google.protobuf.ITimestamp|null);

                    /** ScanRun urlsCrawledCount */
                    urlsCrawledCount?: (number|Long|string|null);

                    /** ScanRun urlsTestedCount */
                    urlsTestedCount?: (number|Long|string|null);

                    /** ScanRun hasVulnerabilities */
                    hasVulnerabilities?: (boolean|null);

                    /** ScanRun progressPercent */
                    progressPercent?: (number|null);

                    /** ScanRun errorTrace */
                    errorTrace?: (google.cloud.websecurityscanner.v1beta.IScanRunErrorTrace|null);

                    /** ScanRun warningTraces */
                    warningTraces?: (google.cloud.websecurityscanner.v1beta.IScanRunWarningTrace[]|null);
                }

                /** Represents a ScanRun. */
                class ScanRun implements IScanRun {

                    /**
                     * Constructs a new ScanRun.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1beta.IScanRun);

                    /** ScanRun name. */
                    public name: string;

                    /** ScanRun executionState. */
                    public executionState: (google.cloud.websecurityscanner.v1beta.ScanRun.ExecutionState|keyof typeof google.cloud.websecurityscanner.v1beta.ScanRun.ExecutionState);

                    /** ScanRun resultState. */
                    public resultState: (google.cloud.websecurityscanner.v1beta.ScanRun.ResultState|keyof typeof google.cloud.websecurityscanner.v1beta.ScanRun.ResultState);

                    /** ScanRun startTime. */
                    public startTime?: (google.protobuf.ITimestamp|null);

                    /** ScanRun endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /** ScanRun urlsCrawledCount. */
                    public urlsCrawledCount: (number|Long|string);

                    /** ScanRun urlsTestedCount. */
                    public urlsTestedCount: (number|Long|string);

                    /** ScanRun hasVulnerabilities. */
                    public hasVulnerabilities: boolean;

                    /** ScanRun progressPercent. */
                    public progressPercent: number;

                    /** ScanRun errorTrace. */
                    public errorTrace?: (google.cloud.websecurityscanner.v1beta.IScanRunErrorTrace|null);

                    /** ScanRun warningTraces. */
                    public warningTraces: google.cloud.websecurityscanner.v1beta.IScanRunWarningTrace[];

                    /**
                     * Creates a new ScanRun instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ScanRun instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1beta.IScanRun): google.cloud.websecurityscanner.v1beta.ScanRun;

                    /**
                     * Encodes the specified ScanRun message. Does not implicitly {@link google.cloud.websecurityscanner.v1beta.ScanRun.verify|verify} messages.
                     * @param message ScanRun message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1beta.IScanRun, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ScanRun message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1beta.ScanRun.verify|verify} messages.
                     * @param message ScanRun message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1beta.IScanRun, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ScanRun message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ScanRun
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1beta.ScanRun;

                    /**
                     * Decodes a ScanRun message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ScanRun
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1beta.ScanRun;

                    /**
                     * Verifies a ScanRun message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ScanRun message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ScanRun
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1beta.ScanRun;

                    /**
                     * Creates a plain object from a ScanRun message. Also converts values to other types if specified.
                     * @param message ScanRun
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1beta.ScanRun, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ScanRun to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace ScanRun {

                    /** ExecutionState enum. */
                    enum ExecutionState {
                        EXECUTION_STATE_UNSPECIFIED = 0,
                        QUEUED = 1,
                        SCANNING = 2,
                        FINISHED = 3
                    }

                    /** ResultState enum. */
                    enum ResultState {
                        RESULT_STATE_UNSPECIFIED = 0,
                        SUCCESS = 1,
                        ERROR = 2,
                        KILLED = 3
                    }
                }

                /** Properties of a ScanRunErrorTrace. */
                interface IScanRunErrorTrace {

                    /** ScanRunErrorTrace code */
                    code?: (google.cloud.websecurityscanner.v1beta.ScanRunErrorTrace.Code|keyof typeof google.cloud.websecurityscanner.v1beta.ScanRunErrorTrace.Code|null);

                    /** ScanRunErrorTrace scanConfigError */
                    scanConfigError?: (google.cloud.websecurityscanner.v1beta.IScanConfigError|null);

                    /** ScanRunErrorTrace mostCommonHttpErrorCode */
                    mostCommonHttpErrorCode?: (number|null);
                }

                /** Represents a ScanRunErrorTrace. */
                class ScanRunErrorTrace implements IScanRunErrorTrace {

                    /**
                     * Constructs a new ScanRunErrorTrace.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1beta.IScanRunErrorTrace);

                    /** ScanRunErrorTrace code. */
                    public code: (google.cloud.websecurityscanner.v1beta.ScanRunErrorTrace.Code|keyof typeof google.cloud.websecurityscanner.v1beta.ScanRunErrorTrace.Code);

                    /** ScanRunErrorTrace scanConfigError. */
                    public scanConfigError?: (google.cloud.websecurityscanner.v1beta.IScanConfigError|null);

                    /** ScanRunErrorTrace mostCommonHttpErrorCode. */
                    public mostCommonHttpErrorCode: number;

                    /**
                     * Creates a new ScanRunErrorTrace instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ScanRunErrorTrace instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1beta.IScanRunErrorTrace): google.cloud.websecurityscanner.v1beta.ScanRunErrorTrace;

                    /**
                     * Encodes the specified ScanRunErrorTrace message. Does not implicitly {@link google.cloud.websecurityscanner.v1beta.ScanRunErrorTrace.verify|verify} messages.
                     * @param message ScanRunErrorTrace message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1beta.IScanRunErrorTrace, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ScanRunErrorTrace message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1beta.ScanRunErrorTrace.verify|verify} messages.
                     * @param message ScanRunErrorTrace message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1beta.IScanRunErrorTrace, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ScanRunErrorTrace message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ScanRunErrorTrace
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1beta.ScanRunErrorTrace;

                    /**
                     * Decodes a ScanRunErrorTrace message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ScanRunErrorTrace
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1beta.ScanRunErrorTrace;

                    /**
                     * Verifies a ScanRunErrorTrace message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ScanRunErrorTrace message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ScanRunErrorTrace
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1beta.ScanRunErrorTrace;

                    /**
                     * Creates a plain object from a ScanRunErrorTrace message. Also converts values to other types if specified.
                     * @param message ScanRunErrorTrace
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1beta.ScanRunErrorTrace, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ScanRunErrorTrace to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace ScanRunErrorTrace {

                    /** Code enum. */
                    enum Code {
                        CODE_UNSPECIFIED = 0,
                        INTERNAL_ERROR = 1,
                        SCAN_CONFIG_ISSUE = 2,
                        AUTHENTICATION_CONFIG_ISSUE = 3,
                        TIMED_OUT_WHILE_SCANNING = 4,
                        TOO_MANY_REDIRECTS = 5,
                        TOO_MANY_HTTP_ERRORS = 6
                    }
                }

                /** Properties of a ScanConfigError. */
                interface IScanConfigError {

                    /** ScanConfigError code */
                    code?: (google.cloud.websecurityscanner.v1beta.ScanConfigError.Code|keyof typeof google.cloud.websecurityscanner.v1beta.ScanConfigError.Code|null);

                    /** ScanConfigError fieldName */
                    fieldName?: (string|null);
                }

                /** Represents a ScanConfigError. */
                class ScanConfigError implements IScanConfigError {

                    /**
                     * Constructs a new ScanConfigError.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1beta.IScanConfigError);

                    /** ScanConfigError code. */
                    public code: (google.cloud.websecurityscanner.v1beta.ScanConfigError.Code|keyof typeof google.cloud.websecurityscanner.v1beta.ScanConfigError.Code);

                    /** ScanConfigError fieldName. */
                    public fieldName: string;

                    /**
                     * Creates a new ScanConfigError instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ScanConfigError instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1beta.IScanConfigError): google.cloud.websecurityscanner.v1beta.ScanConfigError;

                    /**
                     * Encodes the specified ScanConfigError message. Does not implicitly {@link google.cloud.websecurityscanner.v1beta.ScanConfigError.verify|verify} messages.
                     * @param message ScanConfigError message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1beta.IScanConfigError, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ScanConfigError message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1beta.ScanConfigError.verify|verify} messages.
                     * @param message ScanConfigError message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1beta.IScanConfigError, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ScanConfigError message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ScanConfigError
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1beta.ScanConfigError;

                    /**
                     * Decodes a ScanConfigError message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ScanConfigError
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1beta.ScanConfigError;

                    /**
                     * Verifies a ScanConfigError message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ScanConfigError message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ScanConfigError
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1beta.ScanConfigError;

                    /**
                     * Creates a plain object from a ScanConfigError message. Also converts values to other types if specified.
                     * @param message ScanConfigError
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1beta.ScanConfigError, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ScanConfigError to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace ScanConfigError {

                    /** Code enum. */
                    enum Code {
                        CODE_UNSPECIFIED = 0,
                        OK = 0,
                        INTERNAL_ERROR = 1,
                        APPENGINE_API_BACKEND_ERROR = 2,
                        APPENGINE_API_NOT_ACCESSIBLE = 3,
                        APPENGINE_DEFAULT_HOST_MISSING = 4,
                        CANNOT_USE_GOOGLE_COM_ACCOUNT = 6,
                        CANNOT_USE_OWNER_ACCOUNT = 7,
                        COMPUTE_API_BACKEND_ERROR = 8,
                        COMPUTE_API_NOT_ACCESSIBLE = 9,
                        CUSTOM_LOGIN_URL_DOES_NOT_BELONG_TO_CURRENT_PROJECT = 10,
                        CUSTOM_LOGIN_URL_MALFORMED = 11,
                        CUSTOM_LOGIN_URL_MAPPED_TO_NON_ROUTABLE_ADDRESS = 12,
                        CUSTOM_LOGIN_URL_MAPPED_TO_UNRESERVED_ADDRESS = 13,
                        CUSTOM_LOGIN_URL_HAS_NON_ROUTABLE_IP_ADDRESS = 14,
                        CUSTOM_LOGIN_URL_HAS_UNRESERVED_IP_ADDRESS = 15,
                        DUPLICATE_SCAN_NAME = 16,
                        INVALID_FIELD_VALUE = 18,
                        FAILED_TO_AUTHENTICATE_TO_TARGET = 19,
                        FINDING_TYPE_UNSPECIFIED = 20,
                        FORBIDDEN_TO_SCAN_COMPUTE = 21,
                        FORBIDDEN_UPDATE_TO_MANAGED_SCAN = 43,
                        MALFORMED_FILTER = 22,
                        MALFORMED_RESOURCE_NAME = 23,
                        PROJECT_INACTIVE = 24,
                        REQUIRED_FIELD = 25,
                        RESOURCE_NAME_INCONSISTENT = 26,
                        SCAN_ALREADY_RUNNING = 27,
                        SCAN_NOT_RUNNING = 28,
                        SEED_URL_DOES_NOT_BELONG_TO_CURRENT_PROJECT = 29,
                        SEED_URL_MALFORMED = 30,
                        SEED_URL_MAPPED_TO_NON_ROUTABLE_ADDRESS = 31,
                        SEED_URL_MAPPED_TO_UNRESERVED_ADDRESS = 32,
                        SEED_URL_HAS_NON_ROUTABLE_IP_ADDRESS = 33,
                        SEED_URL_HAS_UNRESERVED_IP_ADDRESS = 35,
                        SERVICE_ACCOUNT_NOT_CONFIGURED = 36,
                        TOO_MANY_SCANS = 37,
                        UNABLE_TO_RESOLVE_PROJECT_INFO = 38,
                        UNSUPPORTED_BLACKLIST_PATTERN_FORMAT = 39,
                        UNSUPPORTED_FILTER = 40,
                        UNSUPPORTED_FINDING_TYPE = 41,
                        UNSUPPORTED_URL_SCHEME = 42
                    }
                }

                /** Properties of a ScanRunWarningTrace. */
                interface IScanRunWarningTrace {

                    /** ScanRunWarningTrace code */
                    code?: (google.cloud.websecurityscanner.v1beta.ScanRunWarningTrace.Code|keyof typeof google.cloud.websecurityscanner.v1beta.ScanRunWarningTrace.Code|null);
                }

                /** Represents a ScanRunWarningTrace. */
                class ScanRunWarningTrace implements IScanRunWarningTrace {

                    /**
                     * Constructs a new ScanRunWarningTrace.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1beta.IScanRunWarningTrace);

                    /** ScanRunWarningTrace code. */
                    public code: (google.cloud.websecurityscanner.v1beta.ScanRunWarningTrace.Code|keyof typeof google.cloud.websecurityscanner.v1beta.ScanRunWarningTrace.Code);

                    /**
                     * Creates a new ScanRunWarningTrace instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ScanRunWarningTrace instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1beta.IScanRunWarningTrace): google.cloud.websecurityscanner.v1beta.ScanRunWarningTrace;

                    /**
                     * Encodes the specified ScanRunWarningTrace message. Does not implicitly {@link google.cloud.websecurityscanner.v1beta.ScanRunWarningTrace.verify|verify} messages.
                     * @param message ScanRunWarningTrace message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1beta.IScanRunWarningTrace, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ScanRunWarningTrace message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1beta.ScanRunWarningTrace.verify|verify} messages.
                     * @param message ScanRunWarningTrace message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1beta.IScanRunWarningTrace, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ScanRunWarningTrace message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ScanRunWarningTrace
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1beta.ScanRunWarningTrace;

                    /**
                     * Decodes a ScanRunWarningTrace message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ScanRunWarningTrace
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1beta.ScanRunWarningTrace;

                    /**
                     * Verifies a ScanRunWarningTrace message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ScanRunWarningTrace message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ScanRunWarningTrace
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1beta.ScanRunWarningTrace;

                    /**
                     * Creates a plain object from a ScanRunWarningTrace message. Also converts values to other types if specified.
                     * @param message ScanRunWarningTrace
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1beta.ScanRunWarningTrace, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ScanRunWarningTrace to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace ScanRunWarningTrace {

                    /** Code enum. */
                    enum Code {
                        CODE_UNSPECIFIED = 0,
                        INSUFFICIENT_CRAWL_RESULTS = 1,
                        TOO_MANY_CRAWL_RESULTS = 2,
                        TOO_MANY_FUZZ_TASKS = 3,
                        BLOCKED_BY_IAP = 4
                    }
                }

                /** Represents a WebSecurityScanner */
                class WebSecurityScanner extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new WebSecurityScanner service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new WebSecurityScanner service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): WebSecurityScanner;

                    /**
                     * Calls CreateScanConfig.
                     * @param request CreateScanConfigRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ScanConfig
                     */
                    public createScanConfig(request: google.cloud.websecurityscanner.v1beta.ICreateScanConfigRequest, callback: google.cloud.websecurityscanner.v1beta.WebSecurityScanner.CreateScanConfigCallback): void;

                    /**
                     * Calls CreateScanConfig.
                     * @param request CreateScanConfigRequest message or plain object
                     * @returns Promise
                     */
                    public createScanConfig(request: google.cloud.websecurityscanner.v1beta.ICreateScanConfigRequest): Promise<google.cloud.websecurityscanner.v1beta.ScanConfig>;

                    /**
                     * Calls DeleteScanConfig.
                     * @param request DeleteScanConfigRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteScanConfig(request: google.cloud.websecurityscanner.v1beta.IDeleteScanConfigRequest, callback: google.cloud.websecurityscanner.v1beta.WebSecurityScanner.DeleteScanConfigCallback): void;

                    /**
                     * Calls DeleteScanConfig.
                     * @param request DeleteScanConfigRequest message or plain object
                     * @returns Promise
                     */
                    public deleteScanConfig(request: google.cloud.websecurityscanner.v1beta.IDeleteScanConfigRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls GetScanConfig.
                     * @param request GetScanConfigRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ScanConfig
                     */
                    public getScanConfig(request: google.cloud.websecurityscanner.v1beta.IGetScanConfigRequest, callback: google.cloud.websecurityscanner.v1beta.WebSecurityScanner.GetScanConfigCallback): void;

                    /**
                     * Calls GetScanConfig.
                     * @param request GetScanConfigRequest message or plain object
                     * @returns Promise
                     */
                    public getScanConfig(request: google.cloud.websecurityscanner.v1beta.IGetScanConfigRequest): Promise<google.cloud.websecurityscanner.v1beta.ScanConfig>;

                    /**
                     * Calls ListScanConfigs.
                     * @param request ListScanConfigsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListScanConfigsResponse
                     */
                    public listScanConfigs(request: google.cloud.websecurityscanner.v1beta.IListScanConfigsRequest, callback: google.cloud.websecurityscanner.v1beta.WebSecurityScanner.ListScanConfigsCallback): void;

                    /**
                     * Calls ListScanConfigs.
                     * @param request ListScanConfigsRequest message or plain object
                     * @returns Promise
                     */
                    public listScanConfigs(request: google.cloud.websecurityscanner.v1beta.IListScanConfigsRequest): Promise<google.cloud.websecurityscanner.v1beta.ListScanConfigsResponse>;

                    /**
                     * Calls UpdateScanConfig.
                     * @param request UpdateScanConfigRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ScanConfig
                     */
                    public updateScanConfig(request: google.cloud.websecurityscanner.v1beta.IUpdateScanConfigRequest, callback: google.cloud.websecurityscanner.v1beta.WebSecurityScanner.UpdateScanConfigCallback): void;

                    /**
                     * Calls UpdateScanConfig.
                     * @param request UpdateScanConfigRequest message or plain object
                     * @returns Promise
                     */
                    public updateScanConfig(request: google.cloud.websecurityscanner.v1beta.IUpdateScanConfigRequest): Promise<google.cloud.websecurityscanner.v1beta.ScanConfig>;

                    /**
                     * Calls StartScanRun.
                     * @param request StartScanRunRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ScanRun
                     */
                    public startScanRun(request: google.cloud.websecurityscanner.v1beta.IStartScanRunRequest, callback: google.cloud.websecurityscanner.v1beta.WebSecurityScanner.StartScanRunCallback): void;

                    /**
                     * Calls StartScanRun.
                     * @param request StartScanRunRequest message or plain object
                     * @returns Promise
                     */
                    public startScanRun(request: google.cloud.websecurityscanner.v1beta.IStartScanRunRequest): Promise<google.cloud.websecurityscanner.v1beta.ScanRun>;

                    /**
                     * Calls GetScanRun.
                     * @param request GetScanRunRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ScanRun
                     */
                    public getScanRun(request: google.cloud.websecurityscanner.v1beta.IGetScanRunRequest, callback: google.cloud.websecurityscanner.v1beta.WebSecurityScanner.GetScanRunCallback): void;

                    /**
                     * Calls GetScanRun.
                     * @param request GetScanRunRequest message or plain object
                     * @returns Promise
                     */
                    public getScanRun(request: google.cloud.websecurityscanner.v1beta.IGetScanRunRequest): Promise<google.cloud.websecurityscanner.v1beta.ScanRun>;

                    /**
                     * Calls ListScanRuns.
                     * @param request ListScanRunsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListScanRunsResponse
                     */
                    public listScanRuns(request: google.cloud.websecurityscanner.v1beta.IListScanRunsRequest, callback: google.cloud.websecurityscanner.v1beta.WebSecurityScanner.ListScanRunsCallback): void;

                    /**
                     * Calls ListScanRuns.
                     * @param request ListScanRunsRequest message or plain object
                     * @returns Promise
                     */
                    public listScanRuns(request: google.cloud.websecurityscanner.v1beta.IListScanRunsRequest): Promise<google.cloud.websecurityscanner.v1beta.ListScanRunsResponse>;

                    /**
                     * Calls StopScanRun.
                     * @param request StopScanRunRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ScanRun
                     */
                    public stopScanRun(request: google.cloud.websecurityscanner.v1beta.IStopScanRunRequest, callback: google.cloud.websecurityscanner.v1beta.WebSecurityScanner.StopScanRunCallback): void;

                    /**
                     * Calls StopScanRun.
                     * @param request StopScanRunRequest message or plain object
                     * @returns Promise
                     */
                    public stopScanRun(request: google.cloud.websecurityscanner.v1beta.IStopScanRunRequest): Promise<google.cloud.websecurityscanner.v1beta.ScanRun>;

                    /**
                     * Calls ListCrawledUrls.
                     * @param request ListCrawledUrlsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListCrawledUrlsResponse
                     */
                    public listCrawledUrls(request: google.cloud.websecurityscanner.v1beta.IListCrawledUrlsRequest, callback: google.cloud.websecurityscanner.v1beta.WebSecurityScanner.ListCrawledUrlsCallback): void;

                    /**
                     * Calls ListCrawledUrls.
                     * @param request ListCrawledUrlsRequest message or plain object
                     * @returns Promise
                     */
                    public listCrawledUrls(request: google.cloud.websecurityscanner.v1beta.IListCrawledUrlsRequest): Promise<google.cloud.websecurityscanner.v1beta.ListCrawledUrlsResponse>;

                    /**
                     * Calls GetFinding.
                     * @param request GetFindingRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Finding
                     */
                    public getFinding(request: google.cloud.websecurityscanner.v1beta.IGetFindingRequest, callback: google.cloud.websecurityscanner.v1beta.WebSecurityScanner.GetFindingCallback): void;

                    /**
                     * Calls GetFinding.
                     * @param request GetFindingRequest message or plain object
                     * @returns Promise
                     */
                    public getFinding(request: google.cloud.websecurityscanner.v1beta.IGetFindingRequest): Promise<google.cloud.websecurityscanner.v1beta.Finding>;

                    /**
                     * Calls ListFindings.
                     * @param request ListFindingsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListFindingsResponse
                     */
                    public listFindings(request: google.cloud.websecurityscanner.v1beta.IListFindingsRequest, callback: google.cloud.websecurityscanner.v1beta.WebSecurityScanner.ListFindingsCallback): void;

                    /**
                     * Calls ListFindings.
                     * @param request ListFindingsRequest message or plain object
                     * @returns Promise
                     */
                    public listFindings(request: google.cloud.websecurityscanner.v1beta.IListFindingsRequest): Promise<google.cloud.websecurityscanner.v1beta.ListFindingsResponse>;

                    /**
                     * Calls ListFindingTypeStats.
                     * @param request ListFindingTypeStatsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListFindingTypeStatsResponse
                     */
                    public listFindingTypeStats(request: google.cloud.websecurityscanner.v1beta.IListFindingTypeStatsRequest, callback: google.cloud.websecurityscanner.v1beta.WebSecurityScanner.ListFindingTypeStatsCallback): void;

                    /**
                     * Calls ListFindingTypeStats.
                     * @param request ListFindingTypeStatsRequest message or plain object
                     * @returns Promise
                     */
                    public listFindingTypeStats(request: google.cloud.websecurityscanner.v1beta.IListFindingTypeStatsRequest): Promise<google.cloud.websecurityscanner.v1beta.ListFindingTypeStatsResponse>;
                }

                namespace WebSecurityScanner {

                    /**
                     * Callback as used by {@link google.cloud.websecurityscanner.v1beta.WebSecurityScanner|createScanConfig}.
                     * @param error Error, if any
                     * @param [response] ScanConfig
                     */
                    type CreateScanConfigCallback = (error: (Error|null), response?: google.cloud.websecurityscanner.v1beta.ScanConfig) => void;

                    /**
                     * Callback as used by {@link google.cloud.websecurityscanner.v1beta.WebSecurityScanner|deleteScanConfig}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteScanConfigCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.websecurityscanner.v1beta.WebSecurityScanner|getScanConfig}.
                     * @param error Error, if any
                     * @param [response] ScanConfig
                     */
                    type GetScanConfigCallback = (error: (Error|null), response?: google.cloud.websecurityscanner.v1beta.ScanConfig) => void;

                    /**
                     * Callback as used by {@link google.cloud.websecurityscanner.v1beta.WebSecurityScanner|listScanConfigs}.
                     * @param error Error, if any
                     * @param [response] ListScanConfigsResponse
                     */
                    type ListScanConfigsCallback = (error: (Error|null), response?: google.cloud.websecurityscanner.v1beta.ListScanConfigsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.websecurityscanner.v1beta.WebSecurityScanner|updateScanConfig}.
                     * @param error Error, if any
                     * @param [response] ScanConfig
                     */
                    type UpdateScanConfigCallback = (error: (Error|null), response?: google.cloud.websecurityscanner.v1beta.ScanConfig) => void;

                    /**
                     * Callback as used by {@link google.cloud.websecurityscanner.v1beta.WebSecurityScanner|startScanRun}.
                     * @param error Error, if any
                     * @param [response] ScanRun
                     */
                    type StartScanRunCallback = (error: (Error|null), response?: google.cloud.websecurityscanner.v1beta.ScanRun) => void;

                    /**
                     * Callback as used by {@link google.cloud.websecurityscanner.v1beta.WebSecurityScanner|getScanRun}.
                     * @param error Error, if any
                     * @param [response] ScanRun
                     */
                    type GetScanRunCallback = (error: (Error|null), response?: google.cloud.websecurityscanner.v1beta.ScanRun) => void;

                    /**
                     * Callback as used by {@link google.cloud.websecurityscanner.v1beta.WebSecurityScanner|listScanRuns}.
                     * @param error Error, if any
                     * @param [response] ListScanRunsResponse
                     */
                    type ListScanRunsCallback = (error: (Error|null), response?: google.cloud.websecurityscanner.v1beta.ListScanRunsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.websecurityscanner.v1beta.WebSecurityScanner|stopScanRun}.
                     * @param error Error, if any
                     * @param [response] ScanRun
                     */
                    type StopScanRunCallback = (error: (Error|null), response?: google.cloud.websecurityscanner.v1beta.ScanRun) => void;

                    /**
                     * Callback as used by {@link google.cloud.websecurityscanner.v1beta.WebSecurityScanner|listCrawledUrls}.
                     * @param error Error, if any
                     * @param [response] ListCrawledUrlsResponse
                     */
                    type ListCrawledUrlsCallback = (error: (Error|null), response?: google.cloud.websecurityscanner.v1beta.ListCrawledUrlsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.websecurityscanner.v1beta.WebSecurityScanner|getFinding}.
                     * @param error Error, if any
                     * @param [response] Finding
                     */
                    type GetFindingCallback = (error: (Error|null), response?: google.cloud.websecurityscanner.v1beta.Finding) => void;

                    /**
                     * Callback as used by {@link google.cloud.websecurityscanner.v1beta.WebSecurityScanner|listFindings}.
                     * @param error Error, if any
                     * @param [response] ListFindingsResponse
                     */
                    type ListFindingsCallback = (error: (Error|null), response?: google.cloud.websecurityscanner.v1beta.ListFindingsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.websecurityscanner.v1beta.WebSecurityScanner|listFindingTypeStats}.
                     * @param error Error, if any
                     * @param [response] ListFindingTypeStatsResponse
                     */
                    type ListFindingTypeStatsCallback = (error: (Error|null), response?: google.cloud.websecurityscanner.v1beta.ListFindingTypeStatsResponse) => void;
                }

                /** Properties of a CreateScanConfigRequest. */
                interface ICreateScanConfigRequest {

                    /** CreateScanConfigRequest parent */
                    parent?: (string|null);

                    /** CreateScanConfigRequest scanConfig */
                    scanConfig?: (google.cloud.websecurityscanner.v1beta.IScanConfig|null);
                }

                /** Represents a CreateScanConfigRequest. */
                class CreateScanConfigRequest implements ICreateScanConfigRequest {

                    /**
                     * Constructs a new CreateScanConfigRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1beta.ICreateScanConfigRequest);

                    /** CreateScanConfigRequest parent. */
                    public parent: string;

                    /** CreateScanConfigRequest scanConfig. */
                    public scanConfig?: (google.cloud.websecurityscanner.v1beta.IScanConfig|null);

                    /**
                     * Creates a new CreateScanConfigRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateScanConfigRequest instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1beta.ICreateScanConfigRequest): google.cloud.websecurityscanner.v1beta.CreateScanConfigRequest;

                    /**
                     * Encodes the specified CreateScanConfigRequest message. Does not implicitly {@link google.cloud.websecurityscanner.v1beta.CreateScanConfigRequest.verify|verify} messages.
                     * @param message CreateScanConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1beta.ICreateScanConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateScanConfigRequest message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1beta.CreateScanConfigRequest.verify|verify} messages.
                     * @param message CreateScanConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1beta.ICreateScanConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateScanConfigRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateScanConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1beta.CreateScanConfigRequest;

                    /**
                     * Decodes a CreateScanConfigRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateScanConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1beta.CreateScanConfigRequest;

                    /**
                     * Verifies a CreateScanConfigRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateScanConfigRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateScanConfigRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1beta.CreateScanConfigRequest;

                    /**
                     * Creates a plain object from a CreateScanConfigRequest message. Also converts values to other types if specified.
                     * @param message CreateScanConfigRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1beta.CreateScanConfigRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateScanConfigRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteScanConfigRequest. */
                interface IDeleteScanConfigRequest {

                    /** DeleteScanConfigRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteScanConfigRequest. */
                class DeleteScanConfigRequest implements IDeleteScanConfigRequest {

                    /**
                     * Constructs a new DeleteScanConfigRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1beta.IDeleteScanConfigRequest);

                    /** DeleteScanConfigRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteScanConfigRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteScanConfigRequest instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1beta.IDeleteScanConfigRequest): google.cloud.websecurityscanner.v1beta.DeleteScanConfigRequest;

                    /**
                     * Encodes the specified DeleteScanConfigRequest message. Does not implicitly {@link google.cloud.websecurityscanner.v1beta.DeleteScanConfigRequest.verify|verify} messages.
                     * @param message DeleteScanConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1beta.IDeleteScanConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteScanConfigRequest message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1beta.DeleteScanConfigRequest.verify|verify} messages.
                     * @param message DeleteScanConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1beta.IDeleteScanConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteScanConfigRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteScanConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1beta.DeleteScanConfigRequest;

                    /**
                     * Decodes a DeleteScanConfigRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteScanConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1beta.DeleteScanConfigRequest;

                    /**
                     * Verifies a DeleteScanConfigRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteScanConfigRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteScanConfigRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1beta.DeleteScanConfigRequest;

                    /**
                     * Creates a plain object from a DeleteScanConfigRequest message. Also converts values to other types if specified.
                     * @param message DeleteScanConfigRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1beta.DeleteScanConfigRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteScanConfigRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetScanConfigRequest. */
                interface IGetScanConfigRequest {

                    /** GetScanConfigRequest name */
                    name?: (string|null);
                }

                /** Represents a GetScanConfigRequest. */
                class GetScanConfigRequest implements IGetScanConfigRequest {

                    /**
                     * Constructs a new GetScanConfigRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1beta.IGetScanConfigRequest);

                    /** GetScanConfigRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetScanConfigRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetScanConfigRequest instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1beta.IGetScanConfigRequest): google.cloud.websecurityscanner.v1beta.GetScanConfigRequest;

                    /**
                     * Encodes the specified GetScanConfigRequest message. Does not implicitly {@link google.cloud.websecurityscanner.v1beta.GetScanConfigRequest.verify|verify} messages.
                     * @param message GetScanConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1beta.IGetScanConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetScanConfigRequest message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1beta.GetScanConfigRequest.verify|verify} messages.
                     * @param message GetScanConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1beta.IGetScanConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetScanConfigRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetScanConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1beta.GetScanConfigRequest;

                    /**
                     * Decodes a GetScanConfigRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetScanConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1beta.GetScanConfigRequest;

                    /**
                     * Verifies a GetScanConfigRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetScanConfigRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetScanConfigRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1beta.GetScanConfigRequest;

                    /**
                     * Creates a plain object from a GetScanConfigRequest message. Also converts values to other types if specified.
                     * @param message GetScanConfigRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1beta.GetScanConfigRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetScanConfigRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListScanConfigsRequest. */
                interface IListScanConfigsRequest {

                    /** ListScanConfigsRequest parent */
                    parent?: (string|null);

                    /** ListScanConfigsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListScanConfigsRequest pageSize */
                    pageSize?: (number|null);
                }

                /** Represents a ListScanConfigsRequest. */
                class ListScanConfigsRequest implements IListScanConfigsRequest {

                    /**
                     * Constructs a new ListScanConfigsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1beta.IListScanConfigsRequest);

                    /** ListScanConfigsRequest parent. */
                    public parent: string;

                    /** ListScanConfigsRequest pageToken. */
                    public pageToken: string;

                    /** ListScanConfigsRequest pageSize. */
                    public pageSize: number;

                    /**
                     * Creates a new ListScanConfigsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListScanConfigsRequest instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1beta.IListScanConfigsRequest): google.cloud.websecurityscanner.v1beta.ListScanConfigsRequest;

                    /**
                     * Encodes the specified ListScanConfigsRequest message. Does not implicitly {@link google.cloud.websecurityscanner.v1beta.ListScanConfigsRequest.verify|verify} messages.
                     * @param message ListScanConfigsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1beta.IListScanConfigsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListScanConfigsRequest message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1beta.ListScanConfigsRequest.verify|verify} messages.
                     * @param message ListScanConfigsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1beta.IListScanConfigsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListScanConfigsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListScanConfigsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1beta.ListScanConfigsRequest;

                    /**
                     * Decodes a ListScanConfigsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListScanConfigsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1beta.ListScanConfigsRequest;

                    /**
                     * Verifies a ListScanConfigsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListScanConfigsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListScanConfigsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1beta.ListScanConfigsRequest;

                    /**
                     * Creates a plain object from a ListScanConfigsRequest message. Also converts values to other types if specified.
                     * @param message ListScanConfigsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1beta.ListScanConfigsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListScanConfigsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateScanConfigRequest. */
                interface IUpdateScanConfigRequest {

                    /** UpdateScanConfigRequest scanConfig */
                    scanConfig?: (google.cloud.websecurityscanner.v1beta.IScanConfig|null);

                    /** UpdateScanConfigRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateScanConfigRequest. */
                class UpdateScanConfigRequest implements IUpdateScanConfigRequest {

                    /**
                     * Constructs a new UpdateScanConfigRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1beta.IUpdateScanConfigRequest);

                    /** UpdateScanConfigRequest scanConfig. */
                    public scanConfig?: (google.cloud.websecurityscanner.v1beta.IScanConfig|null);

                    /** UpdateScanConfigRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateScanConfigRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateScanConfigRequest instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1beta.IUpdateScanConfigRequest): google.cloud.websecurityscanner.v1beta.UpdateScanConfigRequest;

                    /**
                     * Encodes the specified UpdateScanConfigRequest message. Does not implicitly {@link google.cloud.websecurityscanner.v1beta.UpdateScanConfigRequest.verify|verify} messages.
                     * @param message UpdateScanConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1beta.IUpdateScanConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateScanConfigRequest message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1beta.UpdateScanConfigRequest.verify|verify} messages.
                     * @param message UpdateScanConfigRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1beta.IUpdateScanConfigRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateScanConfigRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateScanConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1beta.UpdateScanConfigRequest;

                    /**
                     * Decodes an UpdateScanConfigRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateScanConfigRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1beta.UpdateScanConfigRequest;

                    /**
                     * Verifies an UpdateScanConfigRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateScanConfigRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateScanConfigRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1beta.UpdateScanConfigRequest;

                    /**
                     * Creates a plain object from an UpdateScanConfigRequest message. Also converts values to other types if specified.
                     * @param message UpdateScanConfigRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1beta.UpdateScanConfigRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateScanConfigRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListScanConfigsResponse. */
                interface IListScanConfigsResponse {

                    /** ListScanConfigsResponse scanConfigs */
                    scanConfigs?: (google.cloud.websecurityscanner.v1beta.IScanConfig[]|null);

                    /** ListScanConfigsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListScanConfigsResponse. */
                class ListScanConfigsResponse implements IListScanConfigsResponse {

                    /**
                     * Constructs a new ListScanConfigsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1beta.IListScanConfigsResponse);

                    /** ListScanConfigsResponse scanConfigs. */
                    public scanConfigs: google.cloud.websecurityscanner.v1beta.IScanConfig[];

                    /** ListScanConfigsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListScanConfigsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListScanConfigsResponse instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1beta.IListScanConfigsResponse): google.cloud.websecurityscanner.v1beta.ListScanConfigsResponse;

                    /**
                     * Encodes the specified ListScanConfigsResponse message. Does not implicitly {@link google.cloud.websecurityscanner.v1beta.ListScanConfigsResponse.verify|verify} messages.
                     * @param message ListScanConfigsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1beta.IListScanConfigsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListScanConfigsResponse message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1beta.ListScanConfigsResponse.verify|verify} messages.
                     * @param message ListScanConfigsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1beta.IListScanConfigsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListScanConfigsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListScanConfigsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1beta.ListScanConfigsResponse;

                    /**
                     * Decodes a ListScanConfigsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListScanConfigsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1beta.ListScanConfigsResponse;

                    /**
                     * Verifies a ListScanConfigsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListScanConfigsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListScanConfigsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1beta.ListScanConfigsResponse;

                    /**
                     * Creates a plain object from a ListScanConfigsResponse message. Also converts values to other types if specified.
                     * @param message ListScanConfigsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1beta.ListScanConfigsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListScanConfigsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a StartScanRunRequest. */
                interface IStartScanRunRequest {

                    /** StartScanRunRequest name */
                    name?: (string|null);
                }

                /** Represents a StartScanRunRequest. */
                class StartScanRunRequest implements IStartScanRunRequest {

                    /**
                     * Constructs a new StartScanRunRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1beta.IStartScanRunRequest);

                    /** StartScanRunRequest name. */
                    public name: string;

                    /**
                     * Creates a new StartScanRunRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StartScanRunRequest instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1beta.IStartScanRunRequest): google.cloud.websecurityscanner.v1beta.StartScanRunRequest;

                    /**
                     * Encodes the specified StartScanRunRequest message. Does not implicitly {@link google.cloud.websecurityscanner.v1beta.StartScanRunRequest.verify|verify} messages.
                     * @param message StartScanRunRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1beta.IStartScanRunRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StartScanRunRequest message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1beta.StartScanRunRequest.verify|verify} messages.
                     * @param message StartScanRunRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1beta.IStartScanRunRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StartScanRunRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StartScanRunRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1beta.StartScanRunRequest;

                    /**
                     * Decodes a StartScanRunRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StartScanRunRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1beta.StartScanRunRequest;

                    /**
                     * Verifies a StartScanRunRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StartScanRunRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StartScanRunRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1beta.StartScanRunRequest;

                    /**
                     * Creates a plain object from a StartScanRunRequest message. Also converts values to other types if specified.
                     * @param message StartScanRunRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1beta.StartScanRunRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StartScanRunRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetScanRunRequest. */
                interface IGetScanRunRequest {

                    /** GetScanRunRequest name */
                    name?: (string|null);
                }

                /** Represents a GetScanRunRequest. */
                class GetScanRunRequest implements IGetScanRunRequest {

                    /**
                     * Constructs a new GetScanRunRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1beta.IGetScanRunRequest);

                    /** GetScanRunRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetScanRunRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetScanRunRequest instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1beta.IGetScanRunRequest): google.cloud.websecurityscanner.v1beta.GetScanRunRequest;

                    /**
                     * Encodes the specified GetScanRunRequest message. Does not implicitly {@link google.cloud.websecurityscanner.v1beta.GetScanRunRequest.verify|verify} messages.
                     * @param message GetScanRunRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1beta.IGetScanRunRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetScanRunRequest message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1beta.GetScanRunRequest.verify|verify} messages.
                     * @param message GetScanRunRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1beta.IGetScanRunRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetScanRunRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetScanRunRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1beta.GetScanRunRequest;

                    /**
                     * Decodes a GetScanRunRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetScanRunRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1beta.GetScanRunRequest;

                    /**
                     * Verifies a GetScanRunRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetScanRunRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetScanRunRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1beta.GetScanRunRequest;

                    /**
                     * Creates a plain object from a GetScanRunRequest message. Also converts values to other types if specified.
                     * @param message GetScanRunRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1beta.GetScanRunRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetScanRunRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListScanRunsRequest. */
                interface IListScanRunsRequest {

                    /** ListScanRunsRequest parent */
                    parent?: (string|null);

                    /** ListScanRunsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListScanRunsRequest pageSize */
                    pageSize?: (number|null);
                }

                /** Represents a ListScanRunsRequest. */
                class ListScanRunsRequest implements IListScanRunsRequest {

                    /**
                     * Constructs a new ListScanRunsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1beta.IListScanRunsRequest);

                    /** ListScanRunsRequest parent. */
                    public parent: string;

                    /** ListScanRunsRequest pageToken. */
                    public pageToken: string;

                    /** ListScanRunsRequest pageSize. */
                    public pageSize: number;

                    /**
                     * Creates a new ListScanRunsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListScanRunsRequest instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1beta.IListScanRunsRequest): google.cloud.websecurityscanner.v1beta.ListScanRunsRequest;

                    /**
                     * Encodes the specified ListScanRunsRequest message. Does not implicitly {@link google.cloud.websecurityscanner.v1beta.ListScanRunsRequest.verify|verify} messages.
                     * @param message ListScanRunsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1beta.IListScanRunsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListScanRunsRequest message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1beta.ListScanRunsRequest.verify|verify} messages.
                     * @param message ListScanRunsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1beta.IListScanRunsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListScanRunsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListScanRunsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1beta.ListScanRunsRequest;

                    /**
                     * Decodes a ListScanRunsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListScanRunsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1beta.ListScanRunsRequest;

                    /**
                     * Verifies a ListScanRunsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListScanRunsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListScanRunsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1beta.ListScanRunsRequest;

                    /**
                     * Creates a plain object from a ListScanRunsRequest message. Also converts values to other types if specified.
                     * @param message ListScanRunsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1beta.ListScanRunsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListScanRunsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListScanRunsResponse. */
                interface IListScanRunsResponse {

                    /** ListScanRunsResponse scanRuns */
                    scanRuns?: (google.cloud.websecurityscanner.v1beta.IScanRun[]|null);

                    /** ListScanRunsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListScanRunsResponse. */
                class ListScanRunsResponse implements IListScanRunsResponse {

                    /**
                     * Constructs a new ListScanRunsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1beta.IListScanRunsResponse);

                    /** ListScanRunsResponse scanRuns. */
                    public scanRuns: google.cloud.websecurityscanner.v1beta.IScanRun[];

                    /** ListScanRunsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListScanRunsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListScanRunsResponse instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1beta.IListScanRunsResponse): google.cloud.websecurityscanner.v1beta.ListScanRunsResponse;

                    /**
                     * Encodes the specified ListScanRunsResponse message. Does not implicitly {@link google.cloud.websecurityscanner.v1beta.ListScanRunsResponse.verify|verify} messages.
                     * @param message ListScanRunsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1beta.IListScanRunsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListScanRunsResponse message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1beta.ListScanRunsResponse.verify|verify} messages.
                     * @param message ListScanRunsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1beta.IListScanRunsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListScanRunsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListScanRunsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1beta.ListScanRunsResponse;

                    /**
                     * Decodes a ListScanRunsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListScanRunsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1beta.ListScanRunsResponse;

                    /**
                     * Verifies a ListScanRunsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListScanRunsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListScanRunsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1beta.ListScanRunsResponse;

                    /**
                     * Creates a plain object from a ListScanRunsResponse message. Also converts values to other types if specified.
                     * @param message ListScanRunsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1beta.ListScanRunsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListScanRunsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a StopScanRunRequest. */
                interface IStopScanRunRequest {

                    /** StopScanRunRequest name */
                    name?: (string|null);
                }

                /** Represents a StopScanRunRequest. */
                class StopScanRunRequest implements IStopScanRunRequest {

                    /**
                     * Constructs a new StopScanRunRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1beta.IStopScanRunRequest);

                    /** StopScanRunRequest name. */
                    public name: string;

                    /**
                     * Creates a new StopScanRunRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StopScanRunRequest instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1beta.IStopScanRunRequest): google.cloud.websecurityscanner.v1beta.StopScanRunRequest;

                    /**
                     * Encodes the specified StopScanRunRequest message. Does not implicitly {@link google.cloud.websecurityscanner.v1beta.StopScanRunRequest.verify|verify} messages.
                     * @param message StopScanRunRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1beta.IStopScanRunRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StopScanRunRequest message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1beta.StopScanRunRequest.verify|verify} messages.
                     * @param message StopScanRunRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1beta.IStopScanRunRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StopScanRunRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StopScanRunRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1beta.StopScanRunRequest;

                    /**
                     * Decodes a StopScanRunRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StopScanRunRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1beta.StopScanRunRequest;

                    /**
                     * Verifies a StopScanRunRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StopScanRunRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StopScanRunRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1beta.StopScanRunRequest;

                    /**
                     * Creates a plain object from a StopScanRunRequest message. Also converts values to other types if specified.
                     * @param message StopScanRunRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1beta.StopScanRunRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StopScanRunRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListCrawledUrlsRequest. */
                interface IListCrawledUrlsRequest {

                    /** ListCrawledUrlsRequest parent */
                    parent?: (string|null);

                    /** ListCrawledUrlsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListCrawledUrlsRequest pageSize */
                    pageSize?: (number|null);
                }

                /** Represents a ListCrawledUrlsRequest. */
                class ListCrawledUrlsRequest implements IListCrawledUrlsRequest {

                    /**
                     * Constructs a new ListCrawledUrlsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1beta.IListCrawledUrlsRequest);

                    /** ListCrawledUrlsRequest parent. */
                    public parent: string;

                    /** ListCrawledUrlsRequest pageToken. */
                    public pageToken: string;

                    /** ListCrawledUrlsRequest pageSize. */
                    public pageSize: number;

                    /**
                     * Creates a new ListCrawledUrlsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListCrawledUrlsRequest instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1beta.IListCrawledUrlsRequest): google.cloud.websecurityscanner.v1beta.ListCrawledUrlsRequest;

                    /**
                     * Encodes the specified ListCrawledUrlsRequest message. Does not implicitly {@link google.cloud.websecurityscanner.v1beta.ListCrawledUrlsRequest.verify|verify} messages.
                     * @param message ListCrawledUrlsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1beta.IListCrawledUrlsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListCrawledUrlsRequest message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1beta.ListCrawledUrlsRequest.verify|verify} messages.
                     * @param message ListCrawledUrlsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1beta.IListCrawledUrlsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListCrawledUrlsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListCrawledUrlsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1beta.ListCrawledUrlsRequest;

                    /**
                     * Decodes a ListCrawledUrlsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListCrawledUrlsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1beta.ListCrawledUrlsRequest;

                    /**
                     * Verifies a ListCrawledUrlsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListCrawledUrlsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListCrawledUrlsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1beta.ListCrawledUrlsRequest;

                    /**
                     * Creates a plain object from a ListCrawledUrlsRequest message. Also converts values to other types if specified.
                     * @param message ListCrawledUrlsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1beta.ListCrawledUrlsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListCrawledUrlsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListCrawledUrlsResponse. */
                interface IListCrawledUrlsResponse {

                    /** ListCrawledUrlsResponse crawledUrls */
                    crawledUrls?: (google.cloud.websecurityscanner.v1beta.ICrawledUrl[]|null);

                    /** ListCrawledUrlsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListCrawledUrlsResponse. */
                class ListCrawledUrlsResponse implements IListCrawledUrlsResponse {

                    /**
                     * Constructs a new ListCrawledUrlsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1beta.IListCrawledUrlsResponse);

                    /** ListCrawledUrlsResponse crawledUrls. */
                    public crawledUrls: google.cloud.websecurityscanner.v1beta.ICrawledUrl[];

                    /** ListCrawledUrlsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListCrawledUrlsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListCrawledUrlsResponse instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1beta.IListCrawledUrlsResponse): google.cloud.websecurityscanner.v1beta.ListCrawledUrlsResponse;

                    /**
                     * Encodes the specified ListCrawledUrlsResponse message. Does not implicitly {@link google.cloud.websecurityscanner.v1beta.ListCrawledUrlsResponse.verify|verify} messages.
                     * @param message ListCrawledUrlsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1beta.IListCrawledUrlsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListCrawledUrlsResponse message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1beta.ListCrawledUrlsResponse.verify|verify} messages.
                     * @param message ListCrawledUrlsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1beta.IListCrawledUrlsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListCrawledUrlsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListCrawledUrlsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1beta.ListCrawledUrlsResponse;

                    /**
                     * Decodes a ListCrawledUrlsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListCrawledUrlsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1beta.ListCrawledUrlsResponse;

                    /**
                     * Verifies a ListCrawledUrlsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListCrawledUrlsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListCrawledUrlsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1beta.ListCrawledUrlsResponse;

                    /**
                     * Creates a plain object from a ListCrawledUrlsResponse message. Also converts values to other types if specified.
                     * @param message ListCrawledUrlsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1beta.ListCrawledUrlsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListCrawledUrlsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetFindingRequest. */
                interface IGetFindingRequest {

                    /** GetFindingRequest name */
                    name?: (string|null);
                }

                /** Represents a GetFindingRequest. */
                class GetFindingRequest implements IGetFindingRequest {

                    /**
                     * Constructs a new GetFindingRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1beta.IGetFindingRequest);

                    /** GetFindingRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetFindingRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetFindingRequest instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1beta.IGetFindingRequest): google.cloud.websecurityscanner.v1beta.GetFindingRequest;

                    /**
                     * Encodes the specified GetFindingRequest message. Does not implicitly {@link google.cloud.websecurityscanner.v1beta.GetFindingRequest.verify|verify} messages.
                     * @param message GetFindingRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1beta.IGetFindingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetFindingRequest message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1beta.GetFindingRequest.verify|verify} messages.
                     * @param message GetFindingRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1beta.IGetFindingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetFindingRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetFindingRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1beta.GetFindingRequest;

                    /**
                     * Decodes a GetFindingRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetFindingRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1beta.GetFindingRequest;

                    /**
                     * Verifies a GetFindingRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetFindingRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetFindingRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1beta.GetFindingRequest;

                    /**
                     * Creates a plain object from a GetFindingRequest message. Also converts values to other types if specified.
                     * @param message GetFindingRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1beta.GetFindingRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetFindingRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListFindingsRequest. */
                interface IListFindingsRequest {

                    /** ListFindingsRequest parent */
                    parent?: (string|null);

                    /** ListFindingsRequest filter */
                    filter?: (string|null);

                    /** ListFindingsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListFindingsRequest pageSize */
                    pageSize?: (number|null);
                }

                /** Represents a ListFindingsRequest. */
                class ListFindingsRequest implements IListFindingsRequest {

                    /**
                     * Constructs a new ListFindingsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1beta.IListFindingsRequest);

                    /** ListFindingsRequest parent. */
                    public parent: string;

                    /** ListFindingsRequest filter. */
                    public filter: string;

                    /** ListFindingsRequest pageToken. */
                    public pageToken: string;

                    /** ListFindingsRequest pageSize. */
                    public pageSize: number;

                    /**
                     * Creates a new ListFindingsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListFindingsRequest instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1beta.IListFindingsRequest): google.cloud.websecurityscanner.v1beta.ListFindingsRequest;

                    /**
                     * Encodes the specified ListFindingsRequest message. Does not implicitly {@link google.cloud.websecurityscanner.v1beta.ListFindingsRequest.verify|verify} messages.
                     * @param message ListFindingsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1beta.IListFindingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListFindingsRequest message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1beta.ListFindingsRequest.verify|verify} messages.
                     * @param message ListFindingsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1beta.IListFindingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListFindingsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListFindingsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1beta.ListFindingsRequest;

                    /**
                     * Decodes a ListFindingsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListFindingsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1beta.ListFindingsRequest;

                    /**
                     * Verifies a ListFindingsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListFindingsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListFindingsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1beta.ListFindingsRequest;

                    /**
                     * Creates a plain object from a ListFindingsRequest message. Also converts values to other types if specified.
                     * @param message ListFindingsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1beta.ListFindingsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListFindingsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListFindingsResponse. */
                interface IListFindingsResponse {

                    /** ListFindingsResponse findings */
                    findings?: (google.cloud.websecurityscanner.v1beta.IFinding[]|null);

                    /** ListFindingsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListFindingsResponse. */
                class ListFindingsResponse implements IListFindingsResponse {

                    /**
                     * Constructs a new ListFindingsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1beta.IListFindingsResponse);

                    /** ListFindingsResponse findings. */
                    public findings: google.cloud.websecurityscanner.v1beta.IFinding[];

                    /** ListFindingsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListFindingsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListFindingsResponse instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1beta.IListFindingsResponse): google.cloud.websecurityscanner.v1beta.ListFindingsResponse;

                    /**
                     * Encodes the specified ListFindingsResponse message. Does not implicitly {@link google.cloud.websecurityscanner.v1beta.ListFindingsResponse.verify|verify} messages.
                     * @param message ListFindingsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1beta.IListFindingsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListFindingsResponse message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1beta.ListFindingsResponse.verify|verify} messages.
                     * @param message ListFindingsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1beta.IListFindingsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListFindingsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListFindingsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1beta.ListFindingsResponse;

                    /**
                     * Decodes a ListFindingsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListFindingsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1beta.ListFindingsResponse;

                    /**
                     * Verifies a ListFindingsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListFindingsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListFindingsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1beta.ListFindingsResponse;

                    /**
                     * Creates a plain object from a ListFindingsResponse message. Also converts values to other types if specified.
                     * @param message ListFindingsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1beta.ListFindingsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListFindingsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListFindingTypeStatsRequest. */
                interface IListFindingTypeStatsRequest {

                    /** ListFindingTypeStatsRequest parent */
                    parent?: (string|null);
                }

                /** Represents a ListFindingTypeStatsRequest. */
                class ListFindingTypeStatsRequest implements IListFindingTypeStatsRequest {

                    /**
                     * Constructs a new ListFindingTypeStatsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1beta.IListFindingTypeStatsRequest);

                    /** ListFindingTypeStatsRequest parent. */
                    public parent: string;

                    /**
                     * Creates a new ListFindingTypeStatsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListFindingTypeStatsRequest instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1beta.IListFindingTypeStatsRequest): google.cloud.websecurityscanner.v1beta.ListFindingTypeStatsRequest;

                    /**
                     * Encodes the specified ListFindingTypeStatsRequest message. Does not implicitly {@link google.cloud.websecurityscanner.v1beta.ListFindingTypeStatsRequest.verify|verify} messages.
                     * @param message ListFindingTypeStatsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1beta.IListFindingTypeStatsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListFindingTypeStatsRequest message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1beta.ListFindingTypeStatsRequest.verify|verify} messages.
                     * @param message ListFindingTypeStatsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1beta.IListFindingTypeStatsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListFindingTypeStatsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListFindingTypeStatsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1beta.ListFindingTypeStatsRequest;

                    /**
                     * Decodes a ListFindingTypeStatsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListFindingTypeStatsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1beta.ListFindingTypeStatsRequest;

                    /**
                     * Verifies a ListFindingTypeStatsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListFindingTypeStatsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListFindingTypeStatsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1beta.ListFindingTypeStatsRequest;

                    /**
                     * Creates a plain object from a ListFindingTypeStatsRequest message. Also converts values to other types if specified.
                     * @param message ListFindingTypeStatsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1beta.ListFindingTypeStatsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListFindingTypeStatsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListFindingTypeStatsResponse. */
                interface IListFindingTypeStatsResponse {

                    /** ListFindingTypeStatsResponse findingTypeStats */
                    findingTypeStats?: (google.cloud.websecurityscanner.v1beta.IFindingTypeStats[]|null);
                }

                /** Represents a ListFindingTypeStatsResponse. */
                class ListFindingTypeStatsResponse implements IListFindingTypeStatsResponse {

                    /**
                     * Constructs a new ListFindingTypeStatsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.websecurityscanner.v1beta.IListFindingTypeStatsResponse);

                    /** ListFindingTypeStatsResponse findingTypeStats. */
                    public findingTypeStats: google.cloud.websecurityscanner.v1beta.IFindingTypeStats[];

                    /**
                     * Creates a new ListFindingTypeStatsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListFindingTypeStatsResponse instance
                     */
                    public static create(properties?: google.cloud.websecurityscanner.v1beta.IListFindingTypeStatsResponse): google.cloud.websecurityscanner.v1beta.ListFindingTypeStatsResponse;

                    /**
                     * Encodes the specified ListFindingTypeStatsResponse message. Does not implicitly {@link google.cloud.websecurityscanner.v1beta.ListFindingTypeStatsResponse.verify|verify} messages.
                     * @param message ListFindingTypeStatsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.websecurityscanner.v1beta.IListFindingTypeStatsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListFindingTypeStatsResponse message, length delimited. Does not implicitly {@link google.cloud.websecurityscanner.v1beta.ListFindingTypeStatsResponse.verify|verify} messages.
                     * @param message ListFindingTypeStatsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.websecurityscanner.v1beta.IListFindingTypeStatsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListFindingTypeStatsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListFindingTypeStatsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.websecurityscanner.v1beta.ListFindingTypeStatsResponse;

                    /**
                     * Decodes a ListFindingTypeStatsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListFindingTypeStatsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.websecurityscanner.v1beta.ListFindingTypeStatsResponse;

                    /**
                     * Verifies a ListFindingTypeStatsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListFindingTypeStatsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListFindingTypeStatsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.websecurityscanner.v1beta.ListFindingTypeStatsResponse;

                    /**
                     * Creates a plain object from a ListFindingTypeStatsResponse message. Also converts values to other types if specified.
                     * @param message ListFindingTypeStatsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.websecurityscanner.v1beta.ListFindingTypeStatsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListFindingTypeStatsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }
        }
    }

    /** Namespace api. */
    namespace api {

        /** FieldBehavior enum. */
        enum FieldBehavior {
            FIELD_BEHAVIOR_UNSPECIFIED = 0,
            OPTIONAL = 1,
            REQUIRED = 2,
            OUTPUT_ONLY = 3,
            INPUT_ONLY = 4,
            IMMUTABLE = 5,
            UNORDERED_LIST = 6,
            NON_EMPTY_DEFAULT = 7
        }

        /** Properties of a ResourceDescriptor. */
        interface IResourceDescriptor {

            /** ResourceDescriptor type */
            type?: (string|null);

            /** ResourceDescriptor pattern */
            pattern?: (string[]|null);

            /** ResourceDescriptor nameField */
            nameField?: (string|null);

            /** ResourceDescriptor history */
            history?: (google.api.ResourceDescriptor.History|keyof typeof google.api.ResourceDescriptor.History|null);

            /** ResourceDescriptor plural */
            plural?: (string|null);

            /** ResourceDescriptor singular */
            singular?: (string|null);

            /** ResourceDescriptor style */
            style?: (google.api.ResourceDescriptor.Style[]|null);
        }

        /** Represents a ResourceDescriptor. */
        class ResourceDescriptor implements IResourceDescriptor {

            /**
             * Constructs a new ResourceDescriptor.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IResourceDescriptor);

            /** ResourceDescriptor type. */
            public type: string;

            /** ResourceDescriptor pattern. */
            public pattern: string[];

            /** ResourceDescriptor nameField. */
            public nameField: string;

            /** ResourceDescriptor history. */
            public history: (google.api.ResourceDescriptor.History|keyof typeof google.api.ResourceDescriptor.History);

            /** ResourceDescriptor plural. */
            public plural: string;

            /** ResourceDescriptor singular. */
            public singular: string;

            /** ResourceDescriptor style. */
            public style: google.api.ResourceDescriptor.Style[];

            /**
             * Creates a new ResourceDescriptor instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResourceDescriptor instance
             */
            public static create(properties?: google.api.IResourceDescriptor): google.api.ResourceDescriptor;

            /**
             * Encodes the specified ResourceDescriptor message. Does not implicitly {@link google.api.ResourceDescriptor.verify|verify} messages.
             * @param message ResourceDescriptor message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IResourceDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResourceDescriptor message, length delimited. Does not implicitly {@link google.api.ResourceDescriptor.verify|verify} messages.
             * @param message ResourceDescriptor message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IResourceDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResourceDescriptor message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResourceDescriptor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.ResourceDescriptor;

            /**
             * Decodes a ResourceDescriptor message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResourceDescriptor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.ResourceDescriptor;

            /**
             * Verifies a ResourceDescriptor message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResourceDescriptor message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResourceDescriptor
             */
            public static fromObject(object: { [k: string]: any }): google.api.ResourceDescriptor;

            /**
             * Creates a plain object from a ResourceDescriptor message. Also converts values to other types if specified.
             * @param message ResourceDescriptor
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.ResourceDescriptor, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResourceDescriptor to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace ResourceDescriptor {

            /** History enum. */
            enum History {
                HISTORY_UNSPECIFIED = 0,
                ORIGINALLY_SINGLE_PATTERN = 1,
                FUTURE_MULTI_PATTERN = 2
            }

            /** Style enum. */
            enum Style {
                STYLE_UNSPECIFIED = 0,
                DECLARATIVE_FRIENDLY = 1
            }
        }

        /** Properties of a ResourceReference. */
        interface IResourceReference {

            /** ResourceReference type */
            type?: (string|null);

            /** ResourceReference childType */
            childType?: (string|null);
        }

        /** Represents a ResourceReference. */
        class ResourceReference implements IResourceReference {

            /**
             * Constructs a new ResourceReference.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IResourceReference);

            /** ResourceReference type. */
            public type: string;

            /** ResourceReference childType. */
            public childType: string;

            /**
             * Creates a new ResourceReference instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResourceReference instance
             */
            public static create(properties?: google.api.IResourceReference): google.api.ResourceReference;

            /**
             * Encodes the specified ResourceReference message. Does not implicitly {@link google.api.ResourceReference.verify|verify} messages.
             * @param message ResourceReference message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IResourceReference, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResourceReference message, length delimited. Does not implicitly {@link google.api.ResourceReference.verify|verify} messages.
             * @param message ResourceReference message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IResourceReference, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResourceReference message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResourceReference
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.ResourceReference;

            /**
             * Decodes a ResourceReference message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResourceReference
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.ResourceReference;

            /**
             * Verifies a ResourceReference message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResourceReference message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResourceReference
             */
            public static fromObject(object: { [k: string]: any }): google.api.ResourceReference;

            /**
             * Creates a plain object from a ResourceReference message. Also converts values to other types if specified.
             * @param message ResourceReference
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.ResourceReference, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResourceReference to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Http. */
        interface IHttp {

            /** Http rules */
            rules?: (google.api.IHttpRule[]|null);

            /** Http fullyDecodeReservedExpansion */
            fullyDecodeReservedExpansion?: (boolean|null);
        }

        /** Represents a Http. */
        class Http implements IHttp {

            /**
             * Constructs a new Http.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttp);

            /** Http rules. */
            public rules: google.api.IHttpRule[];

            /** Http fullyDecodeReservedExpansion. */
            public fullyDecodeReservedExpansion: boolean;

            /**
             * Creates a new Http instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Http instance
             */
            public static create(properties?: google.api.IHttp): google.api.Http;

            /**
             * Encodes the specified Http message. Does not implicitly {@link google.api.Http.verify|verify} messages.
             * @param message Http message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IHttp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Http message, length delimited. Does not implicitly {@link google.api.Http.verify|verify} messages.
             * @param message Http message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IHttp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Http message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Http
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Http;

            /**
             * Decodes a Http message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Http
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.Http;

            /**
             * Verifies a Http message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Http message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Http
             */
            public static fromObject(object: { [k: string]: any }): google.api.Http;

            /**
             * Creates a plain object from a Http message. Also converts values to other types if specified.
             * @param message Http
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.Http, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Http to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a HttpRule. */
        interface IHttpRule {

            /** HttpRule selector */
            selector?: (string|null);

            /** HttpRule get */
            get?: (string|null);

            /** HttpRule put */
            put?: (string|null);

            /** HttpRule post */
            post?: (string|null);

            /** HttpRule delete */
            "delete"?: (string|null);

            /** HttpRule patch */
            patch?: (string|null);

            /** HttpRule custom */
            custom?: (google.api.ICustomHttpPattern|null);

            /** HttpRule body */
            body?: (string|null);

            /** HttpRule responseBody */
            responseBody?: (string|null);

            /** HttpRule additionalBindings */
            additionalBindings?: (google.api.IHttpRule[]|null);
        }

        /** Represents a HttpRule. */
        class HttpRule implements IHttpRule {

            /**
             * Constructs a new HttpRule.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttpRule);

            /** HttpRule selector. */
            public selector: string;

            /** HttpRule get. */
            public get?: (string|null);

            /** HttpRule put. */
            public put?: (string|null);

            /** HttpRule post. */
            public post?: (string|null);

            /** HttpRule delete. */
            public delete?: (string|null);

            /** HttpRule patch. */
            public patch?: (string|null);

            /** HttpRule custom. */
            public custom?: (google.api.ICustomHttpPattern|null);

            /** HttpRule body. */
            public body: string;

            /** HttpRule responseBody. */
            public responseBody: string;

            /** HttpRule additionalBindings. */
            public additionalBindings: google.api.IHttpRule[];

            /** HttpRule pattern. */
            public pattern?: ("get"|"put"|"post"|"delete"|"patch"|"custom");

            /**
             * Creates a new HttpRule instance using the specified properties.
             * @param [properties] Properties to set
             * @returns HttpRule instance
             */
            public static create(properties?: google.api.IHttpRule): google.api.HttpRule;

            /**
             * Encodes the specified HttpRule message. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
             * @param message HttpRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IHttpRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified HttpRule message, length delimited. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
             * @param message HttpRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IHttpRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a HttpRule message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns HttpRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.HttpRule;

            /**
             * Decodes a HttpRule message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns HttpRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.HttpRule;

            /**
             * Verifies a HttpRule message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a HttpRule message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns HttpRule
             */
            public static fromObject(object: { [k: string]: any }): google.api.HttpRule;

            /**
             * Creates a plain object from a HttpRule message. Also converts values to other types if specified.
             * @param message HttpRule
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.HttpRule, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this HttpRule to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CustomHttpPattern. */
        interface ICustomHttpPattern {

            /** CustomHttpPattern kind */
            kind?: (string|null);

            /** CustomHttpPattern path */
            path?: (string|null);
        }

        /** Represents a CustomHttpPattern. */
        class CustomHttpPattern implements ICustomHttpPattern {

            /**
             * Constructs a new CustomHttpPattern.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.ICustomHttpPattern);

            /** CustomHttpPattern kind. */
            public kind: string;

            /** CustomHttpPattern path. */
            public path: string;

            /**
             * Creates a new CustomHttpPattern instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CustomHttpPattern instance
             */
            public static create(properties?: google.api.ICustomHttpPattern): google.api.CustomHttpPattern;

            /**
             * Encodes the specified CustomHttpPattern message. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
             * @param message CustomHttpPattern message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.ICustomHttpPattern, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CustomHttpPattern message, length delimited. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
             * @param message CustomHttpPattern message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.ICustomHttpPattern, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CustomHttpPattern message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CustomHttpPattern
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.CustomHttpPattern;

            /**
             * Decodes a CustomHttpPattern message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CustomHttpPattern
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.CustomHttpPattern;

            /**
             * Verifies a CustomHttpPattern message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CustomHttpPattern message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CustomHttpPattern
             */
            public static fromObject(object: { [k: string]: any }): google.api.CustomHttpPattern;

            /**
             * Creates a plain object from a CustomHttpPattern message. Also converts values to other types if specified.
             * @param message CustomHttpPattern
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.CustomHttpPattern, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CustomHttpPattern to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a FileDescriptorSet. */
        interface IFileDescriptorSet {

            /** FileDescriptorSet file */
            file?: (google.protobuf.IFileDescriptorProto[]|null);
        }

        /** Represents a FileDescriptorSet. */
        class FileDescriptorSet implements IFileDescriptorSet {

            /**
             * Constructs a new FileDescriptorSet.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorSet);

            /** FileDescriptorSet file. */
            public file: google.protobuf.IFileDescriptorProto[];

            /**
             * Creates a new FileDescriptorSet instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorSet instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorSet): google.protobuf.FileDescriptorSet;

            /**
             * Encodes the specified FileDescriptorSet message. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorSet message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorSet;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorSet;

            /**
             * Verifies a FileDescriptorSet message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorSet
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorSet;

            /**
             * Creates a plain object from a FileDescriptorSet message. Also converts values to other types if specified.
             * @param message FileDescriptorSet
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorSet to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FileDescriptorProto. */
        interface IFileDescriptorProto {

            /** FileDescriptorProto name */
            name?: (string|null);

            /** FileDescriptorProto package */
            "package"?: (string|null);

            /** FileDescriptorProto dependency */
            dependency?: (string[]|null);

            /** FileDescriptorProto publicDependency */
            publicDependency?: (number[]|null);

            /** FileDescriptorProto weakDependency */
            weakDependency?: (number[]|null);

            /** FileDescriptorProto messageType */
            messageType?: (google.protobuf.IDescriptorProto[]|null);

            /** FileDescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** FileDescriptorProto service */
            service?: (google.protobuf.IServiceDescriptorProto[]|null);

            /** FileDescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** FileDescriptorProto options */
            options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo */
            sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax */
            syntax?: (string|null);
        }

        /** Represents a FileDescriptorProto. */
        class FileDescriptorProto implements IFileDescriptorProto {

            /**
             * Constructs a new FileDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorProto);

            /** FileDescriptorProto name. */
            public name: string;

            /** FileDescriptorProto package. */
            public package: string;

            /** FileDescriptorProto dependency. */
            public dependency: string[];

            /** FileDescriptorProto publicDependency. */
            public publicDependency: number[];

            /** FileDescriptorProto weakDependency. */
            public weakDependency: number[];

            /** FileDescriptorProto messageType. */
            public messageType: google.protobuf.IDescriptorProto[];

            /** FileDescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** FileDescriptorProto service. */
            public service: google.protobuf.IServiceDescriptorProto[];

            /** FileDescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** FileDescriptorProto options. */
            public options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo. */
            public sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax. */
            public syntax: string;

            /**
             * Creates a new FileDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorProto): google.protobuf.FileDescriptorProto;

            /**
             * Encodes the specified FileDescriptorProto message. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorProto;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorProto;

            /**
             * Verifies a FileDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorProto;

            /**
             * Creates a plain object from a FileDescriptorProto message. Also converts values to other types if specified.
             * @param message FileDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DescriptorProto. */
        interface IDescriptorProto {

            /** DescriptorProto name */
            name?: (string|null);

            /** DescriptorProto field */
            field?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto nestedType */
            nestedType?: (google.protobuf.IDescriptorProto[]|null);

            /** DescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** DescriptorProto extensionRange */
            extensionRange?: (google.protobuf.DescriptorProto.IExtensionRange[]|null);

            /** DescriptorProto oneofDecl */
            oneofDecl?: (google.protobuf.IOneofDescriptorProto[]|null);

            /** DescriptorProto options */
            options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange */
            reservedRange?: (google.protobuf.DescriptorProto.IReservedRange[]|null);

            /** DescriptorProto reservedName */
            reservedName?: (string[]|null);
        }

        /** Represents a DescriptorProto. */
        class DescriptorProto implements IDescriptorProto {

            /**
             * Constructs a new DescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDescriptorProto);

            /** DescriptorProto name. */
            public name: string;

            /** DescriptorProto field. */
            public field: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto nestedType. */
            public nestedType: google.protobuf.IDescriptorProto[];

            /** DescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** DescriptorProto extensionRange. */
            public extensionRange: google.protobuf.DescriptorProto.IExtensionRange[];

            /** DescriptorProto oneofDecl. */
            public oneofDecl: google.protobuf.IOneofDescriptorProto[];

            /** DescriptorProto options. */
            public options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange. */
            public reservedRange: google.protobuf.DescriptorProto.IReservedRange[];

            /** DescriptorProto reservedName. */
            public reservedName: string[];

            /**
             * Creates a new DescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DescriptorProto instance
             */
            public static create(properties?: google.protobuf.IDescriptorProto): google.protobuf.DescriptorProto;

            /**
             * Encodes the specified DescriptorProto message. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto;

            /**
             * Verifies a DescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto;

            /**
             * Creates a plain object from a DescriptorProto message. Also converts values to other types if specified.
             * @param message DescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.DescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace DescriptorProto {

            /** Properties of an ExtensionRange. */
            interface IExtensionRange {

                /** ExtensionRange start */
                start?: (number|null);

                /** ExtensionRange end */
                end?: (number|null);

                /** ExtensionRange options */
                options?: (google.protobuf.IExtensionRangeOptions|null);
            }

            /** Represents an ExtensionRange. */
            class ExtensionRange implements IExtensionRange {

                /**
                 * Constructs a new ExtensionRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IExtensionRange);

                /** ExtensionRange start. */
                public start: number;

                /** ExtensionRange end. */
                public end: number;

                /** ExtensionRange options. */
                public options?: (google.protobuf.IExtensionRangeOptions|null);

                /**
                 * Creates a new ExtensionRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ExtensionRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IExtensionRange): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Encodes the specified ExtensionRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ExtensionRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Verifies an ExtensionRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ExtensionRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Creates a plain object from an ExtensionRange message. Also converts values to other types if specified.
                 * @param message ExtensionRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ExtensionRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ExtensionRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ReservedRange. */
            interface IReservedRange {

                /** ReservedRange start */
                start?: (number|null);

                /** ReservedRange end */
                end?: (number|null);
            }

            /** Represents a ReservedRange. */
            class ReservedRange implements IReservedRange {

                /**
                 * Constructs a new ReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IReservedRange);

                /** ReservedRange start. */
                public start: number;

                /** ReservedRange end. */
                public end: number;

                /**
                 * Creates a new ReservedRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ReservedRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IReservedRange): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Encodes the specified ReservedRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ReservedRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Verifies a ReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ReservedRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Creates a plain object from a ReservedRange message. Also converts values to other types if specified.
                 * @param message ReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ReservedRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of an ExtensionRangeOptions. */
        interface IExtensionRangeOptions {

            /** ExtensionRangeOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an ExtensionRangeOptions. */
        class ExtensionRangeOptions implements IExtensionRangeOptions {

            /**
             * Constructs a new ExtensionRangeOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IExtensionRangeOptions);

            /** ExtensionRangeOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new ExtensionRangeOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExtensionRangeOptions instance
             */
            public static create(properties?: google.protobuf.IExtensionRangeOptions): google.protobuf.ExtensionRangeOptions;

            /**
             * Encodes the specified ExtensionRangeOptions message. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
             * @param message ExtensionRangeOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IExtensionRangeOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ExtensionRangeOptions message, length delimited. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
             * @param message ExtensionRangeOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IExtensionRangeOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExtensionRangeOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExtensionRangeOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ExtensionRangeOptions;

            /**
             * Decodes an ExtensionRangeOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ExtensionRangeOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ExtensionRangeOptions;

            /**
             * Verifies an ExtensionRangeOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ExtensionRangeOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ExtensionRangeOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ExtensionRangeOptions;

            /**
             * Creates a plain object from an ExtensionRangeOptions message. Also converts values to other types if specified.
             * @param message ExtensionRangeOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ExtensionRangeOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ExtensionRangeOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FieldDescriptorProto. */
        interface IFieldDescriptorProto {

            /** FieldDescriptorProto name */
            name?: (string|null);

            /** FieldDescriptorProto number */
            number?: (number|null);

            /** FieldDescriptorProto label */
            label?: (google.protobuf.FieldDescriptorProto.Label|keyof typeof google.protobuf.FieldDescriptorProto.Label|null);

            /** FieldDescriptorProto type */
            type?: (google.protobuf.FieldDescriptorProto.Type|keyof typeof google.protobuf.FieldDescriptorProto.Type|null);

            /** FieldDescriptorProto typeName */
            typeName?: (string|null);

            /** FieldDescriptorProto extendee */
            extendee?: (string|null);

            /** FieldDescriptorProto defaultValue */
            defaultValue?: (string|null);

            /** FieldDescriptorProto oneofIndex */
            oneofIndex?: (number|null);

            /** FieldDescriptorProto jsonName */
            jsonName?: (string|null);

            /** FieldDescriptorProto options */
            options?: (google.protobuf.IFieldOptions|null);

            /** FieldDescriptorProto proto3Optional */
            proto3Optional?: (boolean|null);
        }

        /** Represents a FieldDescriptorProto. */
        class FieldDescriptorProto implements IFieldDescriptorProto {

            /**
             * Constructs a new FieldDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldDescriptorProto);

            /** FieldDescriptorProto name. */
            public name: string;

            /** FieldDescriptorProto number. */
            public number: number;

            /** FieldDescriptorProto label. */
            public label: (google.protobuf.FieldDescriptorProto.Label|keyof typeof google.protobuf.FieldDescriptorProto.Label);

            /** FieldDescriptorProto type. */
            public type: (google.protobuf.FieldDescriptorProto.Type|keyof typeof google.protobuf.FieldDescriptorProto.Type);

            /** FieldDescriptorProto typeName. */
            public typeName: string;

            /** FieldDescriptorProto extendee. */
            public extendee: string;

            /** FieldDescriptorProto defaultValue. */
            public defaultValue: string;

            /** FieldDescriptorProto oneofIndex. */
            public oneofIndex: number;

            /** FieldDescriptorProto jsonName. */
            public jsonName: string;

            /** FieldDescriptorProto options. */
            public options?: (google.protobuf.IFieldOptions|null);

            /** FieldDescriptorProto proto3Optional. */
            public proto3Optional: boolean;

            /**
             * Creates a new FieldDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFieldDescriptorProto): google.protobuf.FieldDescriptorProto;

            /**
             * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldDescriptorProto;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldDescriptorProto;

            /**
             * Verifies a FieldDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldDescriptorProto;

            /**
             * Creates a plain object from a FieldDescriptorProto message. Also converts values to other types if specified.
             * @param message FieldDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FieldDescriptorProto {

            /** Type enum. */
            enum Type {
                TYPE_DOUBLE = 1,
                TYPE_FLOAT = 2,
                TYPE_INT64 = 3,
                TYPE_UINT64 = 4,
                TYPE_INT32 = 5,
                TYPE_FIXED64 = 6,
                TYPE_FIXED32 = 7,
                TYPE_BOOL = 8,
                TYPE_STRING = 9,
                TYPE_GROUP = 10,
                TYPE_MESSAGE = 11,
                TYPE_BYTES = 12,
                TYPE_UINT32 = 13,
                TYPE_ENUM = 14,
                TYPE_SFIXED32 = 15,
                TYPE_SFIXED64 = 16,
                TYPE_SINT32 = 17,
                TYPE_SINT64 = 18
            }

            /** Label enum. */
            enum Label {
                LABEL_OPTIONAL = 1,
                LABEL_REQUIRED = 2,
                LABEL_REPEATED = 3
            }
        }

        /** Properties of an OneofDescriptorProto. */
        interface IOneofDescriptorProto {

            /** OneofDescriptorProto name */
            name?: (string|null);

            /** OneofDescriptorProto options */
            options?: (google.protobuf.IOneofOptions|null);
        }

        /** Represents an OneofDescriptorProto. */
        class OneofDescriptorProto implements IOneofDescriptorProto {

            /**
             * Constructs a new OneofDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofDescriptorProto);

            /** OneofDescriptorProto name. */
            public name: string;

            /** OneofDescriptorProto options. */
            public options?: (google.protobuf.IOneofOptions|null);

            /**
             * Creates a new OneofDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IOneofDescriptorProto): google.protobuf.OneofDescriptorProto;

            /**
             * Encodes the specified OneofDescriptorProto message. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofDescriptorProto;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofDescriptorProto;

            /**
             * Verifies an OneofDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofDescriptorProto;

            /**
             * Creates a plain object from an OneofDescriptorProto message. Also converts values to other types if specified.
             * @param message OneofDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumDescriptorProto. */
        interface IEnumDescriptorProto {

            /** EnumDescriptorProto name */
            name?: (string|null);

            /** EnumDescriptorProto value */
            value?: (google.protobuf.IEnumValueDescriptorProto[]|null);

            /** EnumDescriptorProto options */
            options?: (google.protobuf.IEnumOptions|null);

            /** EnumDescriptorProto reservedRange */
            reservedRange?: (google.protobuf.EnumDescriptorProto.IEnumReservedRange[]|null);

            /** EnumDescriptorProto reservedName */
            reservedName?: (string[]|null);
        }

        /** Represents an EnumDescriptorProto. */
        class EnumDescriptorProto implements IEnumDescriptorProto {

            /**
             * Constructs a new EnumDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumDescriptorProto);

            /** EnumDescriptorProto name. */
            public name: string;

            /** EnumDescriptorProto value. */
            public value: google.protobuf.IEnumValueDescriptorProto[];

            /** EnumDescriptorProto options. */
            public options?: (google.protobuf.IEnumOptions|null);

            /** EnumDescriptorProto reservedRange. */
            public reservedRange: google.protobuf.EnumDescriptorProto.IEnumReservedRange[];

            /** EnumDescriptorProto reservedName. */
            public reservedName: string[];

            /**
             * Creates a new EnumDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumDescriptorProto): google.protobuf.EnumDescriptorProto;

            /**
             * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto;

            /**
             * Verifies an EnumDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto;

            /**
             * Creates a plain object from an EnumDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace EnumDescriptorProto {

            /** Properties of an EnumReservedRange. */
            interface IEnumReservedRange {

                /** EnumReservedRange start */
                start?: (number|null);

                /** EnumReservedRange end */
                end?: (number|null);
            }

            /** Represents an EnumReservedRange. */
            class EnumReservedRange implements IEnumReservedRange {

                /**
                 * Constructs a new EnumReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.EnumDescriptorProto.IEnumReservedRange);

                /** EnumReservedRange start. */
                public start: number;

                /** EnumReservedRange end. */
                public end: number;

                /**
                 * Creates a new EnumReservedRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns EnumReservedRange instance
                 */
                public static create(properties?: google.protobuf.EnumDescriptorProto.IEnumReservedRange): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Encodes the specified EnumReservedRange message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
                 * @param message EnumReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.EnumDescriptorProto.IEnumReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified EnumReservedRange message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
                 * @param message EnumReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.EnumDescriptorProto.IEnumReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an EnumReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns EnumReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Decodes an EnumReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns EnumReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Verifies an EnumReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an EnumReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns EnumReservedRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Creates a plain object from an EnumReservedRange message. Also converts values to other types if specified.
                 * @param message EnumReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.EnumDescriptorProto.EnumReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this EnumReservedRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of an EnumValueDescriptorProto. */
        interface IEnumValueDescriptorProto {

            /** EnumValueDescriptorProto name */
            name?: (string|null);

            /** EnumValueDescriptorProto number */
            number?: (number|null);

            /** EnumValueDescriptorProto options */
            options?: (google.protobuf.IEnumValueOptions|null);
        }

        /** Represents an EnumValueDescriptorProto. */
        class EnumValueDescriptorProto implements IEnumValueDescriptorProto {

            /**
             * Constructs a new EnumValueDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueDescriptorProto);

            /** EnumValueDescriptorProto name. */
            public name: string;

            /** EnumValueDescriptorProto number. */
            public number: number;

            /** EnumValueDescriptorProto options. */
            public options?: (google.protobuf.IEnumValueOptions|null);

            /**
             * Creates a new EnumValueDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumValueDescriptorProto): google.protobuf.EnumValueDescriptorProto;

            /**
             * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueDescriptorProto;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueDescriptorProto;

            /**
             * Verifies an EnumValueDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueDescriptorProto;

            /**
             * Creates a plain object from an EnumValueDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumValueDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ServiceDescriptorProto. */
        interface IServiceDescriptorProto {

            /** ServiceDescriptorProto name */
            name?: (string|null);

            /** ServiceDescriptorProto method */
            method?: (google.protobuf.IMethodDescriptorProto[]|null);

            /** ServiceDescriptorProto options */
            options?: (google.protobuf.IServiceOptions|null);
        }

        /** Represents a ServiceDescriptorProto. */
        class ServiceDescriptorProto implements IServiceDescriptorProto {

            /**
             * Constructs a new ServiceDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceDescriptorProto);

            /** ServiceDescriptorProto name. */
            public name: string;

            /** ServiceDescriptorProto method. */
            public method: google.protobuf.IMethodDescriptorProto[];

            /** ServiceDescriptorProto options. */
            public options?: (google.protobuf.IServiceOptions|null);

            /**
             * Creates a new ServiceDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IServiceDescriptorProto): google.protobuf.ServiceDescriptorProto;

            /**
             * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceDescriptorProto;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceDescriptorProto;

            /**
             * Verifies a ServiceDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceDescriptorProto;

            /**
             * Creates a plain object from a ServiceDescriptorProto message. Also converts values to other types if specified.
             * @param message ServiceDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MethodDescriptorProto. */
        interface IMethodDescriptorProto {

            /** MethodDescriptorProto name */
            name?: (string|null);

            /** MethodDescriptorProto inputType */
            inputType?: (string|null);

            /** MethodDescriptorProto outputType */
            outputType?: (string|null);

            /** MethodDescriptorProto options */
            options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming */
            clientStreaming?: (boolean|null);

            /** MethodDescriptorProto serverStreaming */
            serverStreaming?: (boolean|null);
        }

        /** Represents a MethodDescriptorProto. */
        class MethodDescriptorProto implements IMethodDescriptorProto {

            /**
             * Constructs a new MethodDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodDescriptorProto);

            /** MethodDescriptorProto name. */
            public name: string;

            /** MethodDescriptorProto inputType. */
            public inputType: string;

            /** MethodDescriptorProto outputType. */
            public outputType: string;

            /** MethodDescriptorProto options. */
            public options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming. */
            public clientStreaming: boolean;

            /** MethodDescriptorProto serverStreaming. */
            public serverStreaming: boolean;

            /**
             * Creates a new MethodDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IMethodDescriptorProto): google.protobuf.MethodDescriptorProto;

            /**
             * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodDescriptorProto;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodDescriptorProto;

            /**
             * Verifies a MethodDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodDescriptorProto;

            /**
             * Creates a plain object from a MethodDescriptorProto message. Also converts values to other types if specified.
             * @param message MethodDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FileOptions. */
        interface IFileOptions {

            /** FileOptions javaPackage */
            javaPackage?: (string|null);

            /** FileOptions javaOuterClassname */
            javaOuterClassname?: (string|null);

            /** FileOptions javaMultipleFiles */
            javaMultipleFiles?: (boolean|null);

            /** FileOptions javaGenerateEqualsAndHash */
            javaGenerateEqualsAndHash?: (boolean|null);

            /** FileOptions javaStringCheckUtf8 */
            javaStringCheckUtf8?: (boolean|null);

            /** FileOptions optimizeFor */
            optimizeFor?: (google.protobuf.FileOptions.OptimizeMode|keyof typeof google.protobuf.FileOptions.OptimizeMode|null);

            /** FileOptions goPackage */
            goPackage?: (string|null);

            /** FileOptions ccGenericServices */
            ccGenericServices?: (boolean|null);

            /** FileOptions javaGenericServices */
            javaGenericServices?: (boolean|null);

            /** FileOptions pyGenericServices */
            pyGenericServices?: (boolean|null);

            /** FileOptions phpGenericServices */
            phpGenericServices?: (boolean|null);

            /** FileOptions deprecated */
            deprecated?: (boolean|null);

            /** FileOptions ccEnableArenas */
            ccEnableArenas?: (boolean|null);

            /** FileOptions objcClassPrefix */
            objcClassPrefix?: (string|null);

            /** FileOptions csharpNamespace */
            csharpNamespace?: (string|null);

            /** FileOptions swiftPrefix */
            swiftPrefix?: (string|null);

            /** FileOptions phpClassPrefix */
            phpClassPrefix?: (string|null);

            /** FileOptions phpNamespace */
            phpNamespace?: (string|null);

            /** FileOptions phpMetadataNamespace */
            phpMetadataNamespace?: (string|null);

            /** FileOptions rubyPackage */
            rubyPackage?: (string|null);

            /** FileOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** FileOptions .google.api.resourceDefinition */
            ".google.api.resourceDefinition"?: (google.api.IResourceDescriptor[]|null);
        }

        /** Represents a FileOptions. */
        class FileOptions implements IFileOptions {

            /**
             * Constructs a new FileOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileOptions);

            /** FileOptions javaPackage. */
            public javaPackage: string;

            /** FileOptions javaOuterClassname. */
            public javaOuterClassname: string;

            /** FileOptions javaMultipleFiles. */
            public javaMultipleFiles: boolean;

            /** FileOptions javaGenerateEqualsAndHash. */
            public javaGenerateEqualsAndHash: boolean;

            /** FileOptions javaStringCheckUtf8. */
            public javaStringCheckUtf8: boolean;

            /** FileOptions optimizeFor. */
            public optimizeFor: (google.protobuf.FileOptions.OptimizeMode|keyof typeof google.protobuf.FileOptions.OptimizeMode);

            /** FileOptions goPackage. */
            public goPackage: string;

            /** FileOptions ccGenericServices. */
            public ccGenericServices: boolean;

            /** FileOptions javaGenericServices. */
            public javaGenericServices: boolean;

            /** FileOptions pyGenericServices. */
            public pyGenericServices: boolean;

            /** FileOptions phpGenericServices. */
            public phpGenericServices: boolean;

            /** FileOptions deprecated. */
            public deprecated: boolean;

            /** FileOptions ccEnableArenas. */
            public ccEnableArenas: boolean;

            /** FileOptions objcClassPrefix. */
            public objcClassPrefix: string;

            /** FileOptions csharpNamespace. */
            public csharpNamespace: string;

            /** FileOptions swiftPrefix. */
            public swiftPrefix: string;

            /** FileOptions phpClassPrefix. */
            public phpClassPrefix: string;

            /** FileOptions phpNamespace. */
            public phpNamespace: string;

            /** FileOptions phpMetadataNamespace. */
            public phpMetadataNamespace: string;

            /** FileOptions rubyPackage. */
            public rubyPackage: string;

            /** FileOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FileOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileOptions instance
             */
            public static create(properties?: google.protobuf.IFileOptions): google.protobuf.FileOptions;

            /**
             * Encodes the specified FileOptions message. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileOptions message, length delimited. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileOptions;

            /**
             * Decodes a FileOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileOptions;

            /**
             * Verifies a FileOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileOptions;

            /**
             * Creates a plain object from a FileOptions message. Also converts values to other types if specified.
             * @param message FileOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FileOptions {

            /** OptimizeMode enum. */
            enum OptimizeMode {
                SPEED = 1,
                CODE_SIZE = 2,
                LITE_RUNTIME = 3
            }
        }

        /** Properties of a MessageOptions. */
        interface IMessageOptions {

            /** MessageOptions messageSetWireFormat */
            messageSetWireFormat?: (boolean|null);

            /** MessageOptions noStandardDescriptorAccessor */
            noStandardDescriptorAccessor?: (boolean|null);

            /** MessageOptions deprecated */
            deprecated?: (boolean|null);

            /** MessageOptions mapEntry */
            mapEntry?: (boolean|null);

            /** MessageOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** MessageOptions .google.api.resource */
            ".google.api.resource"?: (google.api.IResourceDescriptor|null);
        }

        /** Represents a MessageOptions. */
        class MessageOptions implements IMessageOptions {

            /**
             * Constructs a new MessageOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMessageOptions);

            /** MessageOptions messageSetWireFormat. */
            public messageSetWireFormat: boolean;

            /** MessageOptions noStandardDescriptorAccessor. */
            public noStandardDescriptorAccessor: boolean;

            /** MessageOptions deprecated. */
            public deprecated: boolean;

            /** MessageOptions mapEntry. */
            public mapEntry: boolean;

            /** MessageOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MessageOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageOptions instance
             */
            public static create(properties?: google.protobuf.IMessageOptions): google.protobuf.MessageOptions;

            /**
             * Encodes the specified MessageOptions message. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageOptions message, length delimited. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MessageOptions;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MessageOptions;

            /**
             * Verifies a MessageOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MessageOptions;

            /**
             * Creates a plain object from a MessageOptions message. Also converts values to other types if specified.
             * @param message MessageOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MessageOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FieldOptions. */
        interface IFieldOptions {

            /** FieldOptions ctype */
            ctype?: (google.protobuf.FieldOptions.CType|keyof typeof google.protobuf.FieldOptions.CType|null);

            /** FieldOptions packed */
            packed?: (boolean|null);

            /** FieldOptions jstype */
            jstype?: (google.protobuf.FieldOptions.JSType|keyof typeof google.protobuf.FieldOptions.JSType|null);

            /** FieldOptions lazy */
            lazy?: (boolean|null);

            /** FieldOptions unverifiedLazy */
            unverifiedLazy?: (boolean|null);

            /** FieldOptions deprecated */
            deprecated?: (boolean|null);

            /** FieldOptions weak */
            weak?: (boolean|null);

            /** FieldOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** FieldOptions .google.api.fieldBehavior */
            ".google.api.fieldBehavior"?: (google.api.FieldBehavior[]|null);

            /** FieldOptions .google.api.resourceReference */
            ".google.api.resourceReference"?: (google.api.IResourceReference|null);
        }

        /** Represents a FieldOptions. */
        class FieldOptions implements IFieldOptions {

            /**
             * Constructs a new FieldOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldOptions);

            /** FieldOptions ctype. */
            public ctype: (google.protobuf.FieldOptions.CType|keyof typeof google.protobuf.FieldOptions.CType);

            /** FieldOptions packed. */
            public packed: boolean;

            /** FieldOptions jstype. */
            public jstype: (google.protobuf.FieldOptions.JSType|keyof typeof google.protobuf.FieldOptions.JSType);

            /** FieldOptions lazy. */
            public lazy: boolean;

            /** FieldOptions unverifiedLazy. */
            public unverifiedLazy: boolean;

            /** FieldOptions deprecated. */
            public deprecated: boolean;

            /** FieldOptions weak. */
            public weak: boolean;

            /** FieldOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FieldOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldOptions instance
             */
            public static create(properties?: google.protobuf.IFieldOptions): google.protobuf.FieldOptions;

            /**
             * Encodes the specified FieldOptions message. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldOptions message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldOptions;

            /**
             * Verifies a FieldOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldOptions;

            /**
             * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
             * @param message FieldOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FieldOptions {

            /** CType enum. */
            enum CType {
                STRING = 0,
                CORD = 1,
                STRING_PIECE = 2
            }

            /** JSType enum. */
            enum JSType {
                JS_NORMAL = 0,
                JS_STRING = 1,
                JS_NUMBER = 2
            }
        }

        /** Properties of an OneofOptions. */
        interface IOneofOptions {

            /** OneofOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an OneofOptions. */
        class OneofOptions implements IOneofOptions {

            /**
             * Constructs a new OneofOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofOptions);

            /** OneofOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new OneofOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofOptions instance
             */
            public static create(properties?: google.protobuf.IOneofOptions): google.protobuf.OneofOptions;

            /**
             * Encodes the specified OneofOptions message. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofOptions message, length delimited. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofOptions;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofOptions;

            /**
             * Verifies an OneofOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofOptions;

            /**
             * Creates a plain object from an OneofOptions message. Also converts values to other types if specified.
             * @param message OneofOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumOptions. */
        interface IEnumOptions {

            /** EnumOptions allowAlias */
            allowAlias?: (boolean|null);

            /** EnumOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumOptions. */
        class EnumOptions implements IEnumOptions {

            /**
             * Constructs a new EnumOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumOptions);

            /** EnumOptions allowAlias. */
            public allowAlias: boolean;

            /** EnumOptions deprecated. */
            public deprecated: boolean;

            /** EnumOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumOptions instance
             */
            public static create(properties?: google.protobuf.IEnumOptions): google.protobuf.EnumOptions;

            /**
             * Encodes the specified EnumOptions message. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumOptions;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumOptions;

            /**
             * Verifies an EnumOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumOptions;

            /**
             * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
             * @param message EnumOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumValueOptions. */
        interface IEnumValueOptions {

            /** EnumValueOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumValueOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumValueOptions. */
        class EnumValueOptions implements IEnumValueOptions {

            /**
             * Constructs a new EnumValueOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueOptions);

            /** EnumValueOptions deprecated. */
            public deprecated: boolean;

            /** EnumValueOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumValueOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueOptions instance
             */
            public static create(properties?: google.protobuf.IEnumValueOptions): google.protobuf.EnumValueOptions;

            /**
             * Encodes the specified EnumValueOptions message. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueOptions;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueOptions;

            /**
             * Verifies an EnumValueOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueOptions;

            /**
             * Creates a plain object from an EnumValueOptions message. Also converts values to other types if specified.
             * @param message EnumValueOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ServiceOptions. */
        interface IServiceOptions {

            /** ServiceOptions deprecated */
            deprecated?: (boolean|null);

            /** ServiceOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** ServiceOptions .google.api.defaultHost */
            ".google.api.defaultHost"?: (string|null);

            /** ServiceOptions .google.api.oauthScopes */
            ".google.api.oauthScopes"?: (string|null);
        }

        /** Represents a ServiceOptions. */
        class ServiceOptions implements IServiceOptions {

            /**
             * Constructs a new ServiceOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceOptions);

            /** ServiceOptions deprecated. */
            public deprecated: boolean;

            /** ServiceOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new ServiceOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceOptions instance
             */
            public static create(properties?: google.protobuf.IServiceOptions): google.protobuf.ServiceOptions;

            /**
             * Encodes the specified ServiceOptions message. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceOptions message, length delimited. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceOptions;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceOptions;

            /**
             * Verifies a ServiceOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceOptions;

            /**
             * Creates a plain object from a ServiceOptions message. Also converts values to other types if specified.
             * @param message ServiceOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MethodOptions. */
        interface IMethodOptions {

            /** MethodOptions deprecated */
            deprecated?: (boolean|null);

            /** MethodOptions idempotencyLevel */
            idempotencyLevel?: (google.protobuf.MethodOptions.IdempotencyLevel|keyof typeof google.protobuf.MethodOptions.IdempotencyLevel|null);

            /** MethodOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** MethodOptions .google.api.http */
            ".google.api.http"?: (google.api.IHttpRule|null);

            /** MethodOptions .google.api.methodSignature */
            ".google.api.methodSignature"?: (string[]|null);
        }

        /** Represents a MethodOptions. */
        class MethodOptions implements IMethodOptions {

            /**
             * Constructs a new MethodOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodOptions);

            /** MethodOptions deprecated. */
            public deprecated: boolean;

            /** MethodOptions idempotencyLevel. */
            public idempotencyLevel: (google.protobuf.MethodOptions.IdempotencyLevel|keyof typeof google.protobuf.MethodOptions.IdempotencyLevel);

            /** MethodOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MethodOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodOptions instance
             */
            public static create(properties?: google.protobuf.IMethodOptions): google.protobuf.MethodOptions;

            /**
             * Encodes the specified MethodOptions message. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodOptions message, length delimited. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodOptions;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodOptions;

            /**
             * Verifies a MethodOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodOptions;

            /**
             * Creates a plain object from a MethodOptions message. Also converts values to other types if specified.
             * @param message MethodOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace MethodOptions {

            /** IdempotencyLevel enum. */
            enum IdempotencyLevel {
                IDEMPOTENCY_UNKNOWN = 0,
                NO_SIDE_EFFECTS = 1,
                IDEMPOTENT = 2
            }
        }

        /** Properties of an UninterpretedOption. */
        interface IUninterpretedOption {

            /** UninterpretedOption name */
            name?: (google.protobuf.UninterpretedOption.INamePart[]|null);

            /** UninterpretedOption identifierValue */
            identifierValue?: (string|null);

            /** UninterpretedOption positiveIntValue */
            positiveIntValue?: (number|Long|string|null);

            /** UninterpretedOption negativeIntValue */
            negativeIntValue?: (number|Long|string|null);

            /** UninterpretedOption doubleValue */
            doubleValue?: (number|null);

            /** UninterpretedOption stringValue */
            stringValue?: (Uint8Array|string|null);

            /** UninterpretedOption aggregateValue */
            aggregateValue?: (string|null);
        }

        /** Represents an UninterpretedOption. */
        class UninterpretedOption implements IUninterpretedOption {

            /**
             * Constructs a new UninterpretedOption.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUninterpretedOption);

            /** UninterpretedOption name. */
            public name: google.protobuf.UninterpretedOption.INamePart[];

            /** UninterpretedOption identifierValue. */
            public identifierValue: string;

            /** UninterpretedOption positiveIntValue. */
            public positiveIntValue: (number|Long|string);

            /** UninterpretedOption negativeIntValue. */
            public negativeIntValue: (number|Long|string);

            /** UninterpretedOption doubleValue. */
            public doubleValue: number;

            /** UninterpretedOption stringValue. */
            public stringValue: (Uint8Array|string);

            /** UninterpretedOption aggregateValue. */
            public aggregateValue: string;

            /**
             * Creates a new UninterpretedOption instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UninterpretedOption instance
             */
            public static create(properties?: google.protobuf.IUninterpretedOption): google.protobuf.UninterpretedOption;

            /**
             * Encodes the specified UninterpretedOption message. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UninterpretedOption message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption;

            /**
             * Verifies an UninterpretedOption message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UninterpretedOption
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption;

            /**
             * Creates a plain object from an UninterpretedOption message. Also converts values to other types if specified.
             * @param message UninterpretedOption
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UninterpretedOption, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UninterpretedOption to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace UninterpretedOption {

            /** Properties of a NamePart. */
            interface INamePart {

                /** NamePart namePart */
                namePart: string;

                /** NamePart isExtension */
                isExtension: boolean;
            }

            /** Represents a NamePart. */
            class NamePart implements INamePart {

                /**
                 * Constructs a new NamePart.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.UninterpretedOption.INamePart);

                /** NamePart namePart. */
                public namePart: string;

                /** NamePart isExtension. */
                public isExtension: boolean;

                /**
                 * Creates a new NamePart instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NamePart instance
                 */
                public static create(properties?: google.protobuf.UninterpretedOption.INamePart): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Encodes the specified NamePart message. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NamePart message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NamePart message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Decodes a NamePart message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Verifies a NamePart message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NamePart
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Creates a plain object from a NamePart message. Also converts values to other types if specified.
                 * @param message NamePart
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.UninterpretedOption.NamePart, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NamePart to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a SourceCodeInfo. */
        interface ISourceCodeInfo {

            /** SourceCodeInfo location */
            location?: (google.protobuf.SourceCodeInfo.ILocation[]|null);
        }

        /** Represents a SourceCodeInfo. */
        class SourceCodeInfo implements ISourceCodeInfo {

            /**
             * Constructs a new SourceCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ISourceCodeInfo);

            /** SourceCodeInfo location. */
            public location: google.protobuf.SourceCodeInfo.ILocation[];

            /**
             * Creates a new SourceCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SourceCodeInfo instance
             */
            public static create(properties?: google.protobuf.ISourceCodeInfo): google.protobuf.SourceCodeInfo;

            /**
             * Encodes the specified SourceCodeInfo message. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SourceCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo;

            /**
             * Verifies a SourceCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SourceCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo;

            /**
             * Creates a plain object from a SourceCodeInfo message. Also converts values to other types if specified.
             * @param message SourceCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.SourceCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SourceCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace SourceCodeInfo {

            /** Properties of a Location. */
            interface ILocation {

                /** Location path */
                path?: (number[]|null);

                /** Location span */
                span?: (number[]|null);

                /** Location leadingComments */
                leadingComments?: (string|null);

                /** Location trailingComments */
                trailingComments?: (string|null);

                /** Location leadingDetachedComments */
                leadingDetachedComments?: (string[]|null);
            }

            /** Represents a Location. */
            class Location implements ILocation {

                /**
                 * Constructs a new Location.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.SourceCodeInfo.ILocation);

                /** Location path. */
                public path: number[];

                /** Location span. */
                public span: number[];

                /** Location leadingComments. */
                public leadingComments: string;

                /** Location trailingComments. */
                public trailingComments: string;

                /** Location leadingDetachedComments. */
                public leadingDetachedComments: string[];

                /**
                 * Creates a new Location instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Location instance
                 */
                public static create(properties?: google.protobuf.SourceCodeInfo.ILocation): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Encodes the specified Location message. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Location message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Location message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Decodes a Location message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Verifies a Location message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Location message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Location
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Creates a plain object from a Location message. Also converts values to other types if specified.
                 * @param message Location
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.SourceCodeInfo.Location, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Location to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a GeneratedCodeInfo. */
        interface IGeneratedCodeInfo {

            /** GeneratedCodeInfo annotation */
            annotation?: (google.protobuf.GeneratedCodeInfo.IAnnotation[]|null);
        }

        /** Represents a GeneratedCodeInfo. */
        class GeneratedCodeInfo implements IGeneratedCodeInfo {

            /**
             * Constructs a new GeneratedCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IGeneratedCodeInfo);

            /** GeneratedCodeInfo annotation. */
            public annotation: google.protobuf.GeneratedCodeInfo.IAnnotation[];

            /**
             * Creates a new GeneratedCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GeneratedCodeInfo instance
             */
            public static create(properties?: google.protobuf.IGeneratedCodeInfo): google.protobuf.GeneratedCodeInfo;

            /**
             * Encodes the specified GeneratedCodeInfo message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GeneratedCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo;

            /**
             * Verifies a GeneratedCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GeneratedCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GeneratedCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo;

            /**
             * Creates a plain object from a GeneratedCodeInfo message. Also converts values to other types if specified.
             * @param message GeneratedCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.GeneratedCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GeneratedCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace GeneratedCodeInfo {

            /** Properties of an Annotation. */
            interface IAnnotation {

                /** Annotation path */
                path?: (number[]|null);

                /** Annotation sourceFile */
                sourceFile?: (string|null);

                /** Annotation begin */
                begin?: (number|null);

                /** Annotation end */
                end?: (number|null);
            }

            /** Represents an Annotation. */
            class Annotation implements IAnnotation {

                /**
                 * Constructs a new Annotation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation);

                /** Annotation path. */
                public path: number[];

                /** Annotation sourceFile. */
                public sourceFile: string;

                /** Annotation begin. */
                public begin: number;

                /** Annotation end. */
                public end: number;

                /**
                 * Creates a new Annotation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Annotation instance
                 */
                public static create(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Encodes the specified Annotation message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Annotation message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Annotation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Decodes an Annotation message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Verifies an Annotation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Annotation
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Creates a plain object from an Annotation message. Also converts values to other types if specified.
                 * @param message Annotation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.GeneratedCodeInfo.Annotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Annotation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (number|Long|string|null);

            /** Timestamp nanos */
            nanos?: (number|null);
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: (number|Long|string);

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            public static create(properties?: google.protobuf.ITimestamp): google.protobuf.Timestamp;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Timestamp;

            /**
             * Verifies a Timestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timestamp
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param message Timestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Empty. */
        interface IEmpty {
        }

        /** Represents an Empty. */
        class Empty implements IEmpty {

            /**
             * Constructs a new Empty.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEmpty);

            /**
             * Creates a new Empty instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Empty instance
             */
            public static create(properties?: google.protobuf.IEmpty): google.protobuf.Empty;

            /**
             * Encodes the specified Empty message. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Empty message, length delimited. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Empty message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Empty;

            /**
             * Decodes an Empty message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Empty;

            /**
             * Verifies an Empty message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Empty message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Empty
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Empty;

            /**
             * Creates a plain object from an Empty message. Also converts values to other types if specified.
             * @param message Empty
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Empty, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Empty to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FieldMask. */
        interface IFieldMask {

            /** FieldMask paths */
            paths?: (string[]|null);
        }

        /** Represents a FieldMask. */
        class FieldMask implements IFieldMask {

            /**
             * Constructs a new FieldMask.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldMask);

            /** FieldMask paths. */
            public paths: string[];

            /**
             * Creates a new FieldMask instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldMask instance
             */
            public static create(properties?: google.protobuf.IFieldMask): google.protobuf.FieldMask;

            /**
             * Encodes the specified FieldMask message. Does not implicitly {@link google.protobuf.FieldMask.verify|verify} messages.
             * @param message FieldMask message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldMask, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldMask message, length delimited. Does not implicitly {@link google.protobuf.FieldMask.verify|verify} messages.
             * @param message FieldMask message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldMask, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldMask message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldMask
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldMask;

            /**
             * Decodes a FieldMask message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldMask
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldMask;

            /**
             * Verifies a FieldMask message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldMask message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldMask
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldMask;

            /**
             * Creates a plain object from a FieldMask message. Also converts values to other types if specified.
             * @param message FieldMask
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldMask, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldMask to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}
