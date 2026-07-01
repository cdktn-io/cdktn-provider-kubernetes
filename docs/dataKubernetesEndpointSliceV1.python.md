# `dataKubernetesEndpointSliceV1` Submodule <a name="`dataKubernetesEndpointSliceV1` Submodule" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataKubernetesEndpointSliceV1 <a name="DataKubernetesEndpointSliceV1" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/data-sources/endpoint_slice_v1 kubernetes_endpoint_slice_v1}.

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.Initializer"></a>

```python
from cdktn_provider_kubernetes import data_kubernetes_endpoint_slice_v1

dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  metadata: DataKubernetesEndpointSliceV1Metadata,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.Initializer.parameter.metadata">metadata</a></code> | <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata">DataKubernetesEndpointSliceV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/data-sources/endpoint_slice_v1#id DataKubernetesEndpointSliceV1#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.Initializer.parameter.metadata"></a>

- *Type:* <a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata">DataKubernetesEndpointSliceV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/data-sources/endpoint_slice_v1#metadata DataKubernetesEndpointSliceV1#metadata}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/data-sources/endpoint_slice_v1#id DataKubernetesEndpointSliceV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.putMetadata">put_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_metadata` <a name="put_metadata" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.putMetadata"></a>

```python
def put_metadata(
  annotations: typing.Mapping[str] = None,
  generate_name: str = None,
  labels: typing.Mapping[str] = None,
  name: str = None,
  namespace: str = None
) -> None
```

###### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.putMetadata.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

An unstructured key value map stored with the endpoint_slice that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/data-sources/endpoint_slice_v1#annotations DataKubernetesEndpointSliceV1#annotations}

---

###### `generate_name`<sup>Optional</sup> <a name="generate_name" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.putMetadata.parameter.generateName"></a>

- *Type:* str

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. More info: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/data-sources/endpoint_slice_v1#generate_name DataKubernetesEndpointSliceV1#generate_name}

---

###### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.putMetadata.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Map of string keys and values that can be used to organize and categorize (scope and select) the endpoint_slice.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/data-sources/endpoint_slice_v1#labels DataKubernetesEndpointSliceV1#labels}

---

###### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.putMetadata.parameter.name"></a>

- *Type:* str

Name of the endpoint_slice, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/data-sources/endpoint_slice_v1#name DataKubernetesEndpointSliceV1#name}

---

###### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.putMetadata.parameter.namespace"></a>

- *Type:* str

Namespace defines the space within which name of the endpoint_slice must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/data-sources/endpoint_slice_v1#namespace DataKubernetesEndpointSliceV1#namespace}

---

##### `reset_id` <a name="reset_id" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataKubernetesEndpointSliceV1 resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.isConstruct"></a>

```python
from cdktn_provider_kubernetes import data_kubernetes_endpoint_slice_v1

dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.isTerraformElement"></a>

```python
from cdktn_provider_kubernetes import data_kubernetes_endpoint_slice_v1

dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.isTerraformDataSource"></a>

```python
from cdktn_provider_kubernetes import data_kubernetes_endpoint_slice_v1

dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.generateConfigForImport"></a>

```python
from cdktn_provider_kubernetes import data_kubernetes_endpoint_slice_v1

dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataKubernetesEndpointSliceV1 resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataKubernetesEndpointSliceV1 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataKubernetesEndpointSliceV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/data-sources/endpoint_slice_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataKubernetesEndpointSliceV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.addressType">address_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.endpoint">endpoint</a></code> | <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList">DataKubernetesEndpointSliceV1EndpointList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.metadata">metadata</a></code> | <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference">DataKubernetesEndpointSliceV1MetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.port">port</a></code> | <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList">DataKubernetesEndpointSliceV1PortList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.metadataInput">metadata_input</a></code> | <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata">DataKubernetesEndpointSliceV1Metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `address_type`<sup>Required</sup> <a name="address_type" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.addressType"></a>

```python
address_type: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.endpoint"></a>

```python
endpoint: DataKubernetesEndpointSliceV1EndpointList
```

- *Type:* <a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList">DataKubernetesEndpointSliceV1EndpointList</a>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.metadata"></a>

```python
metadata: DataKubernetesEndpointSliceV1MetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference">DataKubernetesEndpointSliceV1MetadataOutputReference</a>

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.port"></a>

```python
port: DataKubernetesEndpointSliceV1PortList
```

- *Type:* <a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList">DataKubernetesEndpointSliceV1PortList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.metadataInput"></a>

```python
metadata_input: DataKubernetesEndpointSliceV1Metadata
```

- *Type:* <a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata">DataKubernetesEndpointSliceV1Metadata</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataKubernetesEndpointSliceV1Config <a name="DataKubernetesEndpointSliceV1Config" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.Initializer"></a>

