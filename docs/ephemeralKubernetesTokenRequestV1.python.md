# `ephemeralKubernetesTokenRequestV1` Submodule <a name="`ephemeralKubernetesTokenRequestV1` Submodule" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralKubernetesTokenRequestV1 <a name="EphemeralKubernetesTokenRequestV1" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/token_request_v1 kubernetes_token_request_v1}.

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.Initializer"></a>

```python
from cdktn_provider_kubernetes import ephemeral_kubernetes_token_request_v1

ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1(
  scope: Construct,
  id: str,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformEphemeralResourceLifecycle = None,
  provider: TerraformProvider = None,
  metadata: EphemeralKubernetesTokenRequestV1Metadata,
  expiration_timestamp: str = None,
  spec: EphemeralKubernetesTokenRequestV1Spec = None,
  token: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.Initializer.parameter.metadata">metadata</a></code> | <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Metadata">EphemeralKubernetesTokenRequestV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.Initializer.parameter.expirationTimestamp">expiration_timestamp</a></code> | <code>str</code> | ExpirationTimestamp is the time of expiration of the returned token. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.Initializer.parameter.spec">spec</a></code> | <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Spec">EphemeralKubernetesTokenRequestV1Spec</a></code> | spec block. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.Initializer.parameter.token">token</a></code> | <code>str</code> | Token is the opaque bearer token. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.Initializer.parameter.metadata"></a>

- *Type:* <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Metadata">EphemeralKubernetesTokenRequestV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/token_request_v1#metadata EphemeralKubernetesTokenRequestV1#metadata}

---

##### `expiration_timestamp`<sup>Optional</sup> <a name="expiration_timestamp" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.Initializer.parameter.expirationTimestamp"></a>

- *Type:* str

ExpirationTimestamp is the time of expiration of the returned token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/token_request_v1#expiration_timestamp EphemeralKubernetesTokenRequestV1#expiration_timestamp}

---

##### `spec`<sup>Optional</sup> <a name="spec" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.Initializer.parameter.spec"></a>

- *Type:* <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Spec">EphemeralKubernetesTokenRequestV1Spec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/token_request_v1#spec EphemeralKubernetesTokenRequestV1#spec}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.Initializer.parameter.token"></a>

- *Type:* str

Token is the opaque bearer token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/token_request_v1#token EphemeralKubernetesTokenRequestV1#token}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.toTerraform">to_terraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.putMetadata">put_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.putSpec">put_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.resetExpirationTimestamp">reset_expiration_timestamp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.resetSpec">reset_spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.resetToken">reset_token</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this ephemeral resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_metadata` <a name="put_metadata" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.putMetadata"></a>

```python
def put_metadata(
  name: str,
  namespace: str
) -> None
```

###### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.putMetadata.parameter.name"></a>

- *Type:* str

Name must be unique within a namespace.

Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/token_request_v1#name EphemeralKubernetesTokenRequestV1#name}

---

###### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.putMetadata.parameter.namespace"></a>

- *Type:* str

Namespace defines the space within which each name must be unique.

An empty namespace is equivalent to the "default" namespace, but "default" is the canonical representation. Not all objects are required to be scoped to a namespace - the value of this field for those objects will be empty.

Must be a DNS_LABEL. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/token_request_v1#namespace EphemeralKubernetesTokenRequestV1#namespace}

---

##### `put_spec` <a name="put_spec" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.putSpec"></a>

```python
def put_spec(
  audiences: typing.List[str] = None,
  bound_object_ref: EphemeralKubernetesTokenRequestV1SpecBoundObjectRef = None,
  expiration_seconds: typing.Union[int, float] = None
) -> None
```

###### `audiences`<sup>Optional</sup> <a name="audiences" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.putSpec.parameter.audiences"></a>

- *Type:* typing.List[str]

Audiences are the intendend audiences of the token.

A recipient of a token must identify themself with an identifier in the list of audiences of the token, and otherwise should reject the token. A token issued for multiple audiences may be used to authenticate against any of the audiences listed but implies a high degree of trust between the target audiences.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/token_request_v1#audiences EphemeralKubernetesTokenRequestV1#audiences}

---

###### `bound_object_ref`<sup>Optional</sup> <a name="bound_object_ref" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.putSpec.parameter.boundObjectRef"></a>

