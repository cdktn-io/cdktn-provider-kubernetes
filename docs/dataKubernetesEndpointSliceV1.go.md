# `dataKubernetesEndpointSliceV1` Submodule <a name="`dataKubernetesEndpointSliceV1` Submodule" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataKubernetesEndpointSliceV1 <a name="DataKubernetesEndpointSliceV1" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.0/docs/data-sources/endpoint_slice_v1 kubernetes_endpoint_slice_v1}.

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-kubernetes-go/kubernetes/v15/datakubernetesendpointslicev1"

datakubernetesendpointslicev1.NewDataKubernetesEndpointSliceV1(scope Construct, id *string, config DataKubernetesEndpointSliceV1Config) DataKubernetesEndpointSliceV1
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config">DataKubernetesEndpointSliceV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config">DataKubernetesEndpointSliceV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.putMetadata">PutMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutMetadata` <a name="PutMetadata" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.putMetadata"></a>

```go
func PutMetadata(value DataKubernetesEndpointSliceV1Metadata)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata">DataKubernetesEndpointSliceV1Metadata</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataKubernetesEndpointSliceV1 resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-kubernetes-go/kubernetes/v15/datakubernetesendpointslicev1"

datakubernetesendpointslicev1.DataKubernetesEndpointSliceV1_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-kubernetes-go/kubernetes/v15/datakubernetesendpointslicev1"

datakubernetesendpointslicev1.DataKubernetesEndpointSliceV1_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-kubernetes-go/kubernetes/v15/datakubernetesendpointslicev1"

datakubernetesendpointslicev1.DataKubernetesEndpointSliceV1_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-kubernetes-go/kubernetes/v15/datakubernetesendpointslicev1"

datakubernetesendpointslicev1.DataKubernetesEndpointSliceV1_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataKubernetesEndpointSliceV1 resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataKubernetesEndpointSliceV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataKubernetesEndpointSliceV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.0/docs/data-sources/endpoint_slice_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataKubernetesEndpointSliceV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.addressType">AddressType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.endpoint">Endpoint</a></code> | <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList">DataKubernetesEndpointSliceV1EndpointList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.metadata">Metadata</a></code> | <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference">DataKubernetesEndpointSliceV1MetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.port">Port</a></code> | <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList">DataKubernetesEndpointSliceV1PortList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.metadataInput">MetadataInput</a></code> | <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata">DataKubernetesEndpointSliceV1Metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AddressType`<sup>Required</sup> <a name="AddressType" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.addressType"></a>

```go
func AddressType() *string
```

- *Type:* *string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.endpoint"></a>

```go
func Endpoint() DataKubernetesEndpointSliceV1EndpointList
```

- *Type:* <a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList">DataKubernetesEndpointSliceV1EndpointList</a>

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.metadata"></a>

```go
func Metadata() DataKubernetesEndpointSliceV1MetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference">DataKubernetesEndpointSliceV1MetadataOutputReference</a>

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.port"></a>

```go
func Port() DataKubernetesEndpointSliceV1PortList
```

- *Type:* <a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList">DataKubernetesEndpointSliceV1PortList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.metadataInput"></a>

```go
func MetadataInput() DataKubernetesEndpointSliceV1Metadata
```

- *Type:* <a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata">DataKubernetesEndpointSliceV1Metadata</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataKubernetesEndpointSliceV1Config <a name="DataKubernetesEndpointSliceV1Config" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-kubernetes-go/kubernetes/v15/datakubernetesendpointslicev1"

&datakubernetesendpointslicev1.DataKubernetesEndpointSliceV1Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Metadata: github.com/cdktn-io/cdktn-provider-kubernetes-go/kubernetes/v15.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.property.metadata">Metadata</a></code> | <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata">DataKubernetesEndpointSliceV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.0/docs/data-sources/endpoint_slice_v1#id DataKubernetesEndpointSliceV1#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.property.metadata"></a>

```go
Metadata DataKubernetesEndpointSliceV1Metadata
```

- *Type:* <a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata">DataKubernetesEndpointSliceV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.0/docs/data-sources/endpoint_slice_v1#metadata DataKubernetesEndpointSliceV1#metadata}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.0/docs/data-sources/endpoint_slice_v1#id DataKubernetesEndpointSliceV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataKubernetesEndpointSliceV1Endpoint <a name="DataKubernetesEndpointSliceV1Endpoint" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Endpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Endpoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-kubernetes-go/kubernetes/v15/datakubernetesendpointslicev1"

&datakubernetesendpointslicev1.DataKubernetesEndpointSliceV1Endpoint {

}
```