```python
from cdktn_provider_kubernetes import data_kubernetes_endpoint_slice_v1

dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  metadata: DataKubernetesEndpointSliceV1Metadata,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.property.metadata">metadata</a></code> | <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata">DataKubernetesEndpointSliceV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/data-sources/endpoint_slice_v1#id DataKubernetesEndpointSliceV1#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.property.metadata"></a>

```python
metadata: DataKubernetesEndpointSliceV1Metadata
```

- *Type:* <a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata">DataKubernetesEndpointSliceV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/data-sources/endpoint_slice_v1#metadata DataKubernetesEndpointSliceV1#metadata}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/data-sources/endpoint_slice_v1#id DataKubernetesEndpointSliceV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataKubernetesEndpointSliceV1Endpoint <a name="DataKubernetesEndpointSliceV1Endpoint" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Endpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Endpoint.Initializer"></a>

```python
from cdktn_provider_kubernetes import data_kubernetes_endpoint_slice_v1

dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Endpoint()
```


### DataKubernetesEndpointSliceV1EndpointCondition <a name="DataKubernetesEndpointSliceV1EndpointCondition" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointCondition.Initializer"></a>

```python
from cdktn_provider_kubernetes import data_kubernetes_endpoint_slice_v1

dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointCondition()
```


### DataKubernetesEndpointSliceV1EndpointTargetRef <a name="DataKubernetesEndpointSliceV1EndpointTargetRef" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRef"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRef.Initializer"></a>

```python
from cdktn_provider_kubernetes import data_kubernetes_endpoint_slice_v1

dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRef()
```


### DataKubernetesEndpointSliceV1Metadata <a name="DataKubernetesEndpointSliceV1Metadata" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata.Initializer"></a>

```python
from cdktn_provider_kubernetes import data_kubernetes_endpoint_slice_v1

dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata(
  annotations: typing.Mapping[str] = None,
  generate_name: str = None,
  labels: typing.Mapping[str] = None,
  name: str = None,
  namespace: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | An unstructured key value map stored with the endpoint_slice that may be used to store arbitrary metadata. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata.property.generateName">generate_name</a></code> | <code>str</code> | Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Map of string keys and values that can be used to organize and categorize (scope and select) the endpoint_slice. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata.property.name">name</a></code> | <code>str</code> | Name of the endpoint_slice, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata.property.namespace">namespace</a></code> | <code>str</code> | Namespace defines the space within which name of the endpoint_slice must be unique. |

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

An unstructured key value map stored with the endpoint_slice that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/data-sources/endpoint_slice_v1#annotations DataKubernetesEndpointSliceV1#annotations}

---

##### `generate_name`<sup>Optional</sup> <a name="generate_name" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata.property.generateName"></a>

```python
generate_name: str
```

- *Type:* str

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. More info: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/data-sources/endpoint_slice_v1#generate_name DataKubernetesEndpointSliceV1#generate_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Map of string keys and values that can be used to organize and categorize (scope and select) the endpoint_slice.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/data-sources/endpoint_slice_v1#labels DataKubernetesEndpointSliceV1#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the endpoint_slice, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/data-sources/endpoint_slice_v1#name DataKubernetesEndpointSliceV1#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Namespace defines the space within which name of the endpoint_slice must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/data-sources/endpoint_slice_v1#namespace DataKubernetesEndpointSliceV1#namespace}

---

### DataKubernetesEndpointSliceV1Port <a name="DataKubernetesEndpointSliceV1Port" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Port"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Port.Initializer"></a>

```python
from cdktn_provider_kubernetes import data_kubernetes_endpoint_slice_v1

dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Port()
```


## Classes <a name="Classes" id="Classes"></a>

### DataKubernetesEndpointSliceV1EndpointConditionList <a name="DataKubernetesEndpointSliceV1EndpointConditionList" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.Initializer"></a>

```python
from cdktn_provider_kubernetes import data_kubernetes_endpoint_slice_v1

dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataKubernetesEndpointSliceV1EndpointConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataKubernetesEndpointSliceV1EndpointConditionOutputReference <a name="DataKubernetesEndpointSliceV1EndpointConditionOutputReference" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.Initializer"></a>

```python
from cdktn_provider_kubernetes import data_kubernetes_endpoint_slice_v1

dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.property.ready">ready</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.property.serving">serving</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.property.terminating">terminating</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointCondition">DataKubernetesEndpointSliceV1EndpointCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ready`<sup>Required</sup> <a name="ready" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.property.ready"></a>

```python
ready: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `serving`<sup>Required</sup> <a name="serving" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.property.serving"></a>

```python
serving: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `terminating`<sup>Required</sup> <a name="terminating" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.property.terminating"></a>

```python
terminating: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.property.internalValue"></a>

```python
internal_value: DataKubernetesEndpointSliceV1EndpointCondition
```

- *Type:* <a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointCondition">DataKubernetesEndpointSliceV1EndpointCondition</a>

---


### DataKubernetesEndpointSliceV1EndpointList <a name="DataKubernetesEndpointSliceV1EndpointList" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.Initializer"></a>

```python
from cdktn_provider_kubernetes import data_kubernetes_endpoint_slice_v1

dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataKubernetesEndpointSliceV1EndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataKubernetesEndpointSliceV1EndpointOutputReference <a name="DataKubernetesEndpointSliceV1EndpointOutputReference" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.Initializer"></a>

```python
from cdktn_provider_kubernetes import data_kubernetes_endpoint_slice_v1

dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.property.addresses">addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList">DataKubernetesEndpointSliceV1EndpointConditionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.property.nodeName">node_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.property.targetRef">target_ref</a></code> | <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList">DataKubernetesEndpointSliceV1EndpointTargetRefList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.property.zone">zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Endpoint">DataKubernetesEndpointSliceV1Endpoint</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `addresses`<sup>Required</sup> <a name="addresses" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.property.addresses"></a>

```python
addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.property.condition"></a>

```python
condition: DataKubernetesEndpointSliceV1EndpointConditionList
```

- *Type:* <a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList">DataKubernetesEndpointSliceV1EndpointConditionList</a>

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `node_name`<sup>Required</sup> <a name="node_name" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.property.nodeName"></a>

```python
node_name: str
```

- *Type:* str

---

##### `target_ref`<sup>Required</sup> <a name="target_ref" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.property.targetRef"></a>

```python
target_ref: DataKubernetesEndpointSliceV1EndpointTargetRefList
```

- *Type:* <a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList">DataKubernetesEndpointSliceV1EndpointTargetRefList</a>

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.property.zone"></a>

```python
zone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.property.internalValue"></a>

```python
internal_value: DataKubernetesEndpointSliceV1Endpoint
```

- *Type:* <a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Endpoint">DataKubernetesEndpointSliceV1Endpoint</a>

---


### DataKubernetesEndpointSliceV1EndpointTargetRefList <a name="DataKubernetesEndpointSliceV1EndpointTargetRefList" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.Initializer"></a>

```python
from cdktn_provider_kubernetes import data_kubernetes_endpoint_slice_v1

dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference <a name="DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.Initializer"></a>

```python
from cdktn_provider_kubernetes import data_kubernetes_endpoint_slice_v1

dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.property.fieldPath">field_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.property.resourceVersion">resource_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRef">DataKubernetesEndpointSliceV1EndpointTargetRef</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `field_path`<sup>Required</sup> <a name="field_path" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.property.fieldPath"></a>

```python
field_path: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `resource_version`<sup>Required</sup> <a name="resource_version" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.property.resourceVersion"></a>

```python
resource_version: str
```

- *Type:* str

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.property.internalValue"></a>

```python
internal_value: DataKubernetesEndpointSliceV1EndpointTargetRef
```

- *Type:* <a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRef">DataKubernetesEndpointSliceV1EndpointTargetRef</a>

---


### DataKubernetesEndpointSliceV1MetadataOutputReference <a name="DataKubernetesEndpointSliceV1MetadataOutputReference" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.Initializer"></a>

```python
from cdktn_provider_kubernetes import data_kubernetes_endpoint_slice_v1

dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.resetGenerateName">reset_generate_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.resetNamespace">reset_namespace</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_annotations` <a name="reset_annotations" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_generate_name` <a name="reset_generate_name" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.resetGenerateName"></a>

```python
def reset_generate_name() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.resetNamespace"></a>

```python
def reset_namespace() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.generation">generation</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.resourceVersion">resource_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.generateNameInput">generate_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.generateName">generate_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata">DataKubernetesEndpointSliceV1Metadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.generation"></a>

```python
generation: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_version`<sup>Required</sup> <a name="resource_version" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.resourceVersion"></a>

```python
resource_version: str
```

- *Type:* str

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `generate_name_input`<sup>Optional</sup> <a name="generate_name_input" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.generateNameInput"></a>

```python
generate_name_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `generate_name`<sup>Required</sup> <a name="generate_name" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.generateName"></a>

```python
generate_name: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.internalValue"></a>

```python
internal_value: DataKubernetesEndpointSliceV1Metadata
```

- *Type:* <a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata">DataKubernetesEndpointSliceV1Metadata</a>

---


### DataKubernetesEndpointSliceV1PortList <a name="DataKubernetesEndpointSliceV1PortList" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.Initializer"></a>

```python
from cdktn_provider_kubernetes import data_kubernetes_endpoint_slice_v1

dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataKubernetesEndpointSliceV1PortOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataKubernetesEndpointSliceV1PortOutputReference <a name="DataKubernetesEndpointSliceV1PortOutputReference" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.Initializer"></a>

```python
from cdktn_provider_kubernetes import data_kubernetes_endpoint_slice_v1

dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.property.appProtocol">app_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.property.port">port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Port">DataKubernetesEndpointSliceV1Port</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `app_protocol`<sup>Required</sup> <a name="app_protocol" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.property.appProtocol"></a>

```python
app_protocol: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.property.port"></a>

```python
port: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.property.internalValue"></a>

```python
internal_value: DataKubernetesEndpointSliceV1Port
```

- *Type:* <a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Port">DataKubernetesEndpointSliceV1Port</a>

---



