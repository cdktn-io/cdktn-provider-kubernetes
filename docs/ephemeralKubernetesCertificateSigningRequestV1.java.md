# `ephemeralKubernetesCertificateSigningRequestV1` Submodule <a name="`ephemeralKubernetesCertificateSigningRequestV1` Submodule" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralKubernetesCertificateSigningRequestV1 <a name="EphemeralKubernetesCertificateSigningRequestV1" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/certificate_signing_request_v1 kubernetes_certificate_signing_request_v1}.

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.Initializer"></a>

```java
import io.cdktn.providers.kubernetes.ephemeral_kubernetes_certificate_signing_request_v1.EphemeralKubernetesCertificateSigningRequestV1;

EphemeralKubernetesCertificateSigningRequestV1.Builder.create(Construct scope, java.lang.String id)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformEphemeralResourceLifecycle)
//  .provider(TerraformProvider)
    .metadata(EphemeralKubernetesCertificateSigningRequestV1Metadata)
//  .autoApprove(java.lang.Boolean|IResolvable)
//  .certificate(java.lang.String)
//  .spec(EphemeralKubernetesCertificateSigningRequestV1Spec)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.Initializer.parameter.metadata">metadata</a></code> | <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Metadata">EphemeralKubernetesCertificateSigningRequestV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.Initializer.parameter.autoApprove">autoApprove</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Automatically approve the Certificate Signing Request. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.Initializer.parameter.certificate">certificate</a></code> | <code>java.lang.String</code> | certificate is populated with an issued certificate by the signer after an Approved condition is present. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.Initializer.parameter.spec">spec</a></code> | <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Spec">EphemeralKubernetesCertificateSigningRequestV1Spec</a></code> | spec block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.Initializer.parameter.metadata"></a>

- *Type:* <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Metadata">EphemeralKubernetesCertificateSigningRequestV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/certificate_signing_request_v1#metadata EphemeralKubernetesCertificateSigningRequestV1#metadata}

---

##### `autoApprove`<sup>Optional</sup> <a name="autoApprove" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.Initializer.parameter.autoApprove"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Automatically approve the Certificate Signing Request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/certificate_signing_request_v1#auto_approve EphemeralKubernetesCertificateSigningRequestV1#auto_approve}

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.Initializer.parameter.certificate"></a>

- *Type:* java.lang.String

certificate is populated with an issued certificate by the signer after an Approved condition is present.

This field is set via the /status subresource. Once populated, this field is immutable.

If the certificate signing request is denied, a condition of type "Denied" is added and this field remains empty. If the signer cannot issue the certificate, a condition of type "Failed" is added and this field remains empty.

Validation requirements:

1. certificate must contain one or more PEM blocks.
2. All PEM blocks must have the "CERTIFICATE" label, contain no headers, and the encoded data
   must be a BER-encoded ASN.1 Certificate structure as described in section 4 of RFC5280.
3. Non-PEM content may appear before or after the "CERTIFICATE" PEM blocks and is unvalidated,
   to allow for explanatory text as described in section 5.2 of RFC7468.

If more than one PEM block is present, and the definition of the requested spec.signerName does not indicate otherwise, the first block is the issued certificate, and subsequent blocks should be treated as intermediate certificates and presented in TLS handshakes.

The certificate is encoded in PEM format.

When serialized as JSON or YAML, the data is additionally base64-encoded, so it consists of:

```
base64(
```

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/certificate_signing_request_v1#certificate EphemeralKubernetesCertificateSigningRequestV1#certificate}

---

##### `spec`<sup>Optional</sup> <a name="spec" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.Initializer.parameter.spec"></a>

- *Type:* <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Spec">EphemeralKubernetesCertificateSigningRequestV1Spec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/certificate_signing_request_v1#spec EphemeralKubernetesCertificateSigningRequestV1#spec}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.toTerraform">toTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.putMetadata">putMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.putSpec">putSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.resetAutoApprove">resetAutoApprove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.resetCertificate">resetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.resetSpec">resetSpec</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this ephemeral resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putMetadata` <a name="putMetadata" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.putMetadata"></a>

```java
public void putMetadata(EphemeralKubernetesCertificateSigningRequestV1Metadata value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Metadata">EphemeralKubernetesCertificateSigningRequestV1Metadata</a>

---

##### `putSpec` <a name="putSpec" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.putSpec"></a>

```java
public void putSpec(EphemeralKubernetesCertificateSigningRequestV1Spec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Spec">EphemeralKubernetesCertificateSigningRequestV1Spec</a>

---

##### `resetAutoApprove` <a name="resetAutoApprove" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.resetAutoApprove"></a>

```java
public void resetAutoApprove()
```

##### `resetCertificate` <a name="resetCertificate" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.resetCertificate"></a>

```java
public void resetCertificate()
```

##### `resetSpec` <a name="resetSpec" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.resetSpec"></a>

```java
public void resetSpec()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.isTerraformEphemeralResource">isTerraformEphemeralResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.isConstruct"></a>

```java
import io.cdktn.providers.kubernetes.ephemeral_kubernetes_certificate_signing_request_v1.EphemeralKubernetesCertificateSigningRequestV1;

EphemeralKubernetesCertificateSigningRequestV1.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.isTerraformElement"></a>

```java
import io.cdktn.providers.kubernetes.ephemeral_kubernetes_certificate_signing_request_v1.EphemeralKubernetesCertificateSigningRequestV1;

EphemeralKubernetesCertificateSigningRequestV1.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformEphemeralResource` <a name="isTerraformEphemeralResource" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.isTerraformEphemeralResource"></a>

```java
import io.cdktn.providers.kubernetes.ephemeral_kubernetes_certificate_signing_request_v1.EphemeralKubernetesCertificateSigningRequestV1;

EphemeralKubernetesCertificateSigningRequestV1.isTerraformEphemeralResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.metadata">metadata</a></code> | <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference">EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.spec">spec</a></code> | <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference">EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.autoApproveInput">autoApproveInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.certificateInput">certificateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.metadataInput">metadataInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Metadata">EphemeralKubernetesCertificateSigningRequestV1Metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.specInput">specInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Spec">EphemeralKubernetesCertificateSigningRequestV1Spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.autoApprove">autoApprove</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.certificate">certificate</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.lifecycle"></a>

```java
public TerraformEphemeralResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.metadata"></a>

```java
public EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference getMetadata();
```

- *Type:* <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference">EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference</a>

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.spec"></a>

```java
public EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference getSpec();
```

- *Type:* <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference">EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference</a>

---

##### `autoApproveInput`<sup>Optional</sup> <a name="autoApproveInput" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.autoApproveInput"></a>

```java
public java.lang.Boolean|IResolvable getAutoApproveInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.certificateInput"></a>

```java
public java.lang.String getCertificateInput();
```

- *Type:* java.lang.String

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.metadataInput"></a>

```java
public IResolvable|EphemeralKubernetesCertificateSigningRequestV1Metadata getMetadataInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Metadata">EphemeralKubernetesCertificateSigningRequestV1Metadata</a>

---

##### `specInput`<sup>Optional</sup> <a name="specInput" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.specInput"></a>

```java
public IResolvable|EphemeralKubernetesCertificateSigningRequestV1Spec getSpecInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Spec">EphemeralKubernetesCertificateSigningRequestV1Spec</a>

---

##### `autoApprove`<sup>Required</sup> <a name="autoApprove" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.autoApprove"></a>

```java
public java.lang.Boolean|IResolvable getAutoApprove();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.certificate"></a>

```java
public java.lang.String getCertificate();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralKubernetesCertificateSigningRequestV1Config <a name="EphemeralKubernetesCertificateSigningRequestV1Config" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Config.Initializer"></a>

```java
import io.cdktn.providers.kubernetes.ephemeral_kubernetes_certificate_signing_request_v1.EphemeralKubernetesCertificateSigningRequestV1Config;

EphemeralKubernetesCertificateSigningRequestV1Config.builder()
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformEphemeralResourceLifecycle)
//  .provider(TerraformProvider)
    .metadata(EphemeralKubernetesCertificateSigningRequestV1Metadata)
//  .autoApprove(java.lang.Boolean|IResolvable)
//  .certificate(java.lang.String)
//  .spec(EphemeralKubernetesCertificateSigningRequestV1Spec)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Config.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Config.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Config.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Config.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Config.property.metadata">metadata</a></code> | <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Metadata">EphemeralKubernetesCertificateSigningRequestV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Config.property.autoApprove">autoApprove</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Automatically approve the Certificate Signing Request. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Config.property.certificate">certificate</a></code> | <code>java.lang.String</code> | certificate is populated with an issued certificate by the signer after an Approved condition is present. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Config.property.spec">spec</a></code> | <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Spec">EphemeralKubernetesCertificateSigningRequestV1Spec</a></code> | spec block. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Config.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Config.property.lifecycle"></a>

```java
public TerraformEphemeralResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Config.property.metadata"></a>

```java
public EphemeralKubernetesCertificateSigningRequestV1Metadata getMetadata();
```

- *Type:* <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Metadata">EphemeralKubernetesCertificateSigningRequestV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/certificate_signing_request_v1#metadata EphemeralKubernetesCertificateSigningRequestV1#metadata}

---

##### `autoApprove`<sup>Optional</sup> <a name="autoApprove" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Config.property.autoApprove"></a>

```java
public java.lang.Boolean|IResolvable getAutoApprove();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Automatically approve the Certificate Signing Request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/certificate_signing_request_v1#auto_approve EphemeralKubernetesCertificateSigningRequestV1#auto_approve}

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Config.property.certificate"></a>

```java
public java.lang.String getCertificate();
```

- *Type:* java.lang.String

certificate is populated with an issued certificate by the signer after an Approved condition is present.

This field is set via the /status subresource. Once populated, this field is immutable.

If the certificate signing request is denied, a condition of type "Denied" is added and this field remains empty. If the signer cannot issue the certificate, a condition of type "Failed" is added and this field remains empty.

Validation requirements:

1. certificate must contain one or more PEM blocks.
2. All PEM blocks must have the "CERTIFICATE" label, contain no headers, and the encoded data
   must be a BER-encoded ASN.1 Certificate structure as described in section 4 of RFC5280.
3. Non-PEM content may appear before or after the "CERTIFICATE" PEM blocks and is unvalidated,
   to allow for explanatory text as described in section 5.2 of RFC7468.

If more than one PEM block is present, and the definition of the requested spec.signerName does not indicate otherwise, the first block is the issued certificate, and subsequent blocks should be treated as intermediate certificates and presented in TLS handshakes.

The certificate is encoded in PEM format.

When serialized as JSON or YAML, the data is additionally base64-encoded, so it consists of:

```
base64(
```

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/certificate_signing_request_v1#certificate EphemeralKubernetesCertificateSigningRequestV1#certificate}

---

##### `spec`<sup>Optional</sup> <a name="spec" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Config.property.spec"></a>

```java
public EphemeralKubernetesCertificateSigningRequestV1Spec getSpec();
```

- *Type:* <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Spec">EphemeralKubernetesCertificateSigningRequestV1Spec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/certificate_signing_request_v1#spec EphemeralKubernetesCertificateSigningRequestV1#spec}

---

### EphemeralKubernetesCertificateSigningRequestV1Metadata <a name="EphemeralKubernetesCertificateSigningRequestV1Metadata" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Metadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Metadata.Initializer"></a>

```java
import io.cdktn.providers.kubernetes.ephemeral_kubernetes_certificate_signing_request_v1.EphemeralKubernetesCertificateSigningRequestV1Metadata;

EphemeralKubernetesCertificateSigningRequestV1Metadata.builder()
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Metadata.property.name">name</a></code> | <code>java.lang.String</code> | Name must be unique within a namespace. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Metadata.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name must be unique within a namespace.

Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/certificate_signing_request_v1#name EphemeralKubernetesCertificateSigningRequestV1#name}

---

### EphemeralKubernetesCertificateSigningRequestV1Spec <a name="EphemeralKubernetesCertificateSigningRequestV1Spec" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Spec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Spec.Initializer"></a>

```java
import io.cdktn.providers.kubernetes.ephemeral_kubernetes_certificate_signing_request_v1.EphemeralKubernetesCertificateSigningRequestV1Spec;

EphemeralKubernetesCertificateSigningRequestV1Spec.builder()
    .request(java.lang.String)
    .signerName(java.lang.String)
//  .expirationSeconds(java.lang.Number)
//  .usages(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Spec.property.request">request</a></code> | <code>java.lang.String</code> | request contains an x509 certificate signing request encoded in a "CERTIFICATE REQUEST" PEM block. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Spec.property.signerName">signerName</a></code> | <code>java.lang.String</code> | signerName indicates the requested signer, and is a qualified name. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Spec.property.expirationSeconds">expirationSeconds</a></code> | <code>java.lang.Number</code> | expirationSeconds is the requested duration of validity of the issued certificate. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Spec.property.usages">usages</a></code> | <code>java.util.List<java.lang.String></code> | usages specifies a set of key usages requested in the issued certificate. |

---

##### `request`<sup>Required</sup> <a name="request" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Spec.property.request"></a>

```java
public java.lang.String getRequest();
```

- *Type:* java.lang.String

request contains an x509 certificate signing request encoded in a "CERTIFICATE REQUEST" PEM block.

When serialized as JSON or YAML, the data is additionally base64-encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/certificate_signing_request_v1#request EphemeralKubernetesCertificateSigningRequestV1#request}

---

##### `signerName`<sup>Required</sup> <a name="signerName" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Spec.property.signerName"></a>

```java
public java.lang.String getSignerName();
```

- *Type:* java.lang.String

signerName indicates the requested signer, and is a qualified name.

List/watch requests for CertificateSigningRequests can filter on this field using a "spec.signerName=NAME" fieldSelector.

Well-known Kubernetes signers are:

1. "kubernetes.io/kube-apiserver-client": issues client certificates that can be used to authenticate to kube-apiserver.
   Requests for this signer are never auto-approved by kube-controller-manager, can be issued by the "csrsigning" controller in kube-controller-manager.
2. "kubernetes.io/kube-apiserver-client-kubelet": issues client certificates that kubelets use to authenticate to kube-apiserver.
   Requests for this signer can be auto-approved by the "csrapproving" controller in kube-controller-manager, and can be issued by the "csrsigning" controller in kube-controller-manager.
3. "kubernetes.io/kubelet-serving" issues serving certificates that kubelets use to serve TLS endpoints, which kube-apiserver can connect to securely.
   Requests for this signer are never auto-approved by kube-controller-manager, and can be issued by the "csrsigning" controller in kube-controller-manager.

More details are available at https://k8s.io/docs/reference/access-authn-authz/certificate-signing-requests/#kubernetes-signers

Custom signerNames can also be specified. The signer defines:

1. Trust distribution: how trust (CA bundles) are distributed.
2. Permitted subjects: and behavior when a disallowed subject is requested.
3. Required, permitted, or forbidden x509 extensions in the request (including whether subjectAltNames are allowed, which types, restrictions on allowed values) and behavior when a disallowed extension is requested.
4. Required, permitted, or forbidden key usages / extended key usages.
5. Expiration/certificate lifetime: whether it is fixed by the signer, configurable by the admin.
6. Whether or not requests for CA certificates are allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/certificate_signing_request_v1#signer_name EphemeralKubernetesCertificateSigningRequestV1#signer_name}

---

##### `expirationSeconds`<sup>Optional</sup> <a name="expirationSeconds" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Spec.property.expirationSeconds"></a>

```java
public java.lang.Number getExpirationSeconds();
```

- *Type:* java.lang.Number

expirationSeconds is the requested duration of validity of the issued certificate.

The certificate signer may issue a certificate with a different validity duration so a client must check the delta between the notBefore and and notAfter fields in the issued certificate to determine the actual duration.

The v1.22+ in-tree implementations of the well-known Kubernetes signers will honor this field as long as the requested duration is not greater than the maximum duration they will honor per the --cluster-signing-duration CLI flag to the Kubernetes controller manager.

Certificate signers may not honor this field for various reasons:

1. Old signer that is unaware of the field (such as the in-tree
   implementations prior to v1.22)
2. Signer whose configured maximum is shorter than the requested duration
3. Signer whose configured minimum is longer than the requested duration

The minimum valid value for expirationSeconds is 600, i.e. 10 minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/certificate_signing_request_v1#expiration_seconds EphemeralKubernetesCertificateSigningRequestV1#expiration_seconds}

---

##### `usages`<sup>Optional</sup> <a name="usages" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Spec.property.usages"></a>

```java
public java.util.List<java.lang.String> getUsages();
```

- *Type:* java.util.List<java.lang.String>

usages specifies a set of key usages requested in the issued certificate.

Requests for TLS client certificates typically request: "digital signature", "key encipherment", "client auth".

Requests for TLS serving certificates typically request: "key encipherment", "digital signature", "server auth".

Valid values are:
"signing", "digital signature", "content commitment",
"key encipherment", "key agreement", "data encipherment",
"cert sign", "crl sign", "encipher only", "decipher only", "any",
"server auth", "client auth",
"code signing", "email protection", "s/mime",
"ipsec end system", "ipsec tunnel", "ipsec user",
"timestamping", "ocsp signing", "microsoft sgc", "netscape sgc"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/certificate_signing_request_v1#usages EphemeralKubernetesCertificateSigningRequestV1#usages}

---

## Classes <a name="Classes" id="Classes"></a>

### EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference <a name="EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.Initializer"></a>

```java
import io.cdktn.providers.kubernetes.ephemeral_kubernetes_certificate_signing_request_v1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference;

new EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Metadata">EphemeralKubernetesCertificateSigningRequestV1Metadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.property.internalValue"></a>

```java
public IResolvable|EphemeralKubernetesCertificateSigningRequestV1Metadata getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Metadata">EphemeralKubernetesCertificateSigningRequestV1Metadata</a>

---


### EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference <a name="EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.kubernetes.ephemeral_kubernetes_certificate_signing_request_v1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference;

new EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.resetExpirationSeconds">resetExpirationSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.resetUsages">resetUsages</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExpirationSeconds` <a name="resetExpirationSeconds" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.resetExpirationSeconds"></a>

```java
public void resetExpirationSeconds()
```

##### `resetUsages` <a name="resetUsages" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.resetUsages"></a>

```java
public void resetUsages()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.property.expirationSecondsInput">expirationSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.property.requestInput">requestInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.property.signerNameInput">signerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.property.usagesInput">usagesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.property.expirationSeconds">expirationSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.property.request">request</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.property.signerName">signerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.property.usages">usages</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Spec">EphemeralKubernetesCertificateSigningRequestV1Spec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `expirationSecondsInput`<sup>Optional</sup> <a name="expirationSecondsInput" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.property.expirationSecondsInput"></a>

```java
public java.lang.Number getExpirationSecondsInput();
```

- *Type:* java.lang.Number

---

##### `requestInput`<sup>Optional</sup> <a name="requestInput" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.property.requestInput"></a>

```java
public java.lang.String getRequestInput();
```

- *Type:* java.lang.String

---

##### `signerNameInput`<sup>Optional</sup> <a name="signerNameInput" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.property.signerNameInput"></a>

```java
public java.lang.String getSignerNameInput();
```

- *Type:* java.lang.String

---

##### `usagesInput`<sup>Optional</sup> <a name="usagesInput" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.property.usagesInput"></a>

```java
public java.util.List<java.lang.String> getUsagesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `expirationSeconds`<sup>Required</sup> <a name="expirationSeconds" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.property.expirationSeconds"></a>

```java
public java.lang.Number getExpirationSeconds();
```

- *Type:* java.lang.Number

---

##### `request`<sup>Required</sup> <a name="request" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.property.request"></a>

```java
public java.lang.String getRequest();
```

- *Type:* java.lang.String

---

##### `signerName`<sup>Required</sup> <a name="signerName" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.property.signerName"></a>

```java
public java.lang.String getSignerName();
```

- *Type:* java.lang.String

---

##### `usages`<sup>Required</sup> <a name="usages" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.property.usages"></a>

```java
public java.util.List<java.lang.String> getUsages();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.property.internalValue"></a>

```java
public IResolvable|EphemeralKubernetesCertificateSigningRequestV1Spec getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Spec">EphemeralKubernetesCertificateSigningRequestV1Spec</a>

---



