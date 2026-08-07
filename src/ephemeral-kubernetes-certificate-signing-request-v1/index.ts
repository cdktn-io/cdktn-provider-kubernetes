/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/certificate_signing_request_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface EphemeralKubernetesCertificateSigningRequestV1Config extends cdktn.TerraformEphemeralMetaArguments {
  /**
  * Automatically approve the Certificate Signing Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/certificate_signing_request_v1#auto_approve EphemeralKubernetesCertificateSigningRequestV1#auto_approve}
  */
  readonly autoApprove?: boolean | cdktn.IResolvable;
  /**
  * certificate is populated with an issued certificate by the signer after an Approved condition is present. This field is set via the /status subresource. Once populated, this field is immutable.
  * 
  * If the certificate signing request is denied, a condition of type "Denied" is added and this field remains empty. If the signer cannot issue the certificate, a condition of type "Failed" is added and this field remains empty.
  * 
  * Validation requirements:
  *  1. certificate must contain one or more PEM blocks.
  *  2. All PEM blocks must have the "CERTIFICATE" label, contain no headers, and the encoded data
  *   must be a BER-encoded ASN.1 Certificate structure as described in section 4 of RFC5280.
  *  3. Non-PEM content may appear before or after the "CERTIFICATE" PEM blocks and is unvalidated,
  *   to allow for explanatory text as described in section 5.2 of RFC7468.
  * 
  * If more than one PEM block is present, and the definition of the requested spec.signerName does not indicate otherwise, the first block is the issued certificate, and subsequent blocks should be treated as intermediate certificates and presented in TLS handshakes.
  * 
  * The certificate is encoded in PEM format.
  * 
  * When serialized as JSON or YAML, the data is additionally base64-encoded, so it consists of:
  * 
  *     base64(
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/certificate_signing_request_v1#certificate EphemeralKubernetesCertificateSigningRequestV1#certificate}
  */
  readonly certificate?: string;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/certificate_signing_request_v1#metadata EphemeralKubernetesCertificateSigningRequestV1#metadata}
  */
  readonly metadata: EphemeralKubernetesCertificateSigningRequestV1Metadata;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/certificate_signing_request_v1#spec EphemeralKubernetesCertificateSigningRequestV1#spec}
  */
  readonly spec?: EphemeralKubernetesCertificateSigningRequestV1Spec;
}
export interface EphemeralKubernetesCertificateSigningRequestV1Metadata {
  /**
  * Name must be unique within a namespace. Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/certificate_signing_request_v1#name EphemeralKubernetesCertificateSigningRequestV1#name}
  */
  readonly name: string;
}

export function ephemeralKubernetesCertificateSigningRequestV1MetadataToTerraform(struct?: EphemeralKubernetesCertificateSigningRequestV1Metadata | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
  }
}


