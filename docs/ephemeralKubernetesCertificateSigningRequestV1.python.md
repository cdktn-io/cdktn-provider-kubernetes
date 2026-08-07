# `ephemeralKubernetesCertificateSigningRequestV1` Submodule <a name="`ephemeralKubernetesCertificateSigningRequestV1` Submodule" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralKubernetesCertificateSigningRequestV1 <a name="EphemeralKubernetesCertificateSigningRequestV1" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/certificate_signing_request_v1 kubernetes_certificate_signing_request_v1}.

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.Initializer"></a>

```python
from cdktn_provider_kubernetes import ephemeral_kubernetes_certificate_signing_request_v1

ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1(
  scope: Construct,
  id: str,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformEphemeralResourceLifecycle = None,
  provider: TerraformProvider = None,
  metadata: EphemeralKubernetesCertificateSigningRequestV1Metadata,
  auto_approve: bool | IResolvable = None,
  certificate: str = None,
  spec: EphemeralKubernetesCertificateSigningRequestV1Spec = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.Initializer.parameter.metadata">metadata</a></code> | <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Metadata">EphemeralKubernetesCertificateSigningRequestV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.Initializer.parameter.autoApprove">auto_approve</a></code> | <code>bool \| cdktn.IResolvable</code> | Automatically approve the Certificate Signing Request. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.Initializer.parameter.certificate">certificate</a></code> | <code>str</code> | certificate is populated with an issued certificate by the signer after an Approved condition is present. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.Initializer.parameter.spec">spec</a></code> | <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Spec">EphemeralKubernetesCertificateSigningRequestV1Spec</a></code> | spec block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.Initializer.parameter.metadata"></a>

- *Type:* <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Metadata">EphemeralKubernetesCertificateSigningRequestV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/certificate_signing_request_v1#metadata EphemeralKubernetesCertificateSigningRequestV1#metadata}

---

##### `auto_approve`<sup>Optional</sup> <a name="auto_approve" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.Initializer.parameter.autoApprove"></a>

- *Type:* bool | cdktn.IResolvable

Automatically approve the Certificate Signing Request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/certificate_signing_request_v1#auto_approve EphemeralKubernetesCertificateSigningRequestV1#auto_approve}

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.Initializer.parameter.certificate"></a>

- *Type:* str

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
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.toTerraform">to_terraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.putMetadata">put_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.putSpec">put_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.resetAutoApprove">reset_auto_approve</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.resetCertificate">reset_certificate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.resetSpec">reset_spec</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this ephemeral resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_metadata` <a name="put_metadata" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.putMetadata"></a>

```python
def put_metadata(
  name: str
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.putMetadata.parameter.name"></a>

- *Type:* str

Name must be unique within a namespace.

Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/certificate_signing_request_v1#name EphemeralKubernetesCertificateSigningRequestV1#name}

---

##### `put_spec` <a name="put_spec" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.putSpec"></a>

```python
def put_spec(
  request: str,
  signer_name: str,
  expiration_seconds: typing.Union[int, float] = None,
  usages: typing.List[str] = None
) -> None
```

###### `request`<sup>Required</sup> <a name="request" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.putSpec.parameter.request"></a>

- *Type:* str

request contains an x509 certificate signing request encoded in a "CERTIFICATE REQUEST" PEM block.

When serialized as JSON or YAML, the data is additionally base64-encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/certificate_signing_request_v1#request EphemeralKubernetesCertificateSigningRequestV1#request}

---

###### `signer_name`<sup>Required</sup> <a name="signer_name" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.putSpec.parameter.signerName"></a>

- *Type:* str

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

###### `expiration_seconds`<sup>Optional</sup> <a name="expiration_seconds" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.putSpec.parameter.expirationSeconds"></a>

- *Type:* typing.Union[int, float]

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

###### `usages`<sup>Optional</sup> <a name="usages" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.putSpec.parameter.usages"></a>

- *Type:* typing.List[str]

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

##### `reset_auto_approve` <a name="reset_auto_approve" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.resetAutoApprove"></a>

```python
def reset_auto_approve() -> None
```

##### `reset_certificate` <a name="reset_certificate" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.resetCertificate"></a>

```python
def reset_certificate() -> None
```

##### `reset_spec` <a name="reset_spec" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.resetSpec"></a>

```python
def reset_spec() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.isTerraformEphemeralResource">is_terraform_ephemeral_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.isConstruct"></a>

