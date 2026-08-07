# `apiService` Submodule <a name="`apiService` Submodule" id="@cdktn/provider-kubernetes.apiService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiService <a name="ApiService" id="@cdktn/provider-kubernetes.apiService.ApiService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/resources/api_service kubernetes_api_service}.

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.apiService.ApiService.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

new ApiService(Construct Scope, string Id, ApiServiceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiService.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiService.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiService.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceConfig">ApiServiceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-kubernetes.apiService.ApiService.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-kubernetes.apiService.ApiService.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-kubernetes.apiService.ApiService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-kubernetes.apiService.ApiServiceConfig">ApiServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiService.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiService.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiService.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiService.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiService.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiService.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiService.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiService.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiService.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiService.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiService.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiService.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiService.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiService.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiService.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiService.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiService.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiService.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiService.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiService.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiService.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiService.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiService.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiService.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiService.putMetadata">PutMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiService.putSpec">PutSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiService.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-kubernetes.apiService.ApiService.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-kubernetes.apiService.ApiService.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-kubernetes.apiService.ApiService.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-kubernetes.apiService.ApiService.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-kubernetes.apiService.ApiService.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-kubernetes.apiService.ApiService.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-kubernetes.apiService.ApiService.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-kubernetes.apiService.ApiService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-kubernetes.apiService.ApiService.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-kubernetes.apiService.ApiService.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-kubernetes.apiService.ApiService.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-kubernetes.apiService.ApiService.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-kubernetes.apiService.ApiService.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-kubernetes.apiService.ApiService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-kubernetes.apiService.ApiService.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.apiService.ApiService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-kubernetes.apiService.ApiService.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.apiService.ApiService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-kubernetes.apiService.ApiService.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.apiService.ApiService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-kubernetes.apiService.ApiService.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.apiService.ApiService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-kubernetes.apiService.ApiService.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.apiService.ApiService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-kubernetes.apiService.ApiService.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.apiService.ApiService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-kubernetes.apiService.ApiService.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.apiService.ApiService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-kubernetes.apiService.ApiService.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.apiService.ApiService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-kubernetes.apiService.ApiService.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.apiService.ApiService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-kubernetes.apiService.ApiService.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-kubernetes.apiService.ApiService.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-kubernetes.apiService.ApiService.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-kubernetes.apiService.ApiService.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-kubernetes.apiService.ApiService.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.apiService.ApiService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-kubernetes.apiService.ApiService.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-kubernetes.apiService.ApiService.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-kubernetes.apiService.ApiService.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-kubernetes.apiService.ApiService.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-kubernetes.apiService.ApiService.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-kubernetes.apiService.ApiService.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-kubernetes.apiService.ApiService.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMetadata` <a name="PutMetadata" id="@cdktn/provider-kubernetes.apiService.ApiService.putMetadata"></a>

```csharp
private void PutMetadata(ApiServiceMetadata Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-kubernetes.apiService.ApiService.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-kubernetes.apiService.ApiServiceMetadata">ApiServiceMetadata</a>

---

##### `PutSpec` <a name="PutSpec" id="@cdktn/provider-kubernetes.apiService.ApiService.putSpec"></a>

```csharp
private void PutSpec(ApiServiceSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-kubernetes.apiService.ApiService.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-kubernetes.apiService.ApiServiceSpec">ApiServiceSpec</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-kubernetes.apiService.ApiService.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiService.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiService.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiService.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiService.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ApiService resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-kubernetes.apiService.ApiService.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

ApiService.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-kubernetes.apiService.ApiService.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-kubernetes.apiService.ApiService.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

ApiService.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-kubernetes.apiService.ApiService.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-kubernetes.apiService.ApiService.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

ApiService.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-kubernetes.apiService.ApiService.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-kubernetes.apiService.ApiService.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

ApiService.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ApiService resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-kubernetes.apiService.ApiService.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-kubernetes.apiService.ApiService.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApiService to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-kubernetes.apiService.ApiService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApiService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/resources/api_service#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-kubernetes.apiService.ApiService.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ApiService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiService.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiService.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiService.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiService.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiService.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiService.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiService.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiService.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiService.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiService.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiService.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiService.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiService.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiService.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiService.property.metadata">Metadata</a></code> | <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceMetadataOutputReference">ApiServiceMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiService.property.spec">Spec</a></code> | <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceSpecOutputReference">ApiServiceSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiService.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiService.property.metadataInput">MetadataInput</a></code> | <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceMetadata">ApiServiceMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiService.property.specInput">SpecInput</a></code> | <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceSpec">ApiServiceSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiService.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-kubernetes.apiService.ApiService.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-kubernetes.apiService.ApiService.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-kubernetes.apiService.ApiService.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-kubernetes.apiService.ApiService.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-kubernetes.apiService.ApiService.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-kubernetes.apiService.ApiService.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-kubernetes.apiService.ApiService.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-kubernetes.apiService.ApiService.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-kubernetes.apiService.ApiService.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-kubernetes.apiService.ApiService.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-kubernetes.apiService.ApiService.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-kubernetes.apiService.ApiService.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-kubernetes.apiService.ApiService.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-kubernetes.apiService.ApiService.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-kubernetes.apiService.ApiService.property.metadata"></a>

```csharp
public ApiServiceMetadataOutputReference Metadata { get; }
```

- *Type:* <a href="#@cdktn/provider-kubernetes.apiService.ApiServiceMetadataOutputReference">ApiServiceMetadataOutputReference</a>

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktn/provider-kubernetes.apiService.ApiService.property.spec"></a>

```csharp
public ApiServiceSpecOutputReference Spec { get; }
```

- *Type:* <a href="#@cdktn/provider-kubernetes.apiService.ApiServiceSpecOutputReference">ApiServiceSpecOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-kubernetes.apiService.ApiService.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktn/provider-kubernetes.apiService.ApiService.property.metadataInput"></a>

```csharp
public ApiServiceMetadata MetadataInput { get; }
```

- *Type:* <a href="#@cdktn/provider-kubernetes.apiService.ApiServiceMetadata">ApiServiceMetadata</a>

---

##### `SpecInput`<sup>Optional</sup> <a name="SpecInput" id="@cdktn/provider-kubernetes.apiService.ApiService.property.specInput"></a>

```csharp
public ApiServiceSpec SpecInput { get; }
```

- *Type:* <a href="#@cdktn/provider-kubernetes.apiService.ApiServiceSpec">ApiServiceSpec</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-kubernetes.apiService.ApiService.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiService.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-kubernetes.apiService.ApiService.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiServiceConfig <a name="ApiServiceConfig" id="@cdktn/provider-kubernetes.apiService.ApiServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-kubernetes.apiService.ApiServiceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

new ApiServiceConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    ApiServiceMetadata Metadata,
    ApiServiceSpec Spec,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceConfig.property.metadata">Metadata</a></code> | <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceMetadata">ApiServiceMetadata</a></code> | metadata block. |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceConfig.property.spec">Spec</a></code> | <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceSpec">ApiServiceSpec</a></code> | spec block. |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/resources/api_service#id ApiService#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-kubernetes.apiService.ApiServiceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-kubernetes.apiService.ApiServiceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-kubernetes.apiService.ApiServiceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-kubernetes.apiService.ApiServiceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-kubernetes.apiService.ApiServiceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-kubernetes.apiService.ApiServiceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-kubernetes.apiService.ApiServiceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-kubernetes.apiService.ApiServiceConfig.property.metadata"></a>

```csharp
public ApiServiceMetadata Metadata { get; set; }
```

- *Type:* <a href="#@cdktn/provider-kubernetes.apiService.ApiServiceMetadata">ApiServiceMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/resources/api_service#metadata ApiService#metadata}

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktn/provider-kubernetes.apiService.ApiServiceConfig.property.spec"></a>

```csharp
public ApiServiceSpec Spec { get; set; }
```

- *Type:* <a href="#@cdktn/provider-kubernetes.apiService.ApiServiceSpec">ApiServiceSpec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/resources/api_service#spec ApiService#spec}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-kubernetes.apiService.ApiServiceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/resources/api_service#id ApiService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### ApiServiceMetadata <a name="ApiServiceMetadata" id="@cdktn/provider-kubernetes.apiService.ApiServiceMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-kubernetes.apiService.ApiServiceMetadata.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

new ApiServiceMetadata {
    System.Collections.Generic.IDictionary<string, string> Annotations = null,
    string GenerateName = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceMetadata.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | An unstructured key value map stored with the api_service that may be used to store arbitrary metadata. |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceMetadata.property.generateName">GenerateName</a></code> | <code>string</code> | Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceMetadata.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Map of string keys and values that can be used to organize and categorize (scope and select) the api_service. |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceMetadata.property.name">Name</a></code> | <code>string</code> | Name of the api_service, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktn/provider-kubernetes.apiService.ApiServiceMetadata.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

An unstructured key value map stored with the api_service that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/resources/api_service#annotations ApiService#annotations}

---

##### `GenerateName`<sup>Optional</sup> <a name="GenerateName" id="@cdktn/provider-kubernetes.apiService.ApiServiceMetadata.property.generateName"></a>

```csharp
public string GenerateName { get; set; }
```

- *Type:* string

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. More info: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/resources/api_service#generate_name ApiService#generate_name}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-kubernetes.apiService.ApiServiceMetadata.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Map of string keys and values that can be used to organize and categorize (scope and select) the api_service.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/resources/api_service#labels ApiService#labels}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-kubernetes.apiService.ApiServiceMetadata.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the api_service, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/resources/api_service#name ApiService#name}

---

### ApiServiceSpec <a name="ApiServiceSpec" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

new ApiServiceSpec {
    string Group,
    double GroupPriorityMinimum,
    string Version,
    double VersionPriority,
    string CaBundle = null,
    bool|IResolvable InsecureSkipTlsVerify = null,
    ApiServiceSpecService Service = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceSpec.property.group">Group</a></code> | <code>string</code> | Group is the API group name this server hosts. |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceSpec.property.groupPriorityMinimum">GroupPriorityMinimum</a></code> | <code>double</code> | GroupPriorityMinimum is the priority this group should have at least. |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceSpec.property.version">Version</a></code> | <code>string</code> | Version is the API version this server hosts. For example, `v1`. |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceSpec.property.versionPriority">VersionPriority</a></code> | <code>double</code> | VersionPriority controls the ordering of this API version inside of its group. |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceSpec.property.caBundle">CaBundle</a></code> | <code>string</code> | CABundle is a PEM encoded CA bundle which will be used to validate an API server's serving certificate. |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceSpec.property.insecureSkipTlsVerify">InsecureSkipTlsVerify</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | InsecureSkipTLSVerify disables TLS certificate verification when communicating with this server. |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceSpec.property.service">Service</a></code> | <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceSpecService">ApiServiceSpecService</a></code> | service block. |

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpec.property.group"></a>

```csharp
public string Group { get; set; }
```

- *Type:* string

Group is the API group name this server hosts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/resources/api_service#group ApiService#group}

---

##### `GroupPriorityMinimum`<sup>Required</sup> <a name="GroupPriorityMinimum" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpec.property.groupPriorityMinimum"></a>

```csharp
public double GroupPriorityMinimum { get; set; }
```

- *Type:* double

GroupPriorityMinimum is the priority this group should have at least.

Higher priority means that the group is preferred by clients over lower priority ones. Note that other versions of this group might specify even higher GroupPriorityMininum values such that the whole group gets a higher priority. The primary sort is based on GroupPriorityMinimum, ordered highest number to lowest (20 before 10). The secondary sort is based on the alphabetical comparison of the name of the object. (v1.bar before v1.foo) We'd recommend something like: *.k8s.io (except extensions) at 18000 and PaaSes (OpenShift, Deis) are recommended to be in the 2000s.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/resources/api_service#group_priority_minimum ApiService#group_priority_minimum}

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpec.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Version is the API version this server hosts. For example, `v1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/resources/api_service#version ApiService#version}

---

##### `VersionPriority`<sup>Required</sup> <a name="VersionPriority" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpec.property.versionPriority"></a>

```csharp
public double VersionPriority { get; set; }
```

- *Type:* double

VersionPriority controls the ordering of this API version inside of its group.

Must be greater than zero. The primary sort is based on VersionPriority, ordered highest to lowest (20 before 10). Since it's inside of a group, the number can be small, probably in the 10s. In case of equal version priorities, the version string will be used to compute the order inside a group. If the version string is `kube-like`, it will sort above non `kube-like` version strings, which are ordered lexicographically. `Kube-like` versions start with a `v`, then are followed by a number (the major version), then optionally the string `alpha` or `beta` and another number (the minor version). These are sorted first by GA > `beta` > `alpha` (where GA is a version with no suffix such as `beta` or `alpha`), and then by comparing major version, then minor version. An example sorted list of versions: `v10`, `v2`, `v1`, `v11beta2`, `v10beta3`, `v3beta1`, `v12alpha1`, `v11alpha2`, `foo1`, `foo10`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/resources/api_service#version_priority ApiService#version_priority}

---

##### `CaBundle`<sup>Optional</sup> <a name="CaBundle" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpec.property.caBundle"></a>

```csharp
public string CaBundle { get; set; }
```

- *Type:* string

CABundle is a PEM encoded CA bundle which will be used to validate an API server's serving certificate.

If unspecified, system trust roots on the apiserver are used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/resources/api_service#ca_bundle ApiService#ca_bundle}

---

##### `InsecureSkipTlsVerify`<sup>Optional</sup> <a name="InsecureSkipTlsVerify" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpec.property.insecureSkipTlsVerify"></a>

```csharp
public bool|IResolvable InsecureSkipTlsVerify { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

InsecureSkipTLSVerify disables TLS certificate verification when communicating with this server.

This is strongly discouraged. You should use the CABundle instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/resources/api_service#insecure_skip_tls_verify ApiService#insecure_skip_tls_verify}

---

##### `Service`<sup>Optional</sup> <a name="Service" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpec.property.service"></a>

```csharp
public ApiServiceSpecService Service { get; set; }
```

- *Type:* <a href="#@cdktn/provider-kubernetes.apiService.ApiServiceSpecService">ApiServiceSpecService</a>

service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/resources/api_service#service ApiService#service}

---

### ApiServiceSpecService <a name="ApiServiceSpecService" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpecService"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpecService.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

new ApiServiceSpecService {
    string Name,
    string Namespace,
    double Port = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceSpecService.property.name">Name</a></code> | <code>string</code> | Name is the name of the service. |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceSpecService.property.namespace">Namespace</a></code> | <code>string</code> | Namespace is the namespace of the service. |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceSpecService.property.port">Port</a></code> | <code>double</code> | If specified, the port on the service that is hosting the service. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpecService.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name is the name of the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/resources/api_service#name ApiService#name}

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpecService.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Namespace is the namespace of the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/resources/api_service#namespace ApiService#namespace}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpecService.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

If specified, the port on the service that is hosting the service.

Defaults to 443 for backward compatibility. Should be a valid port number (1-65535, inclusive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/resources/api_service#port ApiService#port}

---

## Classes <a name="Classes" id="Classes"></a>

### ApiServiceMetadataOutputReference <a name="ApiServiceMetadataOutputReference" id="@cdktn/provider-kubernetes.apiService.ApiServiceMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.apiService.ApiServiceMetadataOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

new ApiServiceMetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceMetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceMetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-kubernetes.apiService.ApiServiceMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.apiService.ApiServiceMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceMetadataOutputReference.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceMetadataOutputReference.resetGenerateName">ResetGenerateName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceMetadataOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceMetadataOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-kubernetes.apiService.ApiServiceMetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-kubernetes.apiService.ApiServiceMetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.apiService.ApiServiceMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-kubernetes.apiService.ApiServiceMetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.apiService.ApiServiceMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-kubernetes.apiService.ApiServiceMetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.apiService.ApiServiceMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-kubernetes.apiService.ApiServiceMetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.apiService.ApiServiceMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-kubernetes.apiService.ApiServiceMetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.apiService.ApiServiceMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-kubernetes.apiService.ApiServiceMetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.apiService.ApiServiceMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-kubernetes.apiService.ApiServiceMetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.apiService.ApiServiceMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-kubernetes.apiService.ApiServiceMetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.apiService.ApiServiceMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-kubernetes.apiService.ApiServiceMetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.apiService.ApiServiceMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-kubernetes.apiService.ApiServiceMetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-kubernetes.apiService.ApiServiceMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-kubernetes.apiService.ApiServiceMetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-kubernetes.apiService.ApiServiceMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-kubernetes.apiService.ApiServiceMetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktn/provider-kubernetes.apiService.ApiServiceMetadataOutputReference.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetGenerateName` <a name="ResetGenerateName" id="@cdktn/provider-kubernetes.apiService.ApiServiceMetadataOutputReference.resetGenerateName"></a>

```csharp
private void ResetGenerateName()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-kubernetes.apiService.ApiServiceMetadataOutputReference.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-kubernetes.apiService.ApiServiceMetadataOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceMetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceMetadataOutputReference.property.generation">Generation</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceMetadataOutputReference.property.resourceVersion">ResourceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceMetadataOutputReference.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceMetadataOutputReference.property.annotationsInput">AnnotationsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceMetadataOutputReference.property.generateNameInput">GenerateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceMetadataOutputReference.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceMetadataOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceMetadataOutputReference.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceMetadataOutputReference.property.generateName">GenerateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceMetadataOutputReference.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceMetadataOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceMetadata">ApiServiceMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-kubernetes.apiService.ApiServiceMetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-kubernetes.apiService.ApiServiceMetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Generation`<sup>Required</sup> <a name="Generation" id="@cdktn/provider-kubernetes.apiService.ApiServiceMetadataOutputReference.property.generation"></a>

```csharp
public double Generation { get; }
```

- *Type:* double

---

##### `ResourceVersion`<sup>Required</sup> <a name="ResourceVersion" id="@cdktn/provider-kubernetes.apiService.ApiServiceMetadataOutputReference.property.resourceVersion"></a>

```csharp
public string ResourceVersion { get; }
```

- *Type:* string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-kubernetes.apiService.ApiServiceMetadataOutputReference.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktn/provider-kubernetes.apiService.ApiServiceMetadataOutputReference.property.annotationsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AnnotationsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `GenerateNameInput`<sup>Optional</sup> <a name="GenerateNameInput" id="@cdktn/provider-kubernetes.apiService.ApiServiceMetadataOutputReference.property.generateNameInput"></a>

```csharp
public string GenerateNameInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-kubernetes.apiService.ApiServiceMetadataOutputReference.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-kubernetes.apiService.ApiServiceMetadataOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktn/provider-kubernetes.apiService.ApiServiceMetadataOutputReference.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `GenerateName`<sup>Required</sup> <a name="GenerateName" id="@cdktn/provider-kubernetes.apiService.ApiServiceMetadataOutputReference.property.generateName"></a>

```csharp
public string GenerateName { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-kubernetes.apiService.ApiServiceMetadataOutputReference.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-kubernetes.apiService.ApiServiceMetadataOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-kubernetes.apiService.ApiServiceMetadataOutputReference.property.internalValue"></a>

```csharp
public ApiServiceMetadata InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-kubernetes.apiService.ApiServiceMetadata">ApiServiceMetadata</a>

---


### ApiServiceSpecOutputReference <a name="ApiServiceSpecOutputReference" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

new ApiServiceSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceSpecOutputReference.putService">PutService</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceSpecOutputReference.resetCaBundle">ResetCaBundle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceSpecOutputReference.resetInsecureSkipTlsVerify">ResetInsecureSkipTlsVerify</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceSpecOutputReference.resetService">ResetService</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutService` <a name="PutService" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpecOutputReference.putService"></a>

```csharp
private void PutService(ApiServiceSpecService Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpecOutputReference.putService.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-kubernetes.apiService.ApiServiceSpecService">ApiServiceSpecService</a>

---

##### `ResetCaBundle` <a name="ResetCaBundle" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpecOutputReference.resetCaBundle"></a>

```csharp
private void ResetCaBundle()
```

##### `ResetInsecureSkipTlsVerify` <a name="ResetInsecureSkipTlsVerify" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpecOutputReference.resetInsecureSkipTlsVerify"></a>

```csharp
private void ResetInsecureSkipTlsVerify()
```

##### `ResetService` <a name="ResetService" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpecOutputReference.resetService"></a>

```csharp
private void ResetService()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceSpecOutputReference.property.service">Service</a></code> | <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceSpecServiceOutputReference">ApiServiceSpecServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceSpecOutputReference.property.caBundleInput">CaBundleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceSpecOutputReference.property.groupInput">GroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceSpecOutputReference.property.groupPriorityMinimumInput">GroupPriorityMinimumInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceSpecOutputReference.property.insecureSkipTlsVerifyInput">InsecureSkipTlsVerifyInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceSpecOutputReference.property.serviceInput">ServiceInput</a></code> | <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceSpecService">ApiServiceSpecService</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceSpecOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceSpecOutputReference.property.versionPriorityInput">VersionPriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceSpecOutputReference.property.caBundle">CaBundle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceSpecOutputReference.property.group">Group</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceSpecOutputReference.property.groupPriorityMinimum">GroupPriorityMinimum</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceSpecOutputReference.property.insecureSkipTlsVerify">InsecureSkipTlsVerify</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceSpecOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceSpecOutputReference.property.versionPriority">VersionPriority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceSpec">ApiServiceSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpecOutputReference.property.service"></a>

```csharp
public ApiServiceSpecServiceOutputReference Service { get; }
```

- *Type:* <a href="#@cdktn/provider-kubernetes.apiService.ApiServiceSpecServiceOutputReference">ApiServiceSpecServiceOutputReference</a>

---

##### `CaBundleInput`<sup>Optional</sup> <a name="CaBundleInput" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpecOutputReference.property.caBundleInput"></a>

```csharp
public string CaBundleInput { get; }
```

- *Type:* string

---

##### `GroupInput`<sup>Optional</sup> <a name="GroupInput" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpecOutputReference.property.groupInput"></a>

```csharp
public string GroupInput { get; }
```

- *Type:* string

---

##### `GroupPriorityMinimumInput`<sup>Optional</sup> <a name="GroupPriorityMinimumInput" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpecOutputReference.property.groupPriorityMinimumInput"></a>

```csharp
public double GroupPriorityMinimumInput { get; }
```

- *Type:* double

---

##### `InsecureSkipTlsVerifyInput`<sup>Optional</sup> <a name="InsecureSkipTlsVerifyInput" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpecOutputReference.property.insecureSkipTlsVerifyInput"></a>

```csharp
public bool|IResolvable InsecureSkipTlsVerifyInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpecOutputReference.property.serviceInput"></a>

```csharp
public ApiServiceSpecService ServiceInput { get; }
```

- *Type:* <a href="#@cdktn/provider-kubernetes.apiService.ApiServiceSpecService">ApiServiceSpecService</a>

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpecOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `VersionPriorityInput`<sup>Optional</sup> <a name="VersionPriorityInput" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpecOutputReference.property.versionPriorityInput"></a>

```csharp
public double VersionPriorityInput { get; }
```

- *Type:* double

---

##### `CaBundle`<sup>Required</sup> <a name="CaBundle" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpecOutputReference.property.caBundle"></a>

```csharp
public string CaBundle { get; }
```

- *Type:* string

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpecOutputReference.property.group"></a>

```csharp
public string Group { get; }
```

- *Type:* string

---

##### `GroupPriorityMinimum`<sup>Required</sup> <a name="GroupPriorityMinimum" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpecOutputReference.property.groupPriorityMinimum"></a>

```csharp
public double GroupPriorityMinimum { get; }
```

- *Type:* double

---

##### `InsecureSkipTlsVerify`<sup>Required</sup> <a name="InsecureSkipTlsVerify" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpecOutputReference.property.insecureSkipTlsVerify"></a>

```csharp
public bool|IResolvable InsecureSkipTlsVerify { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpecOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `VersionPriority`<sup>Required</sup> <a name="VersionPriority" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpecOutputReference.property.versionPriority"></a>

```csharp
public double VersionPriority { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpecOutputReference.property.internalValue"></a>

```csharp
public ApiServiceSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-kubernetes.apiService.ApiServiceSpec">ApiServiceSpec</a>

---


### ApiServiceSpecServiceOutputReference <a name="ApiServiceSpecServiceOutputReference" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpecServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpecServiceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

new ApiServiceSpecServiceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceSpecServiceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceSpecServiceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpecServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpecServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceSpecServiceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceSpecServiceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceSpecServiceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceSpecServiceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceSpecServiceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceSpecServiceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceSpecServiceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceSpecServiceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceSpecServiceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceSpecServiceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceSpecServiceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceSpecServiceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceSpecServiceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceSpecServiceOutputReference.resetPort">ResetPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpecServiceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpecServiceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpecServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpecServiceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpecServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpecServiceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpecServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpecServiceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpecServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpecServiceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpecServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpecServiceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpecServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpecServiceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpecServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpecServiceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpecServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpecServiceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpecServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpecServiceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpecServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpecServiceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpecServiceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpecServiceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpecServiceOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceSpecServiceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceSpecServiceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceSpecServiceOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceSpecServiceOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceSpecServiceOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceSpecServiceOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceSpecServiceOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceSpecServiceOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceSpecServiceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-kubernetes.apiService.ApiServiceSpecService">ApiServiceSpecService</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpecServiceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpecServiceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpecServiceOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpecServiceOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpecServiceOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpecServiceOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpecServiceOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpecServiceOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-kubernetes.apiService.ApiServiceSpecServiceOutputReference.property.internalValue"></a>

```csharp
public ApiServiceSpecService InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-kubernetes.apiService.ApiServiceSpecService">ApiServiceSpecService</a>

---



