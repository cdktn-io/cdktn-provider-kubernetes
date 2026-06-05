# `dataKubernetesServerVersion` Submodule <a name="`dataKubernetesServerVersion` Submodule" id="@cdktn/provider-kubernetes.dataKubernetesServerVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataKubernetesServerVersion <a name="DataKubernetesServerVersion" id="@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.0/docs/data-sources/server_version kubernetes_server_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

new DataKubernetesServerVersion(Construct Scope, string Id, DataKubernetesServerVersionConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersionConfig">DataKubernetesServerVersionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersionConfig">DataKubernetesServerVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataKubernetesServerVersion resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

DataKubernetesServerVersion.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

DataKubernetesServerVersion.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

DataKubernetesServerVersion.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

DataKubernetesServerVersion.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataKubernetesServerVersion resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataKubernetesServerVersion to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataKubernetesServerVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.0/docs/data-sources/server_version#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataKubernetesServerVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.buildDate">BuildDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.compiler">Compiler</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.gitCommit">GitCommit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.gitTreeState">GitTreeState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.gitVersion">GitVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.goVersion">GoVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.major">Major</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.minor">Minor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.platform">Platform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `BuildDate`<sup>Required</sup> <a name="BuildDate" id="@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.buildDate"></a>

```csharp
public string BuildDate { get; }
```

- *Type:* string

---

##### `Compiler`<sup>Required</sup> <a name="Compiler" id="@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.compiler"></a>

```csharp
public string Compiler { get; }
```

- *Type:* string

---

##### `GitCommit`<sup>Required</sup> <a name="GitCommit" id="@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.gitCommit"></a>

```csharp
public string GitCommit { get; }
```

- *Type:* string

---

##### `GitTreeState`<sup>Required</sup> <a name="GitTreeState" id="@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.gitTreeState"></a>

```csharp
public string GitTreeState { get; }
```

- *Type:* string

---

##### `GitVersion`<sup>Required</sup> <a name="GitVersion" id="@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.gitVersion"></a>

```csharp
public string GitVersion { get; }
```

- *Type:* string

---

##### `GoVersion`<sup>Required</sup> <a name="GoVersion" id="@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.goVersion"></a>

```csharp
public string GoVersion { get; }
```

- *Type:* string

---

##### `Major`<sup>Required</sup> <a name="Major" id="@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.major"></a>

```csharp
public string Major { get; }
```

- *Type:* string

---

##### `Minor`<sup>Required</sup> <a name="Minor" id="@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.minor"></a>

```csharp
public string Minor { get; }
```

- *Type:* string

---

##### `Platform`<sup>Required</sup> <a name="Platform" id="@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.platform"></a>

```csharp
public string Platform { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersion.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataKubernetesServerVersionConfig <a name="DataKubernetesServerVersionConfig" id="@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

new DataKubernetesServerVersionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.0/docs/data-sources/server_version#id DataKubernetesServerVersion#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-kubernetes.dataKubernetesServerVersion.DataKubernetesServerVersionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.0/docs/data-sources/server_version#id DataKubernetesServerVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