```python
from cdktn_provider_kubernetes import ephemeral_kubernetes_certificate_signing_request_v1

ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.isTerraformElement"></a>

```python
from cdktn_provider_kubernetes import ephemeral_kubernetes_certificate_signing_request_v1

ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_ephemeral_resource` <a name="is_terraform_ephemeral_resource" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.isTerraformEphemeralResource"></a>

```python
from cdktn_provider_kubernetes import ephemeral_kubernetes_certificate_signing_request_v1

ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.is_terraform_ephemeral_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.metadata">metadata</a></code> | <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference">EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.spec">spec</a></code> | <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference">EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.autoApproveInput">auto_approve_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.certificateInput">certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.metadataInput">metadata_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Metadata">EphemeralKubernetesCertificateSigningRequestV1Metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.specInput">spec_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Spec">EphemeralKubernetesCertificateSigningRequestV1Spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.autoApprove">auto_approve</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.certificate">certificate</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.lifecycle"></a>

```python
lifecycle: TerraformEphemeralResourceLifecycle
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.metadata"></a>

```python
metadata: EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference">EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference</a>

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.spec"></a>

```python
spec: EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference">EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference</a>

---

##### `auto_approve_input`<sup>Optional</sup> <a name="auto_approve_input" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.autoApproveInput"></a>

```python
auto_approve_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `certificate_input`<sup>Optional</sup> <a name="certificate_input" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.certificateInput"></a>

```python
certificate_input: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.metadataInput"></a>

```python
metadata_input: IResolvable | EphemeralKubernetesCertificateSigningRequestV1Metadata
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Metadata">EphemeralKubernetesCertificateSigningRequestV1Metadata</a>

---

##### `spec_input`<sup>Optional</sup> <a name="spec_input" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.specInput"></a>

```python
spec_input: IResolvable | EphemeralKubernetesCertificateSigningRequestV1Spec
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Spec">EphemeralKubernetesCertificateSigningRequestV1Spec</a>

---

##### `auto_approve`<sup>Required</sup> <a name="auto_approve" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.autoApprove"></a>

```python
auto_approve: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.certificate"></a>