export function ephemeralKubernetesCertificateSigningRequestV1MetadataToHclTerraform(struct?: EphemeralKubernetesCertificateSigningRequestV1Metadata | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EphemeralKubernetesCertificateSigningRequestV1Metadata | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EphemeralKubernetesCertificateSigningRequestV1Metadata | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface EphemeralKubernetesCertificateSigningRequestV1Spec {
  /**
  * expirationSeconds is the requested duration of validity of the issued certificate. The certificate signer may issue a certificate with a different validity duration so a client must check the delta between the notBefore and and notAfter fields in the issued certificate to determine the actual duration.
  * 
  * The v1.22+ in-tree implementations of the well-known Kubernetes signers will honor this field as long as the requested duration is not greater than the maximum duration they will honor per the --cluster-signing-duration CLI flag to the Kubernetes controller manager.
  * 
  * Certificate signers may not honor this field for various reasons:
  * 
  *   1. Old signer that is unaware of the field (such as the in-tree
  *      implementations prior to v1.22)
  *   2. Signer whose configured maximum is shorter than the requested duration
  *   3. Signer whose configured minimum is longer than the requested duration
  * 
  * The minimum valid value for expirationSeconds is 600, i.e. 10 minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/certificate_signing_request_v1#expiration_seconds EphemeralKubernetesCertificateSigningRequestV1#expiration_seconds}
  */
  readonly expirationSeconds?: number;
  /**
  * request contains an x509 certificate signing request encoded in a "CERTIFICATE REQUEST" PEM block. When serialized as JSON or YAML, the data is additionally base64-encoded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/certificate_signing_request_v1#request EphemeralKubernetesCertificateSigningRequestV1#request}
  */
  readonly request: string;
  /**
  * signerName indicates the requested signer, and is a qualified name.
  * 
  * List/watch requests for CertificateSigningRequests can filter on this field using a "spec.signerName=NAME" fieldSelector.
  * 
  * Well-known Kubernetes signers are:
  *  1. "kubernetes.io/kube-apiserver-client": issues client certificates that can be used to authenticate to kube-apiserver.
  *   Requests for this signer are never auto-approved by kube-controller-manager, can be issued by the "csrsigning" controller in kube-controller-manager.
  *  2. "kubernetes.io/kube-apiserver-client-kubelet": issues client certificates that kubelets use to authenticate to kube-apiserver.
  *   Requests for this signer can be auto-approved by the "csrapproving" controller in kube-controller-manager, and can be issued by the "csrsigning" controller in kube-controller-manager.
  *  3. "kubernetes.io/kubelet-serving" issues serving certificates that kubelets use to serve TLS endpoints, which kube-apiserver can connect to securely.
  *   Requests for this signer are never auto-approved by kube-controller-manager, and can be issued by the "csrsigning" controller in kube-controller-manager.
  * 
  * More details are available at https://k8s.io/docs/reference/access-authn-authz/certificate-signing-requests/#kubernetes-signers
  * 
  * Custom signerNames can also be specified. The signer defines:
  *  1. Trust distribution: how trust (CA bundles) are distributed.
  *  2. Permitted subjects: and behavior when a disallowed subject is requested.
  *  3. Required, permitted, or forbidden x509 extensions in the request (including whether subjectAltNames are allowed, which types, restrictions on allowed values) and behavior when a disallowed extension is requested.
  *  4. Required, permitted, or forbidden key usages / extended key usages.
  *  5. Expiration/certificate lifetime: whether it is fixed by the signer, configurable by the admin.
  *  6. Whether or not requests for CA certificates are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/certificate_signing_request_v1#signer_name EphemeralKubernetesCertificateSigningRequestV1#signer_name}
  */
  readonly signerName: string;
  /**
  * usages specifies a set of key usages requested in the issued certificate.
  * 
  * Requests for TLS client certificates typically request: "digital signature", "key encipherment", "client auth".
  * 
  * Requests for TLS serving certificates typically request: "key encipherment", "digital signature", "server auth".
  * 
  * Valid values are:
  *  "signing", "digital signature", "content commitment",
  *  "key encipherment", "key agreement", "data encipherment",
  *  "cert sign", "crl sign", "encipher only", "decipher only", "any",
  *  "server auth", "client auth",
  *  "code signing", "email protection", "s/mime",
  *  "ipsec end system", "ipsec tunnel", "ipsec user",
  *  "timestamping", "ocsp signing", "microsoft sgc", "netscape sgc"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/certificate_signing_request_v1#usages EphemeralKubernetesCertificateSigningRequestV1#usages}
  */
  readonly usages?: string[];
}

export function ephemeralKubernetesCertificateSigningRequestV1SpecToTerraform(struct?: EphemeralKubernetesCertificateSigningRequestV1Spec | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    expiration_seconds: cdktn.numberToTerraform(struct!.expirationSeconds),
    request: cdktn.stringToTerraform(struct!.request),
    signer_name: cdktn.stringToTerraform(struct!.signerName),
    usages: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.usages),
  }
}


