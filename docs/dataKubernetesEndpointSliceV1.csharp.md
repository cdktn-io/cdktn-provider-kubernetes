# `dataKubernetesEndpointSliceV1` Submodule <a name="`dataKubernetesEndpointSliceV1` Submodule" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataKubernetesEndpointSliceV1 <a name="DataKubernetesEndpointSliceV1" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/data-sources/endpoint_slice_v1 kubernetes_endpoint_slice_v1}.

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

new DataKubernetesEndpointSliceV1(Construct Scope, string Id, DataKubernetesEndpointSliceV1Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config">DataKubernetesEndpointSliceV1Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.Initializer.parameter.config"></a>

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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutMetadata` <a name="PutMetadata" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.putMetadata"></a>

```csharp
private void PutMetadata(DataKubernetesEndpointSliceV1Metadata Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata">DataKubernetesEndpointSliceV1Metadata</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.resetId"></a>

```csharp
private void ResetId()
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

```csharp
using Io.Cdktn.Providers.Kubernetes;

DataKubernetesEndpointSliceV1.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

DataKubernetesEndpointSliceV1.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

DataKubernetesEndpointSliceV1.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

DataKubernetesEndpointSliceV1.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataKubernetesEndpointSliceV1 resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataKubernetesEndpointSliceV1 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataKubernetesEndpointSliceV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/data-sources/endpoint_slice_v1#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataKubernetesEndpointSliceV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.addressType">AddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.endpoint">Endpoint</a></code> | <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList">DataKubernetesEndpointSliceV1EndpointList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.metadata">Metadata</a></code> | <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference">DataKubernetesEndpointSliceV1MetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.port">Port</a></code> | <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList">DataKubernetesEndpointSliceV1PortList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.metadataInput">MetadataInput</a></code> | <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata">DataKubernetesEndpointSliceV1Metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AddressType`<sup>Required</sup> <a name="AddressType" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.addressType"></a>

```csharp
public string AddressType { get; }
```

- *Type:* string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.endpoint"></a>

```csharp
public DataKubernetesEndpointSliceV1EndpointList Endpoint { get; }
```

- *Type:* <a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList">DataKubernetesEndpointSliceV1EndpointList</a>

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.metadata"></a>

```csharp
public DataKubernetesEndpointSliceV1MetadataOutputReference Metadata { get; }
```

- *Type:* <a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference">DataKubernetesEndpointSliceV1MetadataOutputReference</a>

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.port"></a>

```csharp
public DataKubernetesEndpointSliceV1PortList Port { get; }
```

- *Type:* <a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList">DataKubernetesEndpointSliceV1PortList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.metadataInput"></a>

```csharp
public DataKubernetesEndpointSliceV1Metadata MetadataInput { get; }
```

- *Type:* <a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata">DataKubernetesEndpointSliceV1Metadata</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataKubernetesEndpointSliceV1Config <a name="DataKubernetesEndpointSliceV1Config" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

new DataKubernetesEndpointSliceV1Config {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    DataKubernetesEndpointSliceV1Metadata Metadata,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.property.metadata">Metadata</a></code> | <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata">DataKubernetesEndpointSliceV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/data-sources/endpoint_slice_v1#id DataKubernetesEndpointSliceV1#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.property.metadata"></a>

```csharp
public DataKubernetesEndpointSliceV1Metadata Metadata { get; set; }
```

- *Type:* <a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata">DataKubernetesEndpointSliceV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/data-sources/endpoint_slice_v1#metadata DataKubernetesEndpointSliceV1#metadata}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/data-sources/endpoint_slice_v1#id DataKubernetesEndpointSliceV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataKubernetesEndpointSliceV1Endpoint <a name="DataKubernetesEndpointSliceV1Endpoint" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Endpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Endpoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

new DataKubernetesEndpointSliceV1Endpoint {

};
```


### DataKubernetesEndpointSliceV1EndpointCondition <a name="DataKubernetesEndpointSliceV1EndpointCondition" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointCondition.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

new DataKubernetesEndpointSliceV1EndpointCondition {

};
```


### DataKubernetesEndpointSliceV1EndpointTargetRef <a name="DataKubernetesEndpointSliceV1EndpointTargetRef" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRef"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRef.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

new DataKubernetesEndpointSliceV1EndpointTargetRef {

};
```


### DataKubernetesEndpointSliceV1Metadata <a name="DataKubernetesEndpointSliceV1Metadata" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

new DataKubernetesEndpointSliceV1Metadata {
    System.Collections.Generic.IDictionary<string, string> Annotations = null,
    string GenerateName = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Name = null,
    string Namespace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | An unstructured key value map stored with the endpoint_slice that may be used to store arbitrary metadata. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata.property.generateName">GenerateName</a></code> | <code>string</code> | Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Map of string keys and values that can be used to organize and categorize (scope and select) the endpoint_slice. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata.property.name">Name</a></code> | <code>string</code> | Name of the endpoint_slice, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata.property.namespace">Namespace</a></code> | <code>string</code> | Namespace defines the space within which name of the endpoint_slice must be unique. |

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

An unstructured key value map stored with the endpoint_slice that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/data-sources/endpoint_slice_v1#annotations DataKubernetesEndpointSliceV1#annotations}

---

##### `GenerateName`<sup>Optional</sup> <a name="GenerateName" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata.property.generateName"></a>

```csharp
public string GenerateName { get; set; }
```

- *Type:* string

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. More info: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/data-sources/endpoint_slice_v1#generate_name DataKubernetesEndpointSliceV1#generate_name}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Map of string keys and values that can be used to organize and categorize (scope and select) the endpoint_slice.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/data-sources/endpoint_slice_v1#labels DataKubernetesEndpointSliceV1#labels}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the endpoint_slice, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/data-sources/endpoint_slice_v1#name DataKubernetesEndpointSliceV1#name}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Namespace defines the space within which name of the endpoint_slice must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/data-sources/endpoint_slice_v1#namespace DataKubernetesEndpointSliceV1#namespace}

---

### DataKubernetesEndpointSliceV1Port <a name="DataKubernetesEndpointSliceV1Port" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Port"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Port.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

new DataKubernetesEndpointSliceV1Port {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataKubernetesEndpointSliceV1EndpointConditionList <a name="DataKubernetesEndpointSliceV1EndpointConditionList" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

new DataKubernetesEndpointSliceV1EndpointConditionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.get"></a>

```csharp
private DataKubernetesEndpointSliceV1EndpointConditionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataKubernetesEndpointSliceV1EndpointConditionOutputReference <a name="DataKubernetesEndpointSliceV1EndpointConditionOutputReference" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

new DataKubernetesEndpointSliceV1EndpointConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.property.ready">Ready</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.property.serving">Serving</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.property.terminating">Terminating</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointCondition">DataKubernetesEndpointSliceV1EndpointCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ready`<sup>Required</sup> <a name="Ready" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.property.ready"></a>

```csharp
public IResolvable Ready { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Serving`<sup>Required</sup> <a name="Serving" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.property.serving"></a>

```csharp
public IResolvable Serving { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Terminating`<sup>Required</sup> <a name="Terminating" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.property.terminating"></a>

```csharp
public IResolvable Terminating { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.property.internalValue"></a>

```csharp
public DataKubernetesEndpointSliceV1EndpointCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointCondition">DataKubernetesEndpointSliceV1EndpointCondition</a>

---


### DataKubernetesEndpointSliceV1EndpointList <a name="DataKubernetesEndpointSliceV1EndpointList" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

new DataKubernetesEndpointSliceV1EndpointList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.get"></a>

```csharp
private DataKubernetesEndpointSliceV1EndpointOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataKubernetesEndpointSliceV1EndpointOutputReference <a name="DataKubernetesEndpointSliceV1EndpointOutputReference" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

new DataKubernetesEndpointSliceV1EndpointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.property.addresses">Addresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.property.condition">Condition</a></code> | <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList">DataKubernetesEndpointSliceV1EndpointConditionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.property.nodeName">NodeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.property.targetRef">TargetRef</a></code> | <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList">DataKubernetesEndpointSliceV1EndpointTargetRefList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.property.zone">Zone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Endpoint">DataKubernetesEndpointSliceV1Endpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Addresses`<sup>Required</sup> <a name="Addresses" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.property.addresses"></a>

```csharp
public string[] Addresses { get; }
```

- *Type:* string[]

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.property.condition"></a>

```csharp
public DataKubernetesEndpointSliceV1EndpointConditionList Condition { get; }
```

- *Type:* <a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList">DataKubernetesEndpointSliceV1EndpointConditionList</a>

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `NodeName`<sup>Required</sup> <a name="NodeName" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.property.nodeName"></a>

```csharp
public string NodeName { get; }
```

- *Type:* string

---

##### `TargetRef`<sup>Required</sup> <a name="TargetRef" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.property.targetRef"></a>

```csharp
public DataKubernetesEndpointSliceV1EndpointTargetRefList TargetRef { get; }
```

- *Type:* <a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList">DataKubernetesEndpointSliceV1EndpointTargetRefList</a>

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.property.zone"></a>

```csharp
public string Zone { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.property.internalValue"></a>

```csharp
public DataKubernetesEndpointSliceV1Endpoint InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Endpoint">DataKubernetesEndpointSliceV1Endpoint</a>

---


### DataKubernetesEndpointSliceV1EndpointTargetRefList <a name="DataKubernetesEndpointSliceV1EndpointTargetRefList" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

new DataKubernetesEndpointSliceV1EndpointTargetRefList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.get"></a>

```csharp
private DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference <a name="DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

new DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.property.fieldPath">FieldPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.property.resourceVersion">ResourceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRef">DataKubernetesEndpointSliceV1EndpointTargetRef</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FieldPath`<sup>Required</sup> <a name="FieldPath" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.property.fieldPath"></a>

```csharp
public string FieldPath { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `ResourceVersion`<sup>Required</sup> <a name="ResourceVersion" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.property.resourceVersion"></a>

```csharp
public string ResourceVersion { get; }
```

- *Type:* string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.property.internalValue"></a>

```csharp
public DataKubernetesEndpointSliceV1EndpointTargetRef InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRef">DataKubernetesEndpointSliceV1EndpointTargetRef</a>

---


### DataKubernetesEndpointSliceV1MetadataOutputReference <a name="DataKubernetesEndpointSliceV1MetadataOutputReference" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

new DataKubernetesEndpointSliceV1MetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetGenerateName` <a name="ResetGenerateName" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.resetGenerateName"></a>

```csharp
private void ResetGenerateName()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.resetNamespace"></a>

```csharp
private void ResetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.generation">Generation</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.resourceVersion">ResourceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.annotationsInput">AnnotationsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.generateNameInput">GenerateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.generateName">GenerateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata">DataKubernetesEndpointSliceV1Metadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Generation`<sup>Required</sup> <a name="Generation" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.generation"></a>

```csharp
public double Generation { get; }
```

- *Type:* double

---

##### `ResourceVersion`<sup>Required</sup> <a name="ResourceVersion" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.resourceVersion"></a>

```csharp
public string ResourceVersion { get; }
```

- *Type:* string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.annotationsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AnnotationsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `GenerateNameInput`<sup>Optional</sup> <a name="GenerateNameInput" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.generateNameInput"></a>

```csharp
public string GenerateNameInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `GenerateName`<sup>Required</sup> <a name="GenerateName" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.generateName"></a>

```csharp
public string GenerateName { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.internalValue"></a>

```csharp
public DataKubernetesEndpointSliceV1Metadata InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata">DataKubernetesEndpointSliceV1Metadata</a>

---


### DataKubernetesEndpointSliceV1PortList <a name="DataKubernetesEndpointSliceV1PortList" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

new DataKubernetesEndpointSliceV1PortList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

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

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.get"></a>

```csharp
private DataKubernetesEndpointSliceV1PortOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataKubernetesEndpointSliceV1PortOutputReference <a name="DataKubernetesEndpointSliceV1PortOutputReference" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

new DataKubernetesEndpointSliceV1PortOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.property.appProtocol">AppProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.property.port">Port</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Port">DataKubernetesEndpointSliceV1Port</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AppProtocol`<sup>Required</sup> <a name="AppProtocol" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.property.appProtocol"></a>

```csharp
public string AppProtocol { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.property.port"></a>

```csharp
public string Port { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.property.internalValue"></a>

```csharp
public DataKubernetesEndpointSliceV1Port InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Port">DataKubernetesEndpointSliceV1Port</a>

---