- *Type:* <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRef">EphemeralKubernetesTokenRequestV1SpecBoundObjectRef</a>

bound_object_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/token_request_v1#bound_object_ref EphemeralKubernetesTokenRequestV1#bound_object_ref}

---

###### `expiration_seconds`<sup>Optional</sup> <a name="expiration_seconds" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.putSpec.parameter.expirationSeconds"></a>

- *Type:* typing.Union[int, float]

ExpirationSeconds is the requested duration of validity of the request.

The token issuer may return a token with a different validity duration so a client needs to check the 'expiration' field in a response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/token_request_v1#expiration_seconds EphemeralKubernetesTokenRequestV1#expiration_seconds}

---

##### `reset_expiration_timestamp` <a name="reset_expiration_timestamp" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.resetExpirationTimestamp"></a>

```python
def reset_expiration_timestamp() -> None
```

##### `reset_spec` <a name="reset_spec" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.resetSpec"></a>

```python
def reset_spec() -> None
```

##### `reset_token` <a name="reset_token" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.resetToken"></a>

```python
def reset_token() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.isTerraformEphemeralResource">is_terraform_ephemeral_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.isConstruct"></a>

```python
from cdktn_provider_kubernetes import ephemeral_kubernetes_token_request_v1

ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.isTerraformElement"></a>

```python
from cdktn_provider_kubernetes import ephemeral_kubernetes_token_request_v1

ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_ephemeral_resource` <a name="is_terraform_ephemeral_resource" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.isTerraformEphemeralResource"></a>

```python
from cdktn_provider_kubernetes import ephemeral_kubernetes_token_request_v1

ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.is_terraform_ephemeral_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.metadata">metadata</a></code> | <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference">EphemeralKubernetesTokenRequestV1MetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.spec">spec</a></code> | <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference">EphemeralKubernetesTokenRequestV1SpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.expirationTimestampInput">expiration_timestamp_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.metadataInput">metadata_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Metadata">EphemeralKubernetesTokenRequestV1Metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.specInput">spec_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Spec">EphemeralKubernetesTokenRequestV1Spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.tokenInput">token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.expirationTimestamp">expiration_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.token">token</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.lifecycle"></a>

```python
lifecycle: TerraformEphemeralResourceLifecycle
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.metadata"></a>

```python
metadata: EphemeralKubernetesTokenRequestV1MetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference">EphemeralKubernetesTokenRequestV1MetadataOutputReference</a>

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.spec"></a>

```python
spec: EphemeralKubernetesTokenRequestV1SpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference">EphemeralKubernetesTokenRequestV1SpecOutputReference</a>

---

##### `expiration_timestamp_input`<sup>Optional</sup> <a name="expiration_timestamp_input" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.expirationTimestampInput"></a>

```python
expiration_timestamp_input: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.metadataInput"></a>

```python
metadata_input: IResolvable | EphemeralKubernetesTokenRequestV1Metadata
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Metadata">EphemeralKubernetesTokenRequestV1Metadata</a>

---

##### `spec_input`<sup>Optional</sup> <a name="spec_input" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.specInput"></a>

```python
spec_input: IResolvable | EphemeralKubernetesTokenRequestV1Spec
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Spec">EphemeralKubernetesTokenRequestV1Spec</a>

---

##### `token_input`<sup>Optional</sup> <a name="token_input" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.tokenInput"></a>

```python
token_input: str
```

- *Type:* str

---

##### `expiration_timestamp`<sup>Required</sup> <a name="expiration_timestamp" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.expirationTimestamp"></a>

```python
expiration_timestamp: str
```

- *Type:* str

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.token"></a>

```python
token: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralKubernetesTokenRequestV1Config <a name="EphemeralKubernetesTokenRequestV1Config" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Config.Initializer"></a>