export function ephemeralKubernetesCertificateSigningRequestV1SpecToHclTerraform(struct?: EphemeralKubernetesCertificateSigningRequestV1Spec | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    expiration_seconds: {
      value: cdktn.numberToHclTerraform(struct!.expirationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request: {
      value: cdktn.stringToHclTerraform(struct!.request),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signer_name: {
      value: cdktn.stringToHclTerraform(struct!.signerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    usages: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.usages),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EphemeralKubernetesCertificateSigningRequestV1Spec | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expirationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.expirationSeconds = this._expirationSeconds;
    }
    if (this._request !== undefined) {
      hasAnyValues = true;
      internalValueResult.request = this._request;
    }
    if (this._signerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.signerName = this._signerName;
    }
    if (this._usages !== undefined) {
      hasAnyValues = true;
      internalValueResult.usages = this._usages;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EphemeralKubernetesCertificateSigningRequestV1Spec | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expirationSeconds = undefined;
      this._request = undefined;
      this._signerName = undefined;
      this._usages = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expirationSeconds = value.expirationSeconds;
      this._request = value.request;
      this._signerName = value.signerName;
      this._usages = value.usages;
    }
  }

  // expiration_seconds - computed: false, optional: true, required: false
  private _expirationSeconds?: number; 
  public get expirationSeconds() {
    return this.getNumberAttribute('expiration_seconds');
  }
  public set expirationSeconds(value: number) {
    this._expirationSeconds = value;
  }
  public resetExpirationSeconds() {
    this._expirationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationSecondsInput() {
    return this._expirationSeconds;
  }

  // request - computed: false, optional: false, required: true
  private _request?: string; 
  public get request() {
    return this.getStringAttribute('request');
  }
  public set request(value: string) {
    this._request = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request;
  }

  // signer_name - computed: false, optional: false, required: true
  private _signerName?: string; 
  public get signerName() {
    return this.getStringAttribute('signer_name');
  }
  public set signerName(value: string) {
    this._signerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get signerNameInput() {
    return this._signerName;
  }

  // usages - computed: false, optional: true, required: false
  private _usages?: string[]; 
  public get usages() {
    return this.getListAttribute('usages');
  }
  public set usages(value: string[]) {
    this._usages = value;
  }
  public resetUsages() {
    this._usages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usagesInput() {
    return this._usages;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/certificate_signing_request_v1 kubernetes_certificate_signing_request_v1}
*/
export class EphemeralKubernetesCertificateSigningRequestV1 extends cdktn.TerraformEphemeralResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kubernetes_certificate_signing_request_v1";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/certificate_signing_request_v1 kubernetes_certificate_signing_request_v1} Ephemeral Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EphemeralKubernetesCertificateSigningRequestV1Config
  */
  public constructor(scope: Construct, id: string, config: EphemeralKubernetesCertificateSigningRequestV1Config) {
    super(scope, id, {
      terraformResourceType: 'kubernetes_certificate_signing_request_v1',
      terraformGeneratorMetadata: {
        providerName: 'kubernetes',
        providerVersion: '3.2.1',
        providerVersionConstraint: '~> 3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      forEach: config.forEach
    });
    this._autoApprove = config.autoApprove;
    this._certificate = config.certificate;
    this._metadata.internalValue = config.metadata;
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_approve - computed: false, optional: true, required: false
  private _autoApprove?: boolean | cdktn.IResolvable; 
  public get autoApprove() {
    return this.getBooleanAttribute('auto_approve');
  }
  public set autoApprove(value: boolean | cdktn.IResolvable) {
    this._autoApprove = value;
  }
  public resetAutoApprove() {
    this._autoApprove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoApproveInput() {
    return this._autoApprove;
  }

  // certificate - computed: true, optional: true, required: false
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: EphemeralKubernetesCertificateSigningRequestV1Metadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: EphemeralKubernetesCertificateSigningRequestV1Spec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_approve: cdktn.booleanToTerraform(this._autoApprove),
      certificate: cdktn.stringToTerraform(this._certificate),
      metadata: ephemeralKubernetesCertificateSigningRequestV1MetadataToTerraform(this._metadata.internalValue),
      spec: ephemeralKubernetesCertificateSigningRequestV1SpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_approve: {
        value: cdktn.booleanToHclTerraform(this._autoApprove),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      certificate: {
        value: cdktn.stringToHclTerraform(this._certificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metadata: {
        value: ephemeralKubernetesCertificateSigningRequestV1MetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EphemeralKubernetesCertificateSigningRequestV1Metadata",
      },
      spec: {
        value: ephemeralKubernetesCertificateSigningRequestV1SpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EphemeralKubernetesCertificateSigningRequestV1Spec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