```python
certificate: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralKubernetesCertificateSigningRequestV1Config <a name="EphemeralKubernetesCertificateSigningRequestV1Config" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Config.Initializer"></a>

```python
from cdktn_provider_kubernetes import ephemeral_kubernetes_certificate_signing_request_v1

ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Config(
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformEphemeralResourceLifecycle = None,
  provider: TerraformProvider = None,
  metadata: EphemeralKubernetesCertificateSigningRequestV1Metadata,
  auto_approve: bool | IResolvable = None,
  certificate: str = None,
  spec: EphemeralKubernetesCertificateSigningRequestV1Spec = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Config.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Config.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Config.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Config.property.metadata">metadata</a></code> | <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Metadata">EphemeralKubernetesCertificateSigningRequestV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Config.property.autoApprove">auto_approve</a></code> | <code>bool \| cdktn.IResolvable</code> | Automatically approve the Certificate Signing Request. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Config.property.certificate">certificate</a></code> | <code>str</code> | certificate is populated with an issued certificate by the signer after an Approved condition is present. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Config.property.spec">spec</a></code> | <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Spec">EphemeralKubernetesCertificateSigningRequestV1Spec</a></code> | spec block. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Config.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Config.property.lifecycle"></a>

```python
lifecycle: TerraformEphemeralResourceLifecycle
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Config.property.metadata"></a>

```python
metadata: EphemeralKubernetesCertificateSigningRequestV1Metadata
```

- *Type:* <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Metadata">EphemeralKubernetesCertificateSigningRequestV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/certificate_signing_request_v1#metadata EphemeralKubernetesCertificateSigningRequestV1#metadata}

---

##### `auto_approve`<sup>Optional</sup> <a name="auto_approve" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Config.property.autoApprove"></a>

```python
auto_approve: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Automatically approve the Certificate Signing Request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/certificate_signing_request_v1#auto_approve EphemeralKubernetesCertificateSigningRequestV1#auto_approve}

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Config.property.certificate"></a>

```python
certificate: str
```

- *Type:* str

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

```python
spec: EphemeralKubernetesCertificateSigningRequestV1Spec
```

- *Type:* <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Spec">EphemeralKubernetesCertificateSigningRequestV1Spec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/certificate_signing_request_v1#spec EphemeralKubernetesCertificateSigningRequestV1#spec}

---

### EphemeralKubernetesCertificateSigningRequestV1Metadata <a name="EphemeralKubernetesCertificateSigningRequestV1Metadata" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Metadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Metadata.Initializer"></a>

```python
from cdktn_provider_kubernetes import ephemeral_kubernetes_certificate_signing_request_v1

ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Metadata(
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Metadata.property.name">name</a></code> | <code>str</code> | Name must be unique within a namespace. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Metadata.property.name"></a>

```python
name: str
```

- *Type:* str

Name must be unique within a namespace.

Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/certificate_signing_request_v1#name EphemeralKubernetesCertificateSigningRequestV1#name}

---

### EphemeralKubernetesCertificateSigningRequestV1Spec <a name="EphemeralKubernetesCertificateSigningRequestV1Spec" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Spec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Spec.Initializer"></a>

```python
from cdktn_provider_kubernetes import ephemeral_kubernetes_certificate_signing_request_v1

ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Spec(
  request: str,
  signer_name: str,
  expiration_seconds: typing.Union[int, float] = None,
  usages: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Spec.property.request">request</a></code> | <code>str</code> | request contains an x509 certificate signing request encoded in a "CERTIFICATE REQUEST" PEM block. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Spec.property.signerName">signer_name</a></code> | <code>str</code> | signerName indicates the requested signer, and is a qualified name. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Spec.property.expirationSeconds">expiration_seconds</a></code> | <code>typing.Union[int, float]</code> | expirationSeconds is the requested duration of validity of the issued certificate. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Spec.property.usages">usages</a></code> | <code>typing.List[str]</code> | usages specifies a set of key usages requested in the issued certificate. |

---

##### `request`<sup>Required</sup> <a name="request" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Spec.property.request"></a>

```python
request: str
```

- *Type:* str

request contains an x509 certificate signing request encoded in a "CERTIFICATE REQUEST" PEM block.

When serialized as JSON or YAML, the data is additionally base64-encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/certificate_signing_request_v1#request EphemeralKubernetesCertificateSigningRequestV1#request}

---

##### `signer_name`<sup>Required</sup> <a name="signer_name" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Spec.property.signerName"></a>

```python
signer_name: str
```

- *Type:* str

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

##### `expiration_seconds`<sup>Optional</sup> <a name="expiration_seconds" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Spec.property.expirationSeconds"></a>

```python
expiration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

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

```python
usages: typing.List[str]
```

- *Type:* typing.List[str]

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

```python
from cdktn_provider_kubernetes import ephemeral_kubernetes_certificate_signing_request_v1

ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Metadata">EphemeralKubernetesCertificateSigningRequestV1Metadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EphemeralKubernetesCertificateSigningRequestV1Metadata
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Metadata">EphemeralKubernetesCertificateSigningRequestV1Metadata</a>

---


### EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference <a name="EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.Initializer"></a>

```python
from cdktn_provider_kubernetes import ephemeral_kubernetes_certificate_signing_request_v1

ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.resetExpirationSeconds">reset_expiration_seconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.resetUsages">reset_usages</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_expiration_seconds` <a name="reset_expiration_seconds" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.resetExpirationSeconds"></a>

```python
def reset_expiration_seconds() -> None
```

##### `reset_usages` <a name="reset_usages" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.resetUsages"></a>

```python
def reset_usages() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.property.expirationSecondsInput">expiration_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.property.requestInput">request_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.property.signerNameInput">signer_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.property.usagesInput">usages_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.property.expirationSeconds">expiration_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.property.request">request</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.property.signerName">signer_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.property.usages">usages</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Spec">EphemeralKubernetesCertificateSigningRequestV1Spec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expiration_seconds_input`<sup>Optional</sup> <a name="expiration_seconds_input" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.property.expirationSecondsInput"></a>

```python
expiration_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `request_input`<sup>Optional</sup> <a name="request_input" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.property.requestInput"></a>

```python
request_input: str
```

- *Type:* str

---

##### `signer_name_input`<sup>Optional</sup> <a name="signer_name_input" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.property.signerNameInput"></a>

```python
signer_name_input: str
```

- *Type:* str

---

##### `usages_input`<sup>Optional</sup> <a name="usages_input" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.property.usagesInput"></a>

```python
usages_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `expiration_seconds`<sup>Required</sup> <a name="expiration_seconds" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.property.expirationSeconds"></a>

```python
expiration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `request`<sup>Required</sup> <a name="request" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.property.request"></a>

```python
request: str
```

- *Type:* str

---

##### `signer_name`<sup>Required</sup> <a name="signer_name" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.property.signerName"></a>

```python
signer_name: str
```

- *Type:* str

---

##### `usages`<sup>Required</sup> <a name="usages" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.property.usages"></a>

```python
usages: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EphemeralKubernetesCertificateSigningRequestV1Spec
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Spec">EphemeralKubernetesCertificateSigningRequestV1Spec</a>

---