```python
from cdktn_provider_kubernetes import ephemeral_kubernetes_token_request_v1

ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Config(
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformEphemeralResourceLifecycle = None,
  provider: TerraformProvider = None,
  metadata: EphemeralKubernetesTokenRequestV1Metadata,
  expiration_timestamp: str = None,
  spec: EphemeralKubernetesTokenRequestV1Spec = None,
  token: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Config.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Config.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Config.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Config.property.metadata">metadata</a></code> | <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Metadata">EphemeralKubernetesTokenRequestV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Config.property.expirationTimestamp">expiration_timestamp</a></code> | <code>str</code> | ExpirationTimestamp is the time of expiration of the returned token. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Config.property.spec">spec</a></code> | <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Spec">EphemeralKubernetesTokenRequestV1Spec</a></code> | spec block. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Config.property.token">token</a></code> | <code>str</code> | Token is the opaque bearer token. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Config.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Config.property.lifecycle"></a>

```python
lifecycle: TerraformEphemeralResourceLifecycle
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Config.property.metadata"></a>

```python
metadata: EphemeralKubernetesTokenRequestV1Metadata
```

- *Type:* <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Metadata">EphemeralKubernetesTokenRequestV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/token_request_v1#metadata EphemeralKubernetesTokenRequestV1#metadata}

---

##### `expiration_timestamp`<sup>Optional</sup> <a name="expiration_timestamp" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Config.property.expirationTimestamp"></a>

```python
expiration_timestamp: str
```

- *Type:* str

ExpirationTimestamp is the time of expiration of the returned token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/token_request_v1#expiration_timestamp EphemeralKubernetesTokenRequestV1#expiration_timestamp}

---

##### `spec`<sup>Optional</sup> <a name="spec" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Config.property.spec"></a>

```python
spec: EphemeralKubernetesTokenRequestV1Spec
```

- *Type:* <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Spec">EphemeralKubernetesTokenRequestV1Spec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/token_request_v1#spec EphemeralKubernetesTokenRequestV1#spec}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Config.property.token"></a>

```python
token: str
```

- *Type:* str

Token is the opaque bearer token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/token_request_v1#token EphemeralKubernetesTokenRequestV1#token}

---

### EphemeralKubernetesTokenRequestV1Metadata <a name="EphemeralKubernetesTokenRequestV1Metadata" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Metadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Metadata.Initializer"></a>