### DataKubernetesEndpointSliceV1EndpointCondition <a name="DataKubernetesEndpointSliceV1EndpointCondition" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointCondition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-kubernetes-go/kubernetes/v15/datakubernetesendpointslicev1"

&datakubernetesendpointslicev1.DataKubernetesEndpointSliceV1EndpointCondition {

}
```


### DataKubernetesEndpointSliceV1EndpointTargetRef <a name="DataKubernetesEndpointSliceV1EndpointTargetRef" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRef"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRef.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-kubernetes-go/kubernetes/v15/datakubernetesendpointslicev1"

&datakubernetesendpointslicev1.DataKubernetesEndpointSliceV1EndpointTargetRef {

}
```


### DataKubernetesEndpointSliceV1Metadata <a name="DataKubernetesEndpointSliceV1Metadata" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-kubernetes-go/kubernetes/v15/datakubernetesendpointslicev1"

&datakubernetesendpointslicev1.DataKubernetesEndpointSliceV1Metadata {
	Annotations: *map[string]*string,
	GenerateName: *string,
	Labels: *map[string]*string,
	Name: *string,
	Namespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | An unstructured key value map stored with the endpoint_slice that may be used to store arbitrary metadata. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata.property.generateName">GenerateName</a></code> | <code>*string</code> | Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Map of string keys and values that can be used to organize and categorize (scope and select) the endpoint_slice. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata.property.name">Name</a></code> | <code>*string</code> | Name of the endpoint_slice, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata.property.namespace">Namespace</a></code> | <code>*string</code> | Namespace defines the space within which name of the endpoint_slice must be unique. |

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata.property.annotations"></a>

```go
Annotations *map[string]*string
```

- *Type:* *map[string]*string

An unstructured key value map stored with the endpoint_slice that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.0/docs/data-sources/endpoint_slice_v1#annotations DataKubernetesEndpointSliceV1#annotations}

---

##### `GenerateName`<sup>Optional</sup> <a name="GenerateName" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata.property.generateName"></a>

```go
GenerateName *string
```

- *Type:* *string

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. More info: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.0/docs/data-sources/endpoint_slice_v1#generate_name DataKubernetesEndpointSliceV1#generate_name}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Map of string keys and values that can be used to organize and categorize (scope and select) the endpoint_slice.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.0/docs/data-sources/endpoint_slice_v1#labels DataKubernetesEndpointSliceV1#labels}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the endpoint_slice, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.0/docs/data-sources/endpoint_slice_v1#name DataKubernetesEndpointSliceV1#name}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Namespace defines the space within which name of the endpoint_slice must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.0/docs/data-sources/endpoint_slice_v1#namespace DataKubernetesEndpointSliceV1#namespace}

---

### DataKubernetesEndpointSliceV1Port <a name="DataKubernetesEndpointSliceV1Port" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Port"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Port.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-kubernetes-go/kubernetes/v15/datakubernetesendpointslicev1"

&datakubernetesendpointslicev1.DataKubernetesEndpointSliceV1Port {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataKubernetesEndpointSliceV1EndpointConditionList <a name="DataKubernetesEndpointSliceV1EndpointConditionList" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-kubernetes-go/kubernetes/v15/datakubernetesendpointslicev1"

datakubernetesendpointslicev1.NewDataKubernetesEndpointSliceV1EndpointConditionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataKubernetesEndpointSliceV1EndpointConditionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.get"></a>

```go
func Get(index *f64) DataKubernetesEndpointSliceV1EndpointConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataKubernetesEndpointSliceV1EndpointConditionOutputReference <a name="DataKubernetesEndpointSliceV1EndpointConditionOutputReference" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-kubernetes-go/kubernetes/v15/datakubernetesendpointslicev1"

datakubernetesendpointslicev1.NewDataKubernetesEndpointSliceV1EndpointConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataKubernetesEndpointSliceV1EndpointConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.property.ready">Ready</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.property.serving">Serving</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.property.terminating">Terminating</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointCondition">DataKubernetesEndpointSliceV1EndpointCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Ready`<sup>Required</sup> <a name="Ready" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.property.ready"></a>

```go
func Ready() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Serving`<sup>Required</sup> <a name="Serving" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.property.serving"></a>

```go
func Serving() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Terminating`<sup>Required</sup> <a name="Terminating" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.property.terminating"></a>

```go
func Terminating() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataKubernetesEndpointSliceV1EndpointCondition
```

- *Type:* <a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointCondition">DataKubernetesEndpointSliceV1EndpointCondition</a>

---


### DataKubernetesEndpointSliceV1EndpointList <a name="DataKubernetesEndpointSliceV1EndpointList" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-kubernetes-go/kubernetes/v15/datakubernetesendpointslicev1"

datakubernetesendpointslicev1.NewDataKubernetesEndpointSliceV1EndpointList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataKubernetesEndpointSliceV1EndpointList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.get"></a>

```go
func Get(index *f64) DataKubernetesEndpointSliceV1EndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataKubernetesEndpointSliceV1EndpointOutputReference <a name="DataKubernetesEndpointSliceV1EndpointOutputReference" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-kubernetes-go/kubernetes/v15/datakubernetesendpointslicev1"

datakubernetesendpointslicev1.NewDataKubernetesEndpointSliceV1EndpointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataKubernetesEndpointSliceV1EndpointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.property.addresses">Addresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.property.condition">Condition</a></code> | <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList">DataKubernetesEndpointSliceV1EndpointConditionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.property.nodeName">NodeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.property.targetRef">TargetRef</a></code> | <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList">DataKubernetesEndpointSliceV1EndpointTargetRefList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.property.zone">Zone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Endpoint">DataKubernetesEndpointSliceV1Endpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Addresses`<sup>Required</sup> <a name="Addresses" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.property.addresses"></a>

```go
func Addresses() *[]*string
```

- *Type:* *[]*string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.property.condition"></a>

```go
func Condition() DataKubernetesEndpointSliceV1EndpointConditionList
```

- *Type:* <a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList">DataKubernetesEndpointSliceV1EndpointConditionList</a>

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `NodeName`<sup>Required</sup> <a name="NodeName" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.property.nodeName"></a>

```go
func NodeName() *string
```

- *Type:* *string

---

##### `TargetRef`<sup>Required</sup> <a name="TargetRef" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.property.targetRef"></a>

```go
func TargetRef() DataKubernetesEndpointSliceV1EndpointTargetRefList
```

- *Type:* <a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList">DataKubernetesEndpointSliceV1EndpointTargetRefList</a>

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.property.zone"></a>

```go
func Zone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.property.internalValue"></a>

```go
func InternalValue() DataKubernetesEndpointSliceV1Endpoint
```

- *Type:* <a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Endpoint">DataKubernetesEndpointSliceV1Endpoint</a>

---


### DataKubernetesEndpointSliceV1EndpointTargetRefList <a name="DataKubernetesEndpointSliceV1EndpointTargetRefList" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-kubernetes-go/kubernetes/v15/datakubernetesendpointslicev1"

datakubernetesendpointslicev1.NewDataKubernetesEndpointSliceV1EndpointTargetRefList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataKubernetesEndpointSliceV1EndpointTargetRefList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.get"></a>

```go
func Get(index *f64) DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference <a name="DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-kubernetes-go/kubernetes/v15/datakubernetesendpointslicev1"

datakubernetesendpointslicev1.NewDataKubernetesEndpointSliceV1EndpointTargetRefOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.property.fieldPath">FieldPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.property.resourceVersion">ResourceVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRef">DataKubernetesEndpointSliceV1EndpointTargetRef</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FieldPath`<sup>Required</sup> <a name="FieldPath" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.property.fieldPath"></a>

```go
func FieldPath() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `ResourceVersion`<sup>Required</sup> <a name="ResourceVersion" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.property.resourceVersion"></a>

```go
func ResourceVersion() *string
```

- *Type:* *string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.property.internalValue"></a>

```go
func InternalValue() DataKubernetesEndpointSliceV1EndpointTargetRef
```

- *Type:* <a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRef">DataKubernetesEndpointSliceV1EndpointTargetRef</a>

---


### DataKubernetesEndpointSliceV1MetadataOutputReference <a name="DataKubernetesEndpointSliceV1MetadataOutputReference" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-kubernetes-go/kubernetes/v15/datakubernetesendpointslicev1"

datakubernetesendpointslicev1.NewDataKubernetesEndpointSliceV1MetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataKubernetesEndpointSliceV1MetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.resetGenerateName">ResetGenerateName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetGenerateName` <a name="ResetGenerateName" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.resetGenerateName"></a>

```go
func ResetGenerateName()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.resetNamespace"></a>

```go
func ResetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.generation">Generation</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.resourceVersion">ResourceVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.annotationsInput">AnnotationsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.generateNameInput">GenerateNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.generateName">GenerateName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata">DataKubernetesEndpointSliceV1Metadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Generation`<sup>Required</sup> <a name="Generation" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.generation"></a>

```go
func Generation() *f64
```

- *Type:* *f64

---

##### `ResourceVersion`<sup>Required</sup> <a name="ResourceVersion" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.resourceVersion"></a>

```go
func ResourceVersion() *string
```

- *Type:* *string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.annotationsInput"></a>

```go
func AnnotationsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `GenerateNameInput`<sup>Optional</sup> <a name="GenerateNameInput" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.generateNameInput"></a>

```go
func GenerateNameInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.annotations"></a>

```go
func Annotations() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `GenerateName`<sup>Required</sup> <a name="GenerateName" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.generateName"></a>

```go
func GenerateName() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() DataKubernetesEndpointSliceV1Metadata
```

- *Type:* <a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata">DataKubernetesEndpointSliceV1Metadata</a>

---


### DataKubernetesEndpointSliceV1PortList <a name="DataKubernetesEndpointSliceV1PortList" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-kubernetes-go/kubernetes/v15/datakubernetesendpointslicev1"

datakubernetesendpointslicev1.NewDataKubernetesEndpointSliceV1PortList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataKubernetesEndpointSliceV1PortList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.get"></a>

```go
func Get(index *f64) DataKubernetesEndpointSliceV1PortOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataKubernetesEndpointSliceV1PortOutputReference <a name="DataKubernetesEndpointSliceV1PortOutputReference" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-kubernetes-go/kubernetes/v15/datakubernetesendpointslicev1"

datakubernetesendpointslicev1.NewDataKubernetesEndpointSliceV1PortOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataKubernetesEndpointSliceV1PortOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.property.appProtocol">AppProtocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.property.port">Port</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Port">DataKubernetesEndpointSliceV1Port</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AppProtocol`<sup>Required</sup> <a name="AppProtocol" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.property.appProtocol"></a>

```go
func AppProtocol() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.property.port"></a>

```go
func Port() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.property.internalValue"></a>

```go
func InternalValue() DataKubernetesEndpointSliceV1Port
```

- *Type:* <a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Port">DataKubernetesEndpointSliceV1Port</a>

---