```python
from cdktn_provider_kubernetes import ephemeral_kubernetes_token_request_v1

ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Metadata(
  name: str,
  namespace: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Metadata.property.name">name</a></code> | <code>str</code> | Name must be unique within a namespace. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Metadata.property.namespace">namespace</a></code> | <code>str</code> | Namespace defines the space within which each name must be unique. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Metadata.property.name"></a>

```python
name: str
```

- *Type:* str

Name must be unique within a namespace.

Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/token_request_v1#name EphemeralKubernetesTokenRequestV1#name}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Metadata.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Namespace defines the space within which each name must be unique.

An empty namespace is equivalent to the "default" namespace, but "default" is the canonical representation. Not all objects are required to be scoped to a namespace - the value of this field for those objects will be empty.

Must be a DNS_LABEL. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/token_request_v1#namespace EphemeralKubernetesTokenRequestV1#namespace}

---

### EphemeralKubernetesTokenRequestV1Spec <a name="EphemeralKubernetesTokenRequestV1Spec" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Spec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Spec.Initializer"></a>

```python
from cdktn_provider_kubernetes import ephemeral_kubernetes_token_request_v1

ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Spec(
  audiences: typing.List[str] = None,
  bound_object_ref: EphemeralKubernetesTokenRequestV1SpecBoundObjectRef = None,
  expiration_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Spec.property.audiences">audiences</a></code> | <code>typing.List[str]</code> | Audiences are the intendend audiences of the token. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Spec.property.boundObjectRef">bound_object_ref</a></code> | <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRef">EphemeralKubernetesTokenRequestV1SpecBoundObjectRef</a></code> | bound_object_ref block. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Spec.property.expirationSeconds">expiration_seconds</a></code> | <code>typing.Union[int, float]</code> | ExpirationSeconds is the requested duration of validity of the request. |

---

##### `audiences`<sup>Optional</sup> <a name="audiences" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Spec.property.audiences"></a>

```python
audiences: typing.List[str]
```

- *Type:* typing.List[str]

Audiences are the intendend audiences of the token.

A recipient of a token must identify themself with an identifier in the list of audiences of the token, and otherwise should reject the token. A token issued for multiple audiences may be used to authenticate against any of the audiences listed but implies a high degree of trust between the target audiences.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/token_request_v1#audiences EphemeralKubernetesTokenRequestV1#audiences}

---

##### `bound_object_ref`<sup>Optional</sup> <a name="bound_object_ref" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Spec.property.boundObjectRef"></a>

```python
bound_object_ref: EphemeralKubernetesTokenRequestV1SpecBoundObjectRef
```

- *Type:* <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRef">EphemeralKubernetesTokenRequestV1SpecBoundObjectRef</a>

bound_object_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/token_request_v1#bound_object_ref EphemeralKubernetesTokenRequestV1#bound_object_ref}

---

##### `expiration_seconds`<sup>Optional</sup> <a name="expiration_seconds" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Spec.property.expirationSeconds"></a>

```python
expiration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

ExpirationSeconds is the requested duration of validity of the request.

The token issuer may return a token with a different validity duration so a client needs to check the 'expiration' field in a response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/token_request_v1#expiration_seconds EphemeralKubernetesTokenRequestV1#expiration_seconds}

---

### EphemeralKubernetesTokenRequestV1SpecBoundObjectRef <a name="EphemeralKubernetesTokenRequestV1SpecBoundObjectRef" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRef"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRef.Initializer"></a>

```python
from cdktn_provider_kubernetes import ephemeral_kubernetes_token_request_v1

ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRef(
  api_version: str = None,
  kind: str = None,
  name: str = None,
  uid: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRef.property.apiVersion">api_version</a></code> | <code>str</code> | API version of the referent. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRef.property.kind">kind</a></code> | <code>str</code> | Kind of the referent. Valid kinds are 'Pod' and 'Secret'. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRef.property.name">name</a></code> | <code>str</code> | Name of the referent. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRef.property.uid">uid</a></code> | <code>str</code> | UID of the referent. |

---

##### `api_version`<sup>Optional</sup> <a name="api_version" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRef.property.apiVersion"></a>

```python
api_version: str
```

- *Type:* str

API version of the referent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/token_request_v1#api_version EphemeralKubernetesTokenRequestV1#api_version}

---

##### `kind`<sup>Optional</sup> <a name="kind" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRef.property.kind"></a>

```python
kind: str
```

- *Type:* str

Kind of the referent. Valid kinds are 'Pod' and 'Secret'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/token_request_v1#kind EphemeralKubernetesTokenRequestV1#kind}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRef.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the referent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/token_request_v1#name EphemeralKubernetesTokenRequestV1#name}

---

##### `uid`<sup>Optional</sup> <a name="uid" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRef.property.uid"></a>

```python
uid: str
```

- *Type:* str

UID of the referent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/token_request_v1#uid EphemeralKubernetesTokenRequestV1#uid}

---

## Classes <a name="Classes" id="Classes"></a>

### EphemeralKubernetesTokenRequestV1MetadataOutputReference <a name="EphemeralKubernetesTokenRequestV1MetadataOutputReference" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.Initializer"></a>

```python
from cdktn_provider_kubernetes import ephemeral_kubernetes_token_request_v1

ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Metadata">EphemeralKubernetesTokenRequestV1Metadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EphemeralKubernetesTokenRequestV1Metadata
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Metadata">EphemeralKubernetesTokenRequestV1Metadata</a>

---


### EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference <a name="EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.Initializer"></a>

```python
from cdktn_provider_kubernetes import ephemeral_kubernetes_token_request_v1

ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.resetApiVersion">reset_api_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.resetKind">reset_kind</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.resetUid">reset_uid</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_api_version` <a name="reset_api_version" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.resetApiVersion"></a>

```python
def reset_api_version() -> None
```

##### `reset_kind` <a name="reset_kind" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.resetKind"></a>

```python
def reset_kind() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_uid` <a name="reset_uid" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.resetUid"></a>

```python
def reset_uid() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.property.apiVersionInput">api_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.property.kindInput">kind_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.property.uidInput">uid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.property.apiVersion">api_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRef">EphemeralKubernetesTokenRequestV1SpecBoundObjectRef</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `api_version_input`<sup>Optional</sup> <a name="api_version_input" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.property.apiVersionInput"></a>

```python
api_version_input: str
```

- *Type:* str

---

##### `kind_input`<sup>Optional</sup> <a name="kind_input" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.property.kindInput"></a>

```python
kind_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `uid_input`<sup>Optional</sup> <a name="uid_input" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.property.uidInput"></a>

```python
uid_input: str
```

- *Type:* str

---

##### `api_version`<sup>Required</sup> <a name="api_version" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.property.apiVersion"></a>

```python
api_version: str
```

- *Type:* str

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EphemeralKubernetesTokenRequestV1SpecBoundObjectRef
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRef">EphemeralKubernetesTokenRequestV1SpecBoundObjectRef</a>

---


### EphemeralKubernetesTokenRequestV1SpecOutputReference <a name="EphemeralKubernetesTokenRequestV1SpecOutputReference" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.Initializer"></a>

```python
from cdktn_provider_kubernetes import ephemeral_kubernetes_token_request_v1

ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.putBoundObjectRef">put_bound_object_ref</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.resetAudiences">reset_audiences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.resetBoundObjectRef">reset_bound_object_ref</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.resetExpirationSeconds">reset_expiration_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_bound_object_ref` <a name="put_bound_object_ref" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.putBoundObjectRef"></a>

```python
def put_bound_object_ref(
  api_version: str = None,
  kind: str = None,
  name: str = None,
  uid: str = None
) -> None
```

###### `api_version`<sup>Optional</sup> <a name="api_version" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.putBoundObjectRef.parameter.apiVersion"></a>

- *Type:* str

API version of the referent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/token_request_v1#api_version EphemeralKubernetesTokenRequestV1#api_version}

---

###### `kind`<sup>Optional</sup> <a name="kind" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.putBoundObjectRef.parameter.kind"></a>

- *Type:* str

Kind of the referent. Valid kinds are 'Pod' and 'Secret'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/token_request_v1#kind EphemeralKubernetesTokenRequestV1#kind}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.putBoundObjectRef.parameter.name"></a>

- *Type:* str

Name of the referent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/token_request_v1#name EphemeralKubernetesTokenRequestV1#name}

---

###### `uid`<sup>Optional</sup> <a name="uid" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.putBoundObjectRef.parameter.uid"></a>

- *Type:* str

UID of the referent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/token_request_v1#uid EphemeralKubernetesTokenRequestV1#uid}

---

##### `reset_audiences` <a name="reset_audiences" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.resetAudiences"></a>

```python
def reset_audiences() -> None
```

##### `reset_bound_object_ref` <a name="reset_bound_object_ref" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.resetBoundObjectRef"></a>

```python
def reset_bound_object_ref() -> None
```

##### `reset_expiration_seconds` <a name="reset_expiration_seconds" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.resetExpirationSeconds"></a>

```python
def reset_expiration_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.property.boundObjectRef">bound_object_ref</a></code> | <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference">EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.property.audiencesInput">audiences_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.property.boundObjectRefInput">bound_object_ref_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRef">EphemeralKubernetesTokenRequestV1SpecBoundObjectRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.property.expirationSecondsInput">expiration_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.property.audiences">audiences</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.property.expirationSeconds">expiration_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Spec">EphemeralKubernetesTokenRequestV1Spec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bound_object_ref`<sup>Required</sup> <a name="bound_object_ref" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.property.boundObjectRef"></a>

```python
bound_object_ref: EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference
```

- *Type:* <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference">EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference</a>

---

##### `audiences_input`<sup>Optional</sup> <a name="audiences_input" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.property.audiencesInput"></a>

```python
audiences_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `bound_object_ref_input`<sup>Optional</sup> <a name="bound_object_ref_input" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.property.boundObjectRefInput"></a>

```python
bound_object_ref_input: IResolvable | EphemeralKubernetesTokenRequestV1SpecBoundObjectRef
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRef">EphemeralKubernetesTokenRequestV1SpecBoundObjectRef</a>

---

##### `expiration_seconds_input`<sup>Optional</sup> <a name="expiration_seconds_input" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.property.expirationSecondsInput"></a>

```python
expiration_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `audiences`<sup>Required</sup> <a name="audiences" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.property.audiences"></a>

```python
audiences: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `expiration_seconds`<sup>Required</sup> <a name="expiration_seconds" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.property.expirationSeconds"></a>

```python
expiration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | EphemeralKubernetesTokenRequestV1Spec
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Spec">EphemeralKubernetesTokenRequestV1Spec</a>

---



