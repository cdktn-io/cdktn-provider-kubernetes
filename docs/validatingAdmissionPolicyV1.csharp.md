# `validatingAdmissionPolicyV1` Submodule <a name="`validatingAdmissionPolicyV1` Submodule" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ValidatingAdmissionPolicyV1 <a name="ValidatingAdmissionPolicyV1" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/resources/validating_admission_policy_v1 kubernetes_validating_admission_policy_v1}.

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

new ValidatingAdmissionPolicyV1(Construct Scope, string Id, ValidatingAdmissionPolicyV1Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1Config">ValidatingAdmissionPolicyV1Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1Config">ValidatingAdmissionPolicyV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.putMetadata">PutMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.putSpec">PutSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMetadata` <a name="PutMetadata" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.putMetadata"></a>

```csharp
private void PutMetadata(ValidatingAdmissionPolicyV1Metadata Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1Metadata">ValidatingAdmissionPolicyV1Metadata</a>

---

##### `PutSpec` <a name="PutSpec" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.putSpec"></a>

```csharp
private void PutSpec(ValidatingAdmissionPolicyV1Spec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1Spec">ValidatingAdmissionPolicyV1Spec</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.putTimeouts"></a>

```csharp
private void PutTimeouts(ValidatingAdmissionPolicyV1Timeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1Timeouts">ValidatingAdmissionPolicyV1Timeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.resetMetadata"></a>

```csharp
private void ResetMetadata()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ValidatingAdmissionPolicyV1 resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

ValidatingAdmissionPolicyV1.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

ValidatingAdmissionPolicyV1.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

ValidatingAdmissionPolicyV1.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

ValidatingAdmissionPolicyV1.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ValidatingAdmissionPolicyV1 resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ValidatingAdmissionPolicyV1 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ValidatingAdmissionPolicyV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/resources/validating_admission_policy_v1#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ValidatingAdmissionPolicyV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.property.metadata">Metadata</a></code> | <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference">ValidatingAdmissionPolicyV1MetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.property.spec">Spec</a></code> | <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference">ValidatingAdmissionPolicyV1SpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1TimeoutsOutputReference">ValidatingAdmissionPolicyV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.property.metadataInput">MetadataInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1Metadata">ValidatingAdmissionPolicyV1Metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.property.specInput">SpecInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1Spec">ValidatingAdmissionPolicyV1Spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1Timeouts">ValidatingAdmissionPolicyV1Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.property.metadata"></a>

```csharp
public ValidatingAdmissionPolicyV1MetadataOutputReference Metadata { get; }
```

- *Type:* <a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference">ValidatingAdmissionPolicyV1MetadataOutputReference</a>

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.property.spec"></a>

```csharp
public ValidatingAdmissionPolicyV1SpecOutputReference Spec { get; }
```

- *Type:* <a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference">ValidatingAdmissionPolicyV1SpecOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.property.timeouts"></a>

```csharp
public ValidatingAdmissionPolicyV1TimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1TimeoutsOutputReference">ValidatingAdmissionPolicyV1TimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.property.metadataInput"></a>

```csharp
public IResolvable|ValidatingAdmissionPolicyV1Metadata MetadataInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1Metadata">ValidatingAdmissionPolicyV1Metadata</a>

---

##### `SpecInput`<sup>Optional</sup> <a name="SpecInput" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.property.specInput"></a>

```csharp
public IResolvable|ValidatingAdmissionPolicyV1Spec SpecInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1Spec">ValidatingAdmissionPolicyV1Spec</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.property.timeoutsInput"></a>

```csharp
public IResolvable|ValidatingAdmissionPolicyV1Timeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1Timeouts">ValidatingAdmissionPolicyV1Timeouts</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ValidatingAdmissionPolicyV1Config <a name="ValidatingAdmissionPolicyV1Config" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1Config.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

new ValidatingAdmissionPolicyV1Config {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    ValidatingAdmissionPolicyV1Spec Spec,
    string Id = null,
    ValidatingAdmissionPolicyV1Metadata Metadata = null,
    ValidatingAdmissionPolicyV1Timeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1Config.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1Config.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1Config.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1Config.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1Config.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1Config.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1Config.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1Config.property.spec">Spec</a></code> | <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1Spec">ValidatingAdmissionPolicyV1Spec</a></code> | Rule defining a set of permissions for the role. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1Config.property.id">Id</a></code> | <code>string</code> | The unique ID for this terraform resource. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1Config.property.metadata">Metadata</a></code> | <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1Metadata">ValidatingAdmissionPolicyV1Metadata</a></code> | Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1Config.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1Timeouts">ValidatingAdmissionPolicyV1Timeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1Config.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1Config.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1Config.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1Config.property.spec"></a>

```csharp
public ValidatingAdmissionPolicyV1Spec Spec { get; set; }
```

- *Type:* <a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1Spec">ValidatingAdmissionPolicyV1Spec</a>

Rule defining a set of permissions for the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/resources/validating_admission_policy_v1#spec ValidatingAdmissionPolicyV1#spec}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

The unique ID for this terraform resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/resources/validating_admission_policy_v1#id ValidatingAdmissionPolicyV1#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1Config.property.metadata"></a>

```csharp
public ValidatingAdmissionPolicyV1Metadata Metadata { get; set; }
```

- *Type:* <a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1Metadata">ValidatingAdmissionPolicyV1Metadata</a>

Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/resources/validating_admission_policy_v1#metadata ValidatingAdmissionPolicyV1#metadata}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1Config.property.timeouts"></a>

```csharp
public ValidatingAdmissionPolicyV1Timeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1Timeouts">ValidatingAdmissionPolicyV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/resources/validating_admission_policy_v1#timeouts ValidatingAdmissionPolicyV1#timeouts}

---

### ValidatingAdmissionPolicyV1Metadata <a name="ValidatingAdmissionPolicyV1Metadata" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1Metadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1Metadata.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

new ValidatingAdmissionPolicyV1Metadata {
    System.Collections.Generic.IDictionary<string, string> Annotations = null,
    string GenerateName = null,
    double Generation = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Name = null,
    string Namespace = null,
    string ResourceVersion = null,
    string Uid = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1Metadata.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1Metadata.property.generateName">GenerateName</a></code> | <code>string</code> | GenerateName is an optional prefix, used by the server, to generate a unique name ONLY IF the Name field has not been provided. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1Metadata.property.generation">Generation</a></code> | <code>double</code> | A sequence number representing a specific generation of the desired state. Populated by the system. Read-only. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1Metadata.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Map of string keys and values that can be used to organize and categorize (scope and select) objects. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1Metadata.property.name">Name</a></code> | <code>string</code> | Name must be unique within a namespace. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1Metadata.property.namespace">Namespace</a></code> | <code>string</code> | Namespace defines the space within which each name must be unique. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1Metadata.property.resourceVersion">ResourceVersion</a></code> | <code>string</code> | An opaque value that represents the internal version of this object that can be used by clients to determine when objects have changed. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1Metadata.property.uid">Uid</a></code> | <code>string</code> | UID is the unique in time and space value for this object. |

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1Metadata.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata.

They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/resources/validating_admission_policy_v1#annotations ValidatingAdmissionPolicyV1#annotations}

---

##### `GenerateName`<sup>Optional</sup> <a name="GenerateName" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1Metadata.property.generateName"></a>

```csharp
public string GenerateName { get; set; }
```

- *Type:* string

GenerateName is an optional prefix, used by the server, to generate a unique name ONLY IF the Name field has not been provided.

If this field is used, the name returned to the client will be different than the name passed. This value will also be combined with a unique suffix. The provided value has the same validation rules as the Name field, and may be truncated by the length of the suffix required to make the value unique on the server.
If this field is specified and the generated name exists, the server will return a 409.
Applied only if Name is not specified. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/resources/validating_admission_policy_v1#generate_name ValidatingAdmissionPolicyV1#generate_name}

---

##### `Generation`<sup>Optional</sup> <a name="Generation" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1Metadata.property.generation"></a>

```csharp
public double Generation { get; set; }
```

- *Type:* double

A sequence number representing a specific generation of the desired state. Populated by the system. Read-only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/resources/validating_admission_policy_v1#generation ValidatingAdmissionPolicyV1#generation}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1Metadata.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Map of string keys and values that can be used to organize and categorize (scope and select) objects.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/resources/validating_admission_policy_v1#labels ValidatingAdmissionPolicyV1#labels}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1Metadata.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name must be unique within a namespace.

Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/resources/validating_admission_policy_v1#name ValidatingAdmissionPolicyV1#name}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1Metadata.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Namespace defines the space within which each name must be unique.

An empty namespace is equivalent to the "default" namespace, but "default" is the canonical representation. Not all objects are required to be scoped to a namespace - the value of this field for those objects will be empty.
Must be a DNS_LABEL. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/resources/validating_admission_policy_v1#namespace ValidatingAdmissionPolicyV1#namespace}

---

##### `ResourceVersion`<sup>Optional</sup> <a name="ResourceVersion" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1Metadata.property.resourceVersion"></a>

```csharp
public string ResourceVersion { get; set; }
```

- *Type:* string

An opaque value that represents the internal version of this object that can be used by clients to determine when objects have changed.

May be used for optimistic concurrency, change detection, and the watch operation on a resource or set of resources. Clients must treat these values as opaque and passed unmodified back to the server. They may only be valid for a particular resource or set of resources.
Populated by the system. Read-only. Value must be treated as opaque by clients and . More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/resources/validating_admission_policy_v1#resource_version ValidatingAdmissionPolicyV1#resource_version}

---

##### `Uid`<sup>Optional</sup> <a name="Uid" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1Metadata.property.uid"></a>

```csharp
public string Uid { get; set; }
```

- *Type:* string

UID is the unique in time and space value for this object.

It is typically generated by the server on successful creation of a resource and is not allowed to change on PUT operations.
Populated by the system. Read-only. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#uids

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/resources/validating_admission_policy_v1#uid ValidatingAdmissionPolicyV1#uid}

---

### ValidatingAdmissionPolicyV1Spec <a name="ValidatingAdmissionPolicyV1Spec" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1Spec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1Spec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

new ValidatingAdmissionPolicyV1Spec {
    IResolvable|ValidatingAdmissionPolicyV1SpecAuditAnnotations[] AuditAnnotations,
    string FailurePolicy,
    ValidatingAdmissionPolicyV1SpecMatchConstraints MatchConstraints,
    IResolvable|ValidatingAdmissionPolicyV1SpecMatchConditions[] MatchConditions = null,
    ValidatingAdmissionPolicyV1SpecParamKind ParamKind = null,
    IResolvable|ValidatingAdmissionPolicyV1SpecValidations[] Validations = null,
    IResolvable|ValidatingAdmissionPolicyV1SpecVariables[] Variables = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1Spec.property.auditAnnotations">AuditAnnotations</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotations">ValidatingAdmissionPolicyV1SpecAuditAnnotations</a>[]</code> | auditAnnotations contains CEL expressions which are used to produce audit annotations for the audit event of the API request. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1Spec.property.failurePolicy">FailurePolicy</a></code> | <code>string</code> | failurePolicy defines how to handle failures for the admission policy. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1Spec.property.matchConstraints">MatchConstraints</a></code> | <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraints">ValidatingAdmissionPolicyV1SpecMatchConstraints</a></code> | MatchConstraints specifies what resources this policy is designed to validate. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1Spec.property.matchConditions">MatchConditions</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditions">ValidatingAdmissionPolicyV1SpecMatchConditions</a>[]</code> | MatchConditions is a list of conditions that must be met for a request to be validated. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1Spec.property.paramKind">ParamKind</a></code> | <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecParamKind">ValidatingAdmissionPolicyV1SpecParamKind</a></code> | ParamKind specifies the kind of resources used to parameterize this policy. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1Spec.property.validations">Validations</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidations">ValidatingAdmissionPolicyV1SpecValidations</a>[]</code> | Validations contain CEL expressions which is used to apply the validation. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1Spec.property.variables">Variables</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariables">ValidatingAdmissionPolicyV1SpecVariables</a>[]</code> | Variables contain definitions of variables that can be used in composition of other expressions. |

---

##### `AuditAnnotations`<sup>Required</sup> <a name="AuditAnnotations" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1Spec.property.auditAnnotations"></a>

```csharp
public IResolvable|ValidatingAdmissionPolicyV1SpecAuditAnnotations[] AuditAnnotations { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotations">ValidatingAdmissionPolicyV1SpecAuditAnnotations</a>[]

auditAnnotations contains CEL expressions which are used to produce audit annotations for the audit event of the API request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/resources/validating_admission_policy_v1#audit_annotations ValidatingAdmissionPolicyV1#audit_annotations}

---

##### `FailurePolicy`<sup>Required</sup> <a name="FailurePolicy" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1Spec.property.failurePolicy"></a>

```csharp
public string FailurePolicy { get; set; }
```

- *Type:* string

failurePolicy defines how to handle failures for the admission policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/resources/validating_admission_policy_v1#failure_policy ValidatingAdmissionPolicyV1#failure_policy}

---

##### `MatchConstraints`<sup>Required</sup> <a name="MatchConstraints" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1Spec.property.matchConstraints"></a>

```csharp
public ValidatingAdmissionPolicyV1SpecMatchConstraints MatchConstraints { get; set; }
```

- *Type:* <a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraints">ValidatingAdmissionPolicyV1SpecMatchConstraints</a>

MatchConstraints specifies what resources this policy is designed to validate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/resources/validating_admission_policy_v1#match_constraints ValidatingAdmissionPolicyV1#match_constraints}

---

##### `MatchConditions`<sup>Optional</sup> <a name="MatchConditions" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1Spec.property.matchConditions"></a>

```csharp
public IResolvable|ValidatingAdmissionPolicyV1SpecMatchConditions[] MatchConditions { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditions">ValidatingAdmissionPolicyV1SpecMatchConditions</a>[]

MatchConditions is a list of conditions that must be met for a request to be validated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/resources/validating_admission_policy_v1#match_conditions ValidatingAdmissionPolicyV1#match_conditions}

---

##### `ParamKind`<sup>Optional</sup> <a name="ParamKind" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1Spec.property.paramKind"></a>

```csharp
public ValidatingAdmissionPolicyV1SpecParamKind ParamKind { get; set; }
```

- *Type:* <a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecParamKind">ValidatingAdmissionPolicyV1SpecParamKind</a>

ParamKind specifies the kind of resources used to parameterize this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/resources/validating_admission_policy_v1#param_kind ValidatingAdmissionPolicyV1#param_kind}

---

##### `Validations`<sup>Optional</sup> <a name="Validations" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1Spec.property.validations"></a>

```csharp
public IResolvable|ValidatingAdmissionPolicyV1SpecValidations[] Validations { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidations">ValidatingAdmissionPolicyV1SpecValidations</a>[]

Validations contain CEL expressions which is used to apply the validation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/resources/validating_admission_policy_v1#validations ValidatingAdmissionPolicyV1#validations}

---

##### `Variables`<sup>Optional</sup> <a name="Variables" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1Spec.property.variables"></a>

```csharp
public IResolvable|ValidatingAdmissionPolicyV1SpecVariables[] Variables { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariables">ValidatingAdmissionPolicyV1SpecVariables</a>[]

Variables contain definitions of variables that can be used in composition of other expressions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/resources/validating_admission_policy_v1#variables ValidatingAdmissionPolicyV1#variables}

---

### ValidatingAdmissionPolicyV1SpecAuditAnnotations <a name="ValidatingAdmissionPolicyV1SpecAuditAnnotations" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

new ValidatingAdmissionPolicyV1SpecAuditAnnotations {
    string Key,
    string ValueExpression
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotations.property.key">Key</a></code> | <code>string</code> | key specifies the audit annotation key. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotations.property.valueExpression">ValueExpression</a></code> | <code>string</code> | valueExpression represents the expression which is evaluated by CEL to produce an audit annotation value. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotations.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

key specifies the audit annotation key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/resources/validating_admission_policy_v1#key ValidatingAdmissionPolicyV1#key}

---

##### `ValueExpression`<sup>Required</sup> <a name="ValueExpression" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotations.property.valueExpression"></a>

```csharp
public string ValueExpression { get; set; }
```

- *Type:* string

valueExpression represents the expression which is evaluated by CEL to produce an audit annotation value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/resources/validating_admission_policy_v1#value_expression ValidatingAdmissionPolicyV1#value_expression}

---

### ValidatingAdmissionPolicyV1SpecMatchConditions <a name="ValidatingAdmissionPolicyV1SpecMatchConditions" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

new ValidatingAdmissionPolicyV1SpecMatchConditions {
    string Expression,
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditions.property.expression">Expression</a></code> | <code>string</code> | Expression represents the expression which will be evaluated by CEL. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditions.property.name">Name</a></code> | <code>string</code> | Name is an identifier for this match condition, used for strategic merging of MatchConditions, as well as providing an identifier for logging purposes. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditions.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Expression represents the expression which will be evaluated by CEL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/resources/validating_admission_policy_v1#expression ValidatingAdmissionPolicyV1#expression}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditions.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name is an identifier for this match condition, used for strategic merging of MatchConditions, as well as providing an identifier for logging purposes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/resources/validating_admission_policy_v1#name ValidatingAdmissionPolicyV1#name}

---

### ValidatingAdmissionPolicyV1SpecMatchConstraints <a name="ValidatingAdmissionPolicyV1SpecMatchConstraints" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraints.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

new ValidatingAdmissionPolicyV1SpecMatchConstraints {
    IResolvable|ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRules[] ExcludeResourceRules = null,
    string MatchPolicy = null,
    ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelector NamespaceSelector = null,
    ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelector ObjectSelector = null,
    IResolvable|ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRules[] ResourceRules = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraints.property.excludeResourceRules">ExcludeResourceRules</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRules">ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRules</a>[]</code> | ExcludeResourceRules describes what operations on what resources/subresources the ValidatingAdmissionPolicy should not care about. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraints.property.matchPolicy">MatchPolicy</a></code> | <code>string</code> | matchPolicy defines how the MatchResources list is used to match incoming requests. Allowed values are Exact or Equivalent. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraints.property.namespaceSelector">NamespaceSelector</a></code> | <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelector">ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelector</a></code> | NamespaceSelector decides whether to run the admission control policy on an object based on whether the namespace for that object matches the selector. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraints.property.objectSelector">ObjectSelector</a></code> | <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelector">ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelector</a></code> | ObjectSelector decides whether to run the validation based on if the object has matching labels. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraints.property.resourceRules">ResourceRules</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRules">ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRules</a>[]</code> | ResourceRules describes what operations on what resources/subresources the ValidatingAdmissionPolicy matches. |

---

##### `ExcludeResourceRules`<sup>Optional</sup> <a name="ExcludeResourceRules" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraints.property.excludeResourceRules"></a>

```csharp
public IResolvable|ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRules[] ExcludeResourceRules { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRules">ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRules</a>[]

ExcludeResourceRules describes what operations on what resources/subresources the ValidatingAdmissionPolicy should not care about.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/resources/validating_admission_policy_v1#exclude_resource_rules ValidatingAdmissionPolicyV1#exclude_resource_rules}

---

##### `MatchPolicy`<sup>Optional</sup> <a name="MatchPolicy" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraints.property.matchPolicy"></a>

```csharp
public string MatchPolicy { get; set; }
```

- *Type:* string

matchPolicy defines how the MatchResources list is used to match incoming requests. Allowed values are Exact or Equivalent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/resources/validating_admission_policy_v1#match_policy ValidatingAdmissionPolicyV1#match_policy}

---

##### `NamespaceSelector`<sup>Optional</sup> <a name="NamespaceSelector" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraints.property.namespaceSelector"></a>

```csharp
public ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelector NamespaceSelector { get; set; }
```

- *Type:* <a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelector">ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelector</a>

NamespaceSelector decides whether to run the admission control policy on an object based on whether the namespace for that object matches the selector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/resources/validating_admission_policy_v1#namespace_selector ValidatingAdmissionPolicyV1#namespace_selector}

---

##### `ObjectSelector`<sup>Optional</sup> <a name="ObjectSelector" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraints.property.objectSelector"></a>

```csharp
public ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelector ObjectSelector { get; set; }
```

- *Type:* <a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelector">ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelector</a>

ObjectSelector decides whether to run the validation based on if the object has matching labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/resources/validating_admission_policy_v1#object_selector ValidatingAdmissionPolicyV1#object_selector}

---

##### `ResourceRules`<sup>Optional</sup> <a name="ResourceRules" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraints.property.resourceRules"></a>

```csharp
public IResolvable|ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRules[] ResourceRules { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRules">ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRules</a>[]

ResourceRules describes what operations on what resources/subresources the ValidatingAdmissionPolicy matches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/resources/validating_admission_policy_v1#resource_rules ValidatingAdmissionPolicyV1#resource_rules}

---

### ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRules <a name="ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRules" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRules.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

new ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRules {
    string[] ApiGroups,
    string[] ApiVersions,
    string[] Operations,
    string[] Resources,
    string[] ResourceNames = null,
    string Scope = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRules.property.apiGroups">ApiGroups</a></code> | <code>string[]</code> | APIGroups is the API groups the resources belong to. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRules.property.apiVersions">ApiVersions</a></code> | <code>string[]</code> | APIVersions is the API versions the resources belong to. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRules.property.operations">Operations</a></code> | <code>string[]</code> | Operations is the operations the admission hook cares about - CREATE, UPDATE, DELETE, CONNECT or * for all of those operations and any future admission operations that are added. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRules.property.resources">Resources</a></code> | <code>string[]</code> | Resources is a list of resources this rule applies to. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRules.property.resourceNames">ResourceNames</a></code> | <code>string[]</code> | ResourceNames is an optional white list of names that the rule applies to. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRules.property.scope">Scope</a></code> | <code>string</code> | scope specifies the scope of this rule. |

---

##### `ApiGroups`<sup>Required</sup> <a name="ApiGroups" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRules.property.apiGroups"></a>

```csharp
public string[] ApiGroups { get; set; }
```

- *Type:* string[]

APIGroups is the API groups the resources belong to.

'*' is all groups. If '*' is present, the length of the slice must be one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/resources/validating_admission_policy_v1#api_groups ValidatingAdmissionPolicyV1#api_groups}

---

##### `ApiVersions`<sup>Required</sup> <a name="ApiVersions" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRules.property.apiVersions"></a>

```csharp
public string[] ApiVersions { get; set; }
```

- *Type:* string[]

APIVersions is the API versions the resources belong to.

'*' is all versions. If '*' is present, the length of the slice must be one. Required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/resources/validating_admission_policy_v1#api_versions ValidatingAdmissionPolicyV1#api_versions}

---

##### `Operations`<sup>Required</sup> <a name="Operations" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRules.property.operations"></a>

```csharp
public string[] Operations { get; set; }
```

- *Type:* string[]

Operations is the operations the admission hook cares about - CREATE, UPDATE, DELETE, CONNECT or * for all of those operations and any future admission operations that are added.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/resources/validating_admission_policy_v1#operations ValidatingAdmissionPolicyV1#operations}

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRules.property.resources"></a>

```csharp
public string[] Resources { get; set; }
```

- *Type:* string[]

Resources is a list of resources this rule applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/resources/validating_admission_policy_v1#resources ValidatingAdmissionPolicyV1#resources}

---

##### `ResourceNames`<sup>Optional</sup> <a name="ResourceNames" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRules.property.resourceNames"></a>

```csharp
public string[] ResourceNames { get; set; }
```

- *Type:* string[]

ResourceNames is an optional white list of names that the rule applies to.

An empty set means that everything is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/resources/validating_admission_policy_v1#resource_names ValidatingAdmissionPolicyV1#resource_names}

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRules.property.scope"></a>

```csharp
public string Scope { get; set; }
```

- *Type:* string

scope specifies the scope of this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/resources/validating_admission_policy_v1#scope ValidatingAdmissionPolicyV1#scope}

---

### ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelector <a name="ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelector" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelector"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelector.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

new ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelector {
    IResolvable|ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressions[] MatchExpressions = null,
    System.Collections.Generic.IDictionary<string, string> MatchLabels = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelector.property.matchExpressions">MatchExpressions</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressions">ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressions</a>[]</code> | matchExpressions is a list of label selector requirements. The requirements are ANDed. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelector.property.matchLabels">MatchLabels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | matchLabels is a map of {key,value} pairs. |

---

##### `MatchExpressions`<sup>Optional</sup> <a name="MatchExpressions" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelector.property.matchExpressions"></a>

```csharp
public IResolvable|ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressions[] MatchExpressions { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressions">ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressions</a>[]

matchExpressions is a list of label selector requirements. The requirements are ANDed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/resources/validating_admission_policy_v1#match_expressions ValidatingAdmissionPolicyV1#match_expressions}

---

##### `MatchLabels`<sup>Optional</sup> <a name="MatchLabels" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelector.property.matchLabels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MatchLabels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

matchLabels is a map of {key,value} pairs.

A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/resources/validating_admission_policy_v1#match_labels ValidatingAdmissionPolicyV1#match_labels}

---

### ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressions <a name="ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressions" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

new ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressions {
    string Key = null,
    string Operator = null,
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressions.property.key">Key</a></code> | <code>string</code> | key is the label key that the selector applies to. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressions.property.operator">Operator</a></code> | <code>string</code> | operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressions.property.values">Values</a></code> | <code>string[]</code> | values is an array of string values. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressions.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

key is the label key that the selector applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/resources/validating_admission_policy_v1#key ValidatingAdmissionPolicyV1#key}

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressions.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/resources/validating_admission_policy_v1#operator ValidatingAdmissionPolicyV1#operator}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressions.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

values is an array of string values.

If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/resources/validating_admission_policy_v1#values ValidatingAdmissionPolicyV1#values}

---

### ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelector <a name="ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelector" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelector"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelector.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

new ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelector {
    ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelector LabelSelector = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelector.property.labelSelector">LabelSelector</a></code> | <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelector">ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelector</a></code> | A label query over a set of resources. |

---

##### `LabelSelector`<sup>Optional</sup> <a name="LabelSelector" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelector.property.labelSelector"></a>

```csharp
public ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelector LabelSelector { get; set; }
```

- *Type:* <a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelector">ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelector</a>

A label query over a set of resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/resources/validating_admission_policy_v1#label_selector ValidatingAdmissionPolicyV1#label_selector}

---

### ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelector <a name="ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelector" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelector"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelector.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

new ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelector {
    IResolvable|ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressions[] MatchExpressions = null,
    System.Collections.Generic.IDictionary<string, string> MatchLabels = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelector.property.matchExpressions">MatchExpressions</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressions">ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressions</a>[]</code> | matchExpressions is a list of label selector requirements. The requirements are ANDed. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelector.property.matchLabels">MatchLabels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | matchLabels is a map of {key,value} pairs. |

---

##### `MatchExpressions`<sup>Optional</sup> <a name="MatchExpressions" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelector.property.matchExpressions"></a>

```csharp
public IResolvable|ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressions[] MatchExpressions { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressions">ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressions</a>[]

matchExpressions is a list of label selector requirements. The requirements are ANDed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/resources/validating_admission_policy_v1#match_expressions ValidatingAdmissionPolicyV1#match_expressions}

---

##### `MatchLabels`<sup>Optional</sup> <a name="MatchLabels" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelector.property.matchLabels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MatchLabels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

matchLabels is a map of {key,value} pairs.

A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/resources/validating_admission_policy_v1#match_labels ValidatingAdmissionPolicyV1#match_labels}

---

### ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressions <a name="ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressions" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

new ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressions {
    string Key = null,
    string Operator = null,
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressions.property.key">Key</a></code> | <code>string</code> | key is the label key that the selector applies to. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressions.property.operator">Operator</a></code> | <code>string</code> | operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressions.property.values">Values</a></code> | <code>string[]</code> | values is an array of string values. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressions.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

key is the label key that the selector applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/resources/validating_admission_policy_v1#key ValidatingAdmissionPolicyV1#key}

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressions.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/resources/validating_admission_policy_v1#operator ValidatingAdmissionPolicyV1#operator}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressions.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

values is an array of string values.

If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/resources/validating_admission_policy_v1#values ValidatingAdmissionPolicyV1#values}

---

### ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRules <a name="ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRules" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRules.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

new ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRules {
    string[] ApiGroups,
    string[] ApiVersions,
    string[] Operations,
    string[] Resources,
    string[] ResourceNames = null,
    string Scope = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRules.property.apiGroups">ApiGroups</a></code> | <code>string[]</code> | APIGroups is the API groups the resources belong to. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRules.property.apiVersions">ApiVersions</a></code> | <code>string[]</code> | APIVersions is the API versions the resources belong to. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRules.property.operations">Operations</a></code> | <code>string[]</code> | Operations is the operations the admission hook cares about - CREATE, UPDATE, DELETE, CONNECT or * for all of those operations and any future admission operations that are added. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRules.property.resources">Resources</a></code> | <code>string[]</code> | Resources is a list of resources this rule applies to. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRules.property.resourceNames">ResourceNames</a></code> | <code>string[]</code> | ResourceNames is an optional white list of names that the rule applies to. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRules.property.scope">Scope</a></code> | <code>string</code> | scope specifies the scope of this rule. |

---

##### `ApiGroups`<sup>Required</sup> <a name="ApiGroups" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRules.property.apiGroups"></a>

```csharp
public string[] ApiGroups { get; set; }
```

- *Type:* string[]

APIGroups is the API groups the resources belong to.

'*' is all groups. If '*' is present, the length of the slice must be one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/resources/validating_admission_policy_v1#api_groups ValidatingAdmissionPolicyV1#api_groups}

---

##### `ApiVersions`<sup>Required</sup> <a name="ApiVersions" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRules.property.apiVersions"></a>

```csharp
public string[] ApiVersions { get; set; }
```

- *Type:* string[]

APIVersions is the API versions the resources belong to.

'*' is all versions. If '*' is present, the length of the slice must be one. Required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/resources/validating_admission_policy_v1#api_versions ValidatingAdmissionPolicyV1#api_versions}

---

##### `Operations`<sup>Required</sup> <a name="Operations" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRules.property.operations"></a>

```csharp
public string[] Operations { get; set; }
```

- *Type:* string[]

Operations is the operations the admission hook cares about - CREATE, UPDATE, DELETE, CONNECT or * for all of those operations and any future admission operations that are added.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/resources/validating_admission_policy_v1#operations ValidatingAdmissionPolicyV1#operations}

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRules.property.resources"></a>

```csharp
public string[] Resources { get; set; }
```

- *Type:* string[]

Resources is a list of resources this rule applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/resources/validating_admission_policy_v1#resources ValidatingAdmissionPolicyV1#resources}

---

##### `ResourceNames`<sup>Optional</sup> <a name="ResourceNames" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRules.property.resourceNames"></a>

```csharp
public string[] ResourceNames { get; set; }
```

- *Type:* string[]

ResourceNames is an optional white list of names that the rule applies to.

An empty set means that everything is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/resources/validating_admission_policy_v1#resource_names ValidatingAdmissionPolicyV1#resource_names}

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRules.property.scope"></a>

```csharp
public string Scope { get; set; }
```

- *Type:* string

scope specifies the scope of this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/resources/validating_admission_policy_v1#scope ValidatingAdmissionPolicyV1#scope}

---

### ValidatingAdmissionPolicyV1SpecParamKind <a name="ValidatingAdmissionPolicyV1SpecParamKind" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecParamKind"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecParamKind.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

new ValidatingAdmissionPolicyV1SpecParamKind {
    string ApiVersion,
    string Kind
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecParamKind.property.apiVersion">ApiVersion</a></code> | <code>string</code> | APIVersion is the API group version the resources belong to. In format of "group/version". |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecParamKind.property.kind">Kind</a></code> | <code>string</code> | Kind is the API kind the resources belong to. |

---

##### `ApiVersion`<sup>Required</sup> <a name="ApiVersion" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecParamKind.property.apiVersion"></a>

```csharp
public string ApiVersion { get; set; }
```

- *Type:* string

APIVersion is the API group version the resources belong to. In format of "group/version".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/resources/validating_admission_policy_v1#api_version ValidatingAdmissionPolicyV1#api_version}

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecParamKind.property.kind"></a>

```csharp
public string Kind { get; set; }
```

- *Type:* string

Kind is the API kind the resources belong to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/resources/validating_admission_policy_v1#kind ValidatingAdmissionPolicyV1#kind}

---

### ValidatingAdmissionPolicyV1SpecValidations <a name="ValidatingAdmissionPolicyV1SpecValidations" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

new ValidatingAdmissionPolicyV1SpecValidations {
    string Expression,
    string Message,
    string MessageExpression = null,
    string Reason = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidations.property.expression">Expression</a></code> | <code>string</code> | Expression represents the expression which will be evaluated by CEL. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidations.property.message">Message</a></code> | <code>string</code> | Message represents the message displayed when validation fails. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidations.property.messageExpression">MessageExpression</a></code> | <code>string</code> | Message Expression declares a CEL expression that evaluates to the validation failure message that is returned when this rule fails. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidations.property.reason">Reason</a></code> | <code>string</code> | Reason represents a machine-readable description of why this validation failed. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidations.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Expression represents the expression which will be evaluated by CEL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/resources/validating_admission_policy_v1#expression ValidatingAdmissionPolicyV1#expression}

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidations.property.message"></a>

```csharp
public string Message { get; set; }
```

- *Type:* string

Message represents the message displayed when validation fails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/resources/validating_admission_policy_v1#message ValidatingAdmissionPolicyV1#message}

---

##### `MessageExpression`<sup>Optional</sup> <a name="MessageExpression" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidations.property.messageExpression"></a>

```csharp
public string MessageExpression { get; set; }
```

- *Type:* string

Message Expression declares a CEL expression that evaluates to the validation failure message that is returned when this rule fails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/resources/validating_admission_policy_v1#message_expression ValidatingAdmissionPolicyV1#message_expression}

---

##### `Reason`<sup>Optional</sup> <a name="Reason" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidations.property.reason"></a>

```csharp
public string Reason { get; set; }
```

- *Type:* string

Reason represents a machine-readable description of why this validation failed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/resources/validating_admission_policy_v1#reason ValidatingAdmissionPolicyV1#reason}

---

### ValidatingAdmissionPolicyV1SpecVariables <a name="ValidatingAdmissionPolicyV1SpecVariables" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariables.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

new ValidatingAdmissionPolicyV1SpecVariables {
    string Expression = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariables.property.expression">Expression</a></code> | <code>string</code> | Expression is the expression that will be evaluated as the value of the variable. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariables.property.name">Name</a></code> | <code>string</code> | Name is the name of the variable. |

---

##### `Expression`<sup>Optional</sup> <a name="Expression" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariables.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Expression is the expression that will be evaluated as the value of the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/resources/validating_admission_policy_v1#expression ValidatingAdmissionPolicyV1#expression}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariables.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name is the name of the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/resources/validating_admission_policy_v1#name ValidatingAdmissionPolicyV1#name}

---

### ValidatingAdmissionPolicyV1Timeouts <a name="ValidatingAdmissionPolicyV1Timeouts" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1Timeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

new ValidatingAdmissionPolicyV1Timeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1Timeouts.property.create">Create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1Timeouts.property.delete">Delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1Timeouts.property.read">Read</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1Timeouts.property.update">Update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1Timeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/resources/validating_admission_policy_v1#create ValidatingAdmissionPolicyV1#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1Timeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/resources/validating_admission_policy_v1#delete ValidatingAdmissionPolicyV1#delete}

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1Timeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/resources/validating_admission_policy_v1#read ValidatingAdmissionPolicyV1#read}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1Timeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/resources/validating_admission_policy_v1#update ValidatingAdmissionPolicyV1#update}

---

## Classes <a name="Classes" id="Classes"></a>

### ValidatingAdmissionPolicyV1MetadataOutputReference <a name="ValidatingAdmissionPolicyV1MetadataOutputReference" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

new ValidatingAdmissionPolicyV1MetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.resetGenerateName">ResetGenerateName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.resetGeneration">ResetGeneration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.resetResourceVersion">ResetResourceVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.resetUid">ResetUid</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetGenerateName` <a name="ResetGenerateName" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.resetGenerateName"></a>

```csharp
private void ResetGenerateName()
```

##### `ResetGeneration` <a name="ResetGeneration" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.resetGeneration"></a>

```csharp
private void ResetGeneration()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetResourceVersion` <a name="ResetResourceVersion" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.resetResourceVersion"></a>

```csharp
private void ResetResourceVersion()
```

##### `ResetUid` <a name="ResetUid" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.resetUid"></a>

```csharp
private void ResetUid()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.property.annotationsInput">AnnotationsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.property.generateNameInput">GenerateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.property.generationInput">GenerationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.property.resourceVersionInput">ResourceVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.property.uidInput">UidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.property.generateName">GenerateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.property.generation">Generation</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.property.resourceVersion">ResourceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1Metadata">ValidatingAdmissionPolicyV1Metadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.property.annotationsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AnnotationsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `GenerateNameInput`<sup>Optional</sup> <a name="GenerateNameInput" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.property.generateNameInput"></a>

```csharp
public string GenerateNameInput { get; }
```

- *Type:* string

---

##### `GenerationInput`<sup>Optional</sup> <a name="GenerationInput" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.property.generationInput"></a>

```csharp
public double GenerationInput { get; }
```

- *Type:* double

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `ResourceVersionInput`<sup>Optional</sup> <a name="ResourceVersionInput" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.property.resourceVersionInput"></a>

```csharp
public string ResourceVersionInput { get; }
```

- *Type:* string

---

##### `UidInput`<sup>Optional</sup> <a name="UidInput" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.property.uidInput"></a>

```csharp
public string UidInput { get; }
```

- *Type:* string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `GenerateName`<sup>Required</sup> <a name="GenerateName" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.property.generateName"></a>

```csharp
public string GenerateName { get; }
```

- *Type:* string

---

##### `Generation`<sup>Required</sup> <a name="Generation" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.property.generation"></a>

```csharp
public double Generation { get; }
```

- *Type:* double

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `ResourceVersion`<sup>Required</sup> <a name="ResourceVersion" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.property.resourceVersion"></a>

```csharp
public string ResourceVersion { get; }
```

- *Type:* string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1MetadataOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ValidatingAdmissionPolicyV1Metadata InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1Metadata">ValidatingAdmissionPolicyV1Metadata</a>

---


### ValidatingAdmissionPolicyV1SpecAuditAnnotationsList <a name="ValidatingAdmissionPolicyV1SpecAuditAnnotationsList" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

new ValidatingAdmissionPolicyV1SpecAuditAnnotationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotationsList.get"></a>

```csharp
private ValidatingAdmissionPolicyV1SpecAuditAnnotationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotationsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotations">ValidatingAdmissionPolicyV1SpecAuditAnnotations</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotationsList.property.internalValue"></a>

```csharp
public IResolvable|ValidatingAdmissionPolicyV1SpecAuditAnnotations[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotations">ValidatingAdmissionPolicyV1SpecAuditAnnotations</a>[]

---


### ValidatingAdmissionPolicyV1SpecAuditAnnotationsOutputReference <a name="ValidatingAdmissionPolicyV1SpecAuditAnnotationsOutputReference" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

new ValidatingAdmissionPolicyV1SpecAuditAnnotationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotationsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotationsOutputReference.property.valueExpressionInput">ValueExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotationsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotationsOutputReference.property.valueExpression">ValueExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotations">ValidatingAdmissionPolicyV1SpecAuditAnnotations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotationsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueExpressionInput`<sup>Optional</sup> <a name="ValueExpressionInput" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotationsOutputReference.property.valueExpressionInput"></a>

```csharp
public string ValueExpressionInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotationsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `ValueExpression`<sup>Required</sup> <a name="ValueExpression" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotationsOutputReference.property.valueExpression"></a>

```csharp
public string ValueExpression { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ValidatingAdmissionPolicyV1SpecAuditAnnotations InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotations">ValidatingAdmissionPolicyV1SpecAuditAnnotations</a>

---


### ValidatingAdmissionPolicyV1SpecMatchConditionsList <a name="ValidatingAdmissionPolicyV1SpecMatchConditionsList" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

new ValidatingAdmissionPolicyV1SpecMatchConditionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditionsList.get"></a>

```csharp
private ValidatingAdmissionPolicyV1SpecMatchConditionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditions">ValidatingAdmissionPolicyV1SpecMatchConditions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditionsList.property.internalValue"></a>

```csharp
public IResolvable|ValidatingAdmissionPolicyV1SpecMatchConditions[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditions">ValidatingAdmissionPolicyV1SpecMatchConditions</a>[]

---


### ValidatingAdmissionPolicyV1SpecMatchConditionsOutputReference <a name="ValidatingAdmissionPolicyV1SpecMatchConditionsOutputReference" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

new ValidatingAdmissionPolicyV1SpecMatchConditionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditionsOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditionsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditionsOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditionsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditions">ValidatingAdmissionPolicyV1SpecMatchConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditionsOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditionsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditionsOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditionsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ValidatingAdmissionPolicyV1SpecMatchConditions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditions">ValidatingAdmissionPolicyV1SpecMatchConditions</a>

---


### ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesList <a name="ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesList" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

new ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesList.get"></a>

```csharp
private ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRules">ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRules</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesList.property.internalValue"></a>

```csharp
public IResolvable|ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRules[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRules">ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRules</a>[]

---


### ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesOutputReference <a name="ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesOutputReference" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

new ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesOutputReference.resetResourceNames">ResetResourceNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesOutputReference.resetScope">ResetScope</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResourceNames` <a name="ResetResourceNames" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesOutputReference.resetResourceNames"></a>

```csharp
private void ResetResourceNames()
```

##### `ResetScope` <a name="ResetScope" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesOutputReference.resetScope"></a>

```csharp
private void ResetScope()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesOutputReference.property.apiGroupsInput">ApiGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesOutputReference.property.apiVersionsInput">ApiVersionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesOutputReference.property.operationsInput">OperationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesOutputReference.property.resourceNamesInput">ResourceNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesOutputReference.property.resourcesInput">ResourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesOutputReference.property.scopeInput">ScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesOutputReference.property.apiGroups">ApiGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesOutputReference.property.apiVersions">ApiVersions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesOutputReference.property.operations">Operations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesOutputReference.property.resourceNames">ResourceNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesOutputReference.property.resources">Resources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesOutputReference.property.scope">Scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRules">ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiGroupsInput`<sup>Optional</sup> <a name="ApiGroupsInput" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesOutputReference.property.apiGroupsInput"></a>

```csharp
public string[] ApiGroupsInput { get; }
```

- *Type:* string[]

---

##### `ApiVersionsInput`<sup>Optional</sup> <a name="ApiVersionsInput" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesOutputReference.property.apiVersionsInput"></a>

```csharp
public string[] ApiVersionsInput { get; }
```

- *Type:* string[]

---

##### `OperationsInput`<sup>Optional</sup> <a name="OperationsInput" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesOutputReference.property.operationsInput"></a>

```csharp
public string[] OperationsInput { get; }
```

- *Type:* string[]

---

##### `ResourceNamesInput`<sup>Optional</sup> <a name="ResourceNamesInput" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesOutputReference.property.resourceNamesInput"></a>

```csharp
public string[] ResourceNamesInput { get; }
```

- *Type:* string[]

---

##### `ResourcesInput`<sup>Optional</sup> <a name="ResourcesInput" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesOutputReference.property.resourcesInput"></a>

```csharp
public string[] ResourcesInput { get; }
```

- *Type:* string[]

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesOutputReference.property.scopeInput"></a>

```csharp
public string ScopeInput { get; }
```

- *Type:* string

---

##### `ApiGroups`<sup>Required</sup> <a name="ApiGroups" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesOutputReference.property.apiGroups"></a>

```csharp
public string[] ApiGroups { get; }
```

- *Type:* string[]

---

##### `ApiVersions`<sup>Required</sup> <a name="ApiVersions" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesOutputReference.property.apiVersions"></a>

```csharp
public string[] ApiVersions { get; }
```

- *Type:* string[]

---

##### `Operations`<sup>Required</sup> <a name="Operations" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesOutputReference.property.operations"></a>

```csharp
public string[] Operations { get; }
```

- *Type:* string[]

---

##### `ResourceNames`<sup>Required</sup> <a name="ResourceNames" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesOutputReference.property.resourceNames"></a>

```csharp
public string[] ResourceNames { get; }
```

- *Type:* string[]

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesOutputReference.property.resources"></a>

```csharp
public string[] Resources { get; }
```

- *Type:* string[]

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesOutputReference.property.scope"></a>

```csharp
public string Scope { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRules InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRules">ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRules</a>

---


### ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsList <a name="ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsList" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

new ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsList.get"></a>

```csharp
private ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressions">ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsList.property.internalValue"></a>

```csharp
public IResolvable|ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressions[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressions">ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressions</a>[]

---


### ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsOutputReference <a name="ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsOutputReference" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

new ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetOperator` <a name="ResetOperator" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsOutputReference.resetOperator"></a>

```csharp
private void ResetOperator()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressions">ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressions">ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressions</a>

---


### ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorOutputReference <a name="ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorOutputReference" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

new ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorOutputReference.putMatchExpressions">PutMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorOutputReference.resetMatchExpressions">ResetMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorOutputReference.resetMatchLabels">ResetMatchLabels</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMatchExpressions` <a name="PutMatchExpressions" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorOutputReference.putMatchExpressions"></a>

```csharp
private void PutMatchExpressions(IResolvable|ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorOutputReference.putMatchExpressions.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressions">ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressions</a>[]

---

##### `ResetMatchExpressions` <a name="ResetMatchExpressions" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorOutputReference.resetMatchExpressions"></a>

```csharp
private void ResetMatchExpressions()
```

##### `ResetMatchLabels` <a name="ResetMatchLabels" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorOutputReference.resetMatchLabels"></a>

```csharp
private void ResetMatchLabels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorOutputReference.property.matchExpressions">MatchExpressions</a></code> | <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsList">ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorOutputReference.property.matchExpressionsInput">MatchExpressionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressions">ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorOutputReference.property.matchLabelsInput">MatchLabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorOutputReference.property.matchLabels">MatchLabels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelector">ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelector</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MatchExpressions`<sup>Required</sup> <a name="MatchExpressions" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorOutputReference.property.matchExpressions"></a>

```csharp
public ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsList MatchExpressions { get; }
```

- *Type:* <a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsList">ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressionsList</a>

---

##### `MatchExpressionsInput`<sup>Optional</sup> <a name="MatchExpressionsInput" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorOutputReference.property.matchExpressionsInput"></a>

```csharp
public IResolvable|ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressions[] MatchExpressionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressions">ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorMatchExpressions</a>[]

---

##### `MatchLabelsInput`<sup>Optional</sup> <a name="MatchLabelsInput" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorOutputReference.property.matchLabelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MatchLabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MatchLabels`<sup>Required</sup> <a name="MatchLabels" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorOutputReference.property.matchLabels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MatchLabels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelector InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelector">ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelector</a>

---


### ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsList <a name="ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsList" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

new ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsList.get"></a>

```csharp
private ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressions">ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsList.property.internalValue"></a>

```csharp
public IResolvable|ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressions[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressions">ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressions</a>[]

---


### ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsOutputReference <a name="ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsOutputReference" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

new ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetOperator` <a name="ResetOperator" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsOutputReference.resetOperator"></a>

```csharp
private void ResetOperator()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressions">ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressions">ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressions</a>

---


### ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorOutputReference <a name="ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorOutputReference" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

new ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorOutputReference.putMatchExpressions">PutMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorOutputReference.resetMatchExpressions">ResetMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorOutputReference.resetMatchLabels">ResetMatchLabels</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMatchExpressions` <a name="PutMatchExpressions" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorOutputReference.putMatchExpressions"></a>

```csharp
private void PutMatchExpressions(IResolvable|ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorOutputReference.putMatchExpressions.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressions">ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressions</a>[]

---

##### `ResetMatchExpressions` <a name="ResetMatchExpressions" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorOutputReference.resetMatchExpressions"></a>

```csharp
private void ResetMatchExpressions()
```

##### `ResetMatchLabels` <a name="ResetMatchLabels" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorOutputReference.resetMatchLabels"></a>

```csharp
private void ResetMatchLabels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorOutputReference.property.matchExpressions">MatchExpressions</a></code> | <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsList">ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorOutputReference.property.matchExpressionsInput">MatchExpressionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressions">ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorOutputReference.property.matchLabelsInput">MatchLabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorOutputReference.property.matchLabels">MatchLabels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelector">ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelector</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MatchExpressions`<sup>Required</sup> <a name="MatchExpressions" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorOutputReference.property.matchExpressions"></a>

```csharp
public ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsList MatchExpressions { get; }
```

- *Type:* <a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsList">ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressionsList</a>

---

##### `MatchExpressionsInput`<sup>Optional</sup> <a name="MatchExpressionsInput" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorOutputReference.property.matchExpressionsInput"></a>

```csharp
public IResolvable|ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressions[] MatchExpressionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressions">ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorMatchExpressions</a>[]

---

##### `MatchLabelsInput`<sup>Optional</sup> <a name="MatchLabelsInput" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorOutputReference.property.matchLabelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MatchLabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `MatchLabels`<sup>Required</sup> <a name="MatchLabels" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorOutputReference.property.matchLabels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MatchLabels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelector InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelector">ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelector</a>

---


### ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorOutputReference <a name="ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorOutputReference" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

new ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorOutputReference.putLabelSelector">PutLabelSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorOutputReference.resetLabelSelector">ResetLabelSelector</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLabelSelector` <a name="PutLabelSelector" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorOutputReference.putLabelSelector"></a>

```csharp
private void PutLabelSelector(ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelector Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorOutputReference.putLabelSelector.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelector">ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelector</a>

---

##### `ResetLabelSelector` <a name="ResetLabelSelector" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorOutputReference.resetLabelSelector"></a>

```csharp
private void ResetLabelSelector()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorOutputReference.property.labelSelector">LabelSelector</a></code> | <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorOutputReference">ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorOutputReference.property.labelSelectorInput">LabelSelectorInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelector">ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelector">ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelector</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LabelSelector`<sup>Required</sup> <a name="LabelSelector" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorOutputReference.property.labelSelector"></a>

```csharp
public ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorOutputReference LabelSelector { get; }
```

- *Type:* <a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorOutputReference">ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelectorOutputReference</a>

---

##### `LabelSelectorInput`<sup>Optional</sup> <a name="LabelSelectorInput" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorOutputReference.property.labelSelectorInput"></a>

```csharp
public IResolvable|ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelector LabelSelectorInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelector">ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorLabelSelector</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelector InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelector">ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelector</a>

---


### ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference <a name="ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

new ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference.putExcludeResourceRules">PutExcludeResourceRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference.putNamespaceSelector">PutNamespaceSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference.putObjectSelector">PutObjectSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference.putResourceRules">PutResourceRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference.resetExcludeResourceRules">ResetExcludeResourceRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference.resetMatchPolicy">ResetMatchPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference.resetNamespaceSelector">ResetNamespaceSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference.resetObjectSelector">ResetObjectSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference.resetResourceRules">ResetResourceRules</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExcludeResourceRules` <a name="PutExcludeResourceRules" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference.putExcludeResourceRules"></a>

```csharp
private void PutExcludeResourceRules(IResolvable|ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRules[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference.putExcludeResourceRules.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRules">ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRules</a>[]

---

##### `PutNamespaceSelector` <a name="PutNamespaceSelector" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference.putNamespaceSelector"></a>

```csharp
private void PutNamespaceSelector(ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelector Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference.putNamespaceSelector.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelector">ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelector</a>

---

##### `PutObjectSelector` <a name="PutObjectSelector" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference.putObjectSelector"></a>

```csharp
private void PutObjectSelector(ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelector Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference.putObjectSelector.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelector">ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelector</a>

---

##### `PutResourceRules` <a name="PutResourceRules" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference.putResourceRules"></a>

```csharp
private void PutResourceRules(IResolvable|ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRules[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference.putResourceRules.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRules">ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRules</a>[]

---

##### `ResetExcludeResourceRules` <a name="ResetExcludeResourceRules" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference.resetExcludeResourceRules"></a>

```csharp
private void ResetExcludeResourceRules()
```

##### `ResetMatchPolicy` <a name="ResetMatchPolicy" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference.resetMatchPolicy"></a>

```csharp
private void ResetMatchPolicy()
```

##### `ResetNamespaceSelector` <a name="ResetNamespaceSelector" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference.resetNamespaceSelector"></a>

```csharp
private void ResetNamespaceSelector()
```

##### `ResetObjectSelector` <a name="ResetObjectSelector" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference.resetObjectSelector"></a>

```csharp
private void ResetObjectSelector()
```

##### `ResetResourceRules` <a name="ResetResourceRules" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference.resetResourceRules"></a>

```csharp
private void ResetResourceRules()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference.property.excludeResourceRules">ExcludeResourceRules</a></code> | <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesList">ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference.property.namespaceSelector">NamespaceSelector</a></code> | <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorOutputReference">ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference.property.objectSelector">ObjectSelector</a></code> | <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorOutputReference">ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference.property.resourceRules">ResourceRules</a></code> | <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesList">ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference.property.excludeResourceRulesInput">ExcludeResourceRulesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRules">ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference.property.matchPolicyInput">MatchPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference.property.namespaceSelectorInput">NamespaceSelectorInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelector">ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference.property.objectSelectorInput">ObjectSelectorInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelector">ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference.property.resourceRulesInput">ResourceRulesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRules">ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference.property.matchPolicy">MatchPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraints">ValidatingAdmissionPolicyV1SpecMatchConstraints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExcludeResourceRules`<sup>Required</sup> <a name="ExcludeResourceRules" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference.property.excludeResourceRules"></a>

```csharp
public ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesList ExcludeResourceRules { get; }
```

- *Type:* <a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesList">ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRulesList</a>

---

##### `NamespaceSelector`<sup>Required</sup> <a name="NamespaceSelector" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference.property.namespaceSelector"></a>

```csharp
public ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorOutputReference NamespaceSelector { get; }
```

- *Type:* <a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorOutputReference">ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelectorOutputReference</a>

---

##### `ObjectSelector`<sup>Required</sup> <a name="ObjectSelector" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference.property.objectSelector"></a>

```csharp
public ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorOutputReference ObjectSelector { get; }
```

- *Type:* <a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorOutputReference">ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelectorOutputReference</a>

---

##### `ResourceRules`<sup>Required</sup> <a name="ResourceRules" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference.property.resourceRules"></a>

```csharp
public ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesList ResourceRules { get; }
```

- *Type:* <a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesList">ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesList</a>

---

##### `ExcludeResourceRulesInput`<sup>Optional</sup> <a name="ExcludeResourceRulesInput" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference.property.excludeResourceRulesInput"></a>

```csharp
public IResolvable|ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRules[] ExcludeResourceRulesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRules">ValidatingAdmissionPolicyV1SpecMatchConstraintsExcludeResourceRules</a>[]

---

##### `MatchPolicyInput`<sup>Optional</sup> <a name="MatchPolicyInput" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference.property.matchPolicyInput"></a>

```csharp
public string MatchPolicyInput { get; }
```

- *Type:* string

---

##### `NamespaceSelectorInput`<sup>Optional</sup> <a name="NamespaceSelectorInput" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference.property.namespaceSelectorInput"></a>

```csharp
public IResolvable|ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelector NamespaceSelectorInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelector">ValidatingAdmissionPolicyV1SpecMatchConstraintsNamespaceSelector</a>

---

##### `ObjectSelectorInput`<sup>Optional</sup> <a name="ObjectSelectorInput" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference.property.objectSelectorInput"></a>

```csharp
public IResolvable|ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelector ObjectSelectorInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelector">ValidatingAdmissionPolicyV1SpecMatchConstraintsObjectSelector</a>

---

##### `ResourceRulesInput`<sup>Optional</sup> <a name="ResourceRulesInput" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference.property.resourceRulesInput"></a>

```csharp
public IResolvable|ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRules[] ResourceRulesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRules">ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRules</a>[]

---

##### `MatchPolicy`<sup>Required</sup> <a name="MatchPolicy" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference.property.matchPolicy"></a>

```csharp
public string MatchPolicy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ValidatingAdmissionPolicyV1SpecMatchConstraints InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraints">ValidatingAdmissionPolicyV1SpecMatchConstraints</a>

---


### ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesList <a name="ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesList" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

new ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesList.get"></a>

```csharp
private ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRules">ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRules</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesList.property.internalValue"></a>

```csharp
public IResolvable|ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRules[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRules">ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRules</a>[]

---


### ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesOutputReference <a name="ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesOutputReference" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

new ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesOutputReference.resetResourceNames">ResetResourceNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesOutputReference.resetScope">ResetScope</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResourceNames` <a name="ResetResourceNames" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesOutputReference.resetResourceNames"></a>

```csharp
private void ResetResourceNames()
```

##### `ResetScope` <a name="ResetScope" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesOutputReference.resetScope"></a>

```csharp
private void ResetScope()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesOutputReference.property.apiGroupsInput">ApiGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesOutputReference.property.apiVersionsInput">ApiVersionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesOutputReference.property.operationsInput">OperationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesOutputReference.property.resourceNamesInput">ResourceNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesOutputReference.property.resourcesInput">ResourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesOutputReference.property.scopeInput">ScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesOutputReference.property.apiGroups">ApiGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesOutputReference.property.apiVersions">ApiVersions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesOutputReference.property.operations">Operations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesOutputReference.property.resourceNames">ResourceNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesOutputReference.property.resources">Resources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesOutputReference.property.scope">Scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRules">ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiGroupsInput`<sup>Optional</sup> <a name="ApiGroupsInput" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesOutputReference.property.apiGroupsInput"></a>

```csharp
public string[] ApiGroupsInput { get; }
```

- *Type:* string[]

---

##### `ApiVersionsInput`<sup>Optional</sup> <a name="ApiVersionsInput" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesOutputReference.property.apiVersionsInput"></a>

```csharp
public string[] ApiVersionsInput { get; }
```

- *Type:* string[]

---

##### `OperationsInput`<sup>Optional</sup> <a name="OperationsInput" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesOutputReference.property.operationsInput"></a>

```csharp
public string[] OperationsInput { get; }
```

- *Type:* string[]

---

##### `ResourceNamesInput`<sup>Optional</sup> <a name="ResourceNamesInput" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesOutputReference.property.resourceNamesInput"></a>

```csharp
public string[] ResourceNamesInput { get; }
```

- *Type:* string[]

---

##### `ResourcesInput`<sup>Optional</sup> <a name="ResourcesInput" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesOutputReference.property.resourcesInput"></a>

```csharp
public string[] ResourcesInput { get; }
```

- *Type:* string[]

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesOutputReference.property.scopeInput"></a>

```csharp
public string ScopeInput { get; }
```

- *Type:* string

---

##### `ApiGroups`<sup>Required</sup> <a name="ApiGroups" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesOutputReference.property.apiGroups"></a>

```csharp
public string[] ApiGroups { get; }
```

- *Type:* string[]

---

##### `ApiVersions`<sup>Required</sup> <a name="ApiVersions" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesOutputReference.property.apiVersions"></a>

```csharp
public string[] ApiVersions { get; }
```

- *Type:* string[]

---

##### `Operations`<sup>Required</sup> <a name="Operations" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesOutputReference.property.operations"></a>

```csharp
public string[] Operations { get; }
```

- *Type:* string[]

---

##### `ResourceNames`<sup>Required</sup> <a name="ResourceNames" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesOutputReference.property.resourceNames"></a>

```csharp
public string[] ResourceNames { get; }
```

- *Type:* string[]

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesOutputReference.property.resources"></a>

```csharp
public string[] Resources { get; }
```

- *Type:* string[]

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesOutputReference.property.scope"></a>

```csharp
public string Scope { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRulesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRules InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRules">ValidatingAdmissionPolicyV1SpecMatchConstraintsResourceRules</a>

---


### ValidatingAdmissionPolicyV1SpecOutputReference <a name="ValidatingAdmissionPolicyV1SpecOutputReference" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

new ValidatingAdmissionPolicyV1SpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.putAuditAnnotations">PutAuditAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.putMatchConditions">PutMatchConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.putMatchConstraints">PutMatchConstraints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.putParamKind">PutParamKind</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.putValidations">PutValidations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.putVariables">PutVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.resetMatchConditions">ResetMatchConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.resetParamKind">ResetParamKind</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.resetValidations">ResetValidations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.resetVariables">ResetVariables</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuditAnnotations` <a name="PutAuditAnnotations" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.putAuditAnnotations"></a>

```csharp
private void PutAuditAnnotations(IResolvable|ValidatingAdmissionPolicyV1SpecAuditAnnotations[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.putAuditAnnotations.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotations">ValidatingAdmissionPolicyV1SpecAuditAnnotations</a>[]

---

##### `PutMatchConditions` <a name="PutMatchConditions" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.putMatchConditions"></a>

```csharp
private void PutMatchConditions(IResolvable|ValidatingAdmissionPolicyV1SpecMatchConditions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.putMatchConditions.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditions">ValidatingAdmissionPolicyV1SpecMatchConditions</a>[]

---

##### `PutMatchConstraints` <a name="PutMatchConstraints" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.putMatchConstraints"></a>

```csharp
private void PutMatchConstraints(ValidatingAdmissionPolicyV1SpecMatchConstraints Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.putMatchConstraints.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraints">ValidatingAdmissionPolicyV1SpecMatchConstraints</a>

---

##### `PutParamKind` <a name="PutParamKind" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.putParamKind"></a>

```csharp
private void PutParamKind(ValidatingAdmissionPolicyV1SpecParamKind Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.putParamKind.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecParamKind">ValidatingAdmissionPolicyV1SpecParamKind</a>

---

##### `PutValidations` <a name="PutValidations" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.putValidations"></a>

```csharp
private void PutValidations(IResolvable|ValidatingAdmissionPolicyV1SpecValidations[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.putValidations.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidations">ValidatingAdmissionPolicyV1SpecValidations</a>[]

---

##### `PutVariables` <a name="PutVariables" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.putVariables"></a>

```csharp
private void PutVariables(IResolvable|ValidatingAdmissionPolicyV1SpecVariables[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.putVariables.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariables">ValidatingAdmissionPolicyV1SpecVariables</a>[]

---

##### `ResetMatchConditions` <a name="ResetMatchConditions" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.resetMatchConditions"></a>

```csharp
private void ResetMatchConditions()
```

##### `ResetParamKind` <a name="ResetParamKind" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.resetParamKind"></a>

```csharp
private void ResetParamKind()
```

##### `ResetValidations` <a name="ResetValidations" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.resetValidations"></a>

```csharp
private void ResetValidations()
```

##### `ResetVariables` <a name="ResetVariables" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.resetVariables"></a>

```csharp
private void ResetVariables()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.property.auditAnnotations">AuditAnnotations</a></code> | <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotationsList">ValidatingAdmissionPolicyV1SpecAuditAnnotationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.property.matchConditions">MatchConditions</a></code> | <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditionsList">ValidatingAdmissionPolicyV1SpecMatchConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.property.matchConstraints">MatchConstraints</a></code> | <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference">ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.property.paramKind">ParamKind</a></code> | <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecParamKindOutputReference">ValidatingAdmissionPolicyV1SpecParamKindOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.property.validations">Validations</a></code> | <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsList">ValidatingAdmissionPolicyV1SpecValidationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.property.variables">Variables</a></code> | <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariablesList">ValidatingAdmissionPolicyV1SpecVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.property.auditAnnotationsInput">AuditAnnotationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotations">ValidatingAdmissionPolicyV1SpecAuditAnnotations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.property.failurePolicyInput">FailurePolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.property.matchConditionsInput">MatchConditionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditions">ValidatingAdmissionPolicyV1SpecMatchConditions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.property.matchConstraintsInput">MatchConstraintsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraints">ValidatingAdmissionPolicyV1SpecMatchConstraints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.property.paramKindInput">ParamKindInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecParamKind">ValidatingAdmissionPolicyV1SpecParamKind</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.property.validationsInput">ValidationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidations">ValidatingAdmissionPolicyV1SpecValidations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.property.variablesInput">VariablesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariables">ValidatingAdmissionPolicyV1SpecVariables</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.property.failurePolicy">FailurePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1Spec">ValidatingAdmissionPolicyV1Spec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuditAnnotations`<sup>Required</sup> <a name="AuditAnnotations" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.property.auditAnnotations"></a>

```csharp
public ValidatingAdmissionPolicyV1SpecAuditAnnotationsList AuditAnnotations { get; }
```

- *Type:* <a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotationsList">ValidatingAdmissionPolicyV1SpecAuditAnnotationsList</a>

---

##### `MatchConditions`<sup>Required</sup> <a name="MatchConditions" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.property.matchConditions"></a>

```csharp
public ValidatingAdmissionPolicyV1SpecMatchConditionsList MatchConditions { get; }
```

- *Type:* <a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditionsList">ValidatingAdmissionPolicyV1SpecMatchConditionsList</a>

---

##### `MatchConstraints`<sup>Required</sup> <a name="MatchConstraints" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.property.matchConstraints"></a>

```csharp
public ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference MatchConstraints { get; }
```

- *Type:* <a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference">ValidatingAdmissionPolicyV1SpecMatchConstraintsOutputReference</a>

---

##### `ParamKind`<sup>Required</sup> <a name="ParamKind" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.property.paramKind"></a>

```csharp
public ValidatingAdmissionPolicyV1SpecParamKindOutputReference ParamKind { get; }
```

- *Type:* <a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecParamKindOutputReference">ValidatingAdmissionPolicyV1SpecParamKindOutputReference</a>

---

##### `Validations`<sup>Required</sup> <a name="Validations" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.property.validations"></a>

```csharp
public ValidatingAdmissionPolicyV1SpecValidationsList Validations { get; }
```

- *Type:* <a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsList">ValidatingAdmissionPolicyV1SpecValidationsList</a>

---

##### `Variables`<sup>Required</sup> <a name="Variables" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.property.variables"></a>

```csharp
public ValidatingAdmissionPolicyV1SpecVariablesList Variables { get; }
```

- *Type:* <a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariablesList">ValidatingAdmissionPolicyV1SpecVariablesList</a>

---

##### `AuditAnnotationsInput`<sup>Optional</sup> <a name="AuditAnnotationsInput" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.property.auditAnnotationsInput"></a>

```csharp
public IResolvable|ValidatingAdmissionPolicyV1SpecAuditAnnotations[] AuditAnnotationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecAuditAnnotations">ValidatingAdmissionPolicyV1SpecAuditAnnotations</a>[]

---

##### `FailurePolicyInput`<sup>Optional</sup> <a name="FailurePolicyInput" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.property.failurePolicyInput"></a>

```csharp
public string FailurePolicyInput { get; }
```

- *Type:* string

---

##### `MatchConditionsInput`<sup>Optional</sup> <a name="MatchConditionsInput" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.property.matchConditionsInput"></a>

```csharp
public IResolvable|ValidatingAdmissionPolicyV1SpecMatchConditions[] MatchConditionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConditions">ValidatingAdmissionPolicyV1SpecMatchConditions</a>[]

---

##### `MatchConstraintsInput`<sup>Optional</sup> <a name="MatchConstraintsInput" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.property.matchConstraintsInput"></a>

```csharp
public IResolvable|ValidatingAdmissionPolicyV1SpecMatchConstraints MatchConstraintsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecMatchConstraints">ValidatingAdmissionPolicyV1SpecMatchConstraints</a>

---

##### `ParamKindInput`<sup>Optional</sup> <a name="ParamKindInput" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.property.paramKindInput"></a>

```csharp
public IResolvable|ValidatingAdmissionPolicyV1SpecParamKind ParamKindInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecParamKind">ValidatingAdmissionPolicyV1SpecParamKind</a>

---

##### `ValidationsInput`<sup>Optional</sup> <a name="ValidationsInput" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.property.validationsInput"></a>

```csharp
public IResolvable|ValidatingAdmissionPolicyV1SpecValidations[] ValidationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidations">ValidatingAdmissionPolicyV1SpecValidations</a>[]

---

##### `VariablesInput`<sup>Optional</sup> <a name="VariablesInput" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.property.variablesInput"></a>

```csharp
public IResolvable|ValidatingAdmissionPolicyV1SpecVariables[] VariablesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariables">ValidatingAdmissionPolicyV1SpecVariables</a>[]

---

##### `FailurePolicy`<sup>Required</sup> <a name="FailurePolicy" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.property.failurePolicy"></a>

```csharp
public string FailurePolicy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ValidatingAdmissionPolicyV1Spec InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1Spec">ValidatingAdmissionPolicyV1Spec</a>

---


### ValidatingAdmissionPolicyV1SpecParamKindOutputReference <a name="ValidatingAdmissionPolicyV1SpecParamKindOutputReference" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecParamKindOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecParamKindOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

new ValidatingAdmissionPolicyV1SpecParamKindOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecParamKindOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecParamKindOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecParamKindOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecParamKindOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecParamKindOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecParamKindOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecParamKindOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecParamKindOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecParamKindOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecParamKindOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecParamKindOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecParamKindOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecParamKindOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecParamKindOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecParamKindOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecParamKindOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecParamKindOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecParamKindOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecParamKindOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecParamKindOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecParamKindOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecParamKindOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecParamKindOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecParamKindOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecParamKindOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecParamKindOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecParamKindOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecParamKindOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecParamKindOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecParamKindOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecParamKindOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecParamKindOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecParamKindOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecParamKindOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecParamKindOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecParamKindOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecParamKindOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecParamKindOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecParamKindOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecParamKindOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecParamKindOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecParamKindOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecParamKindOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecParamKindOutputReference.property.apiVersionInput">ApiVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecParamKindOutputReference.property.kindInput">KindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecParamKindOutputReference.property.apiVersion">ApiVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecParamKindOutputReference.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecParamKindOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecParamKind">ValidatingAdmissionPolicyV1SpecParamKind</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecParamKindOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecParamKindOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiVersionInput`<sup>Optional</sup> <a name="ApiVersionInput" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecParamKindOutputReference.property.apiVersionInput"></a>

```csharp
public string ApiVersionInput { get; }
```

- *Type:* string

---

##### `KindInput`<sup>Optional</sup> <a name="KindInput" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecParamKindOutputReference.property.kindInput"></a>

```csharp
public string KindInput { get; }
```

- *Type:* string

---

##### `ApiVersion`<sup>Required</sup> <a name="ApiVersion" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecParamKindOutputReference.property.apiVersion"></a>

```csharp
public string ApiVersion { get; }
```

- *Type:* string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecParamKindOutputReference.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecParamKindOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ValidatingAdmissionPolicyV1SpecParamKind InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecParamKind">ValidatingAdmissionPolicyV1SpecParamKind</a>

---


### ValidatingAdmissionPolicyV1SpecValidationsList <a name="ValidatingAdmissionPolicyV1SpecValidationsList" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

new ValidatingAdmissionPolicyV1SpecValidationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsList.get"></a>

```csharp
private ValidatingAdmissionPolicyV1SpecValidationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidations">ValidatingAdmissionPolicyV1SpecValidations</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsList.property.internalValue"></a>

```csharp
public IResolvable|ValidatingAdmissionPolicyV1SpecValidations[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidations">ValidatingAdmissionPolicyV1SpecValidations</a>[]

---


### ValidatingAdmissionPolicyV1SpecValidationsOutputReference <a name="ValidatingAdmissionPolicyV1SpecValidationsOutputReference" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

new ValidatingAdmissionPolicyV1SpecValidationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsOutputReference.resetMessageExpression">ResetMessageExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsOutputReference.resetReason">ResetReason</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMessageExpression` <a name="ResetMessageExpression" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsOutputReference.resetMessageExpression"></a>

```csharp
private void ResetMessageExpression()
```

##### `ResetReason` <a name="ResetReason" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsOutputReference.resetReason"></a>

```csharp
private void ResetReason()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsOutputReference.property.messageExpressionInput">MessageExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsOutputReference.property.messageInput">MessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsOutputReference.property.reasonInput">ReasonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsOutputReference.property.messageExpression">MessageExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsOutputReference.property.reason">Reason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidations">ValidatingAdmissionPolicyV1SpecValidations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `MessageExpressionInput`<sup>Optional</sup> <a name="MessageExpressionInput" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsOutputReference.property.messageExpressionInput"></a>

```csharp
public string MessageExpressionInput { get; }
```

- *Type:* string

---

##### `MessageInput`<sup>Optional</sup> <a name="MessageInput" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsOutputReference.property.messageInput"></a>

```csharp
public string MessageInput { get; }
```

- *Type:* string

---

##### `ReasonInput`<sup>Optional</sup> <a name="ReasonInput" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsOutputReference.property.reasonInput"></a>

```csharp
public string ReasonInput { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `MessageExpression`<sup>Required</sup> <a name="MessageExpression" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsOutputReference.property.messageExpression"></a>

```csharp
public string MessageExpression { get; }
```

- *Type:* string

---

##### `Reason`<sup>Required</sup> <a name="Reason" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsOutputReference.property.reason"></a>

```csharp
public string Reason { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ValidatingAdmissionPolicyV1SpecValidations InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecValidations">ValidatingAdmissionPolicyV1SpecValidations</a>

---


### ValidatingAdmissionPolicyV1SpecVariablesList <a name="ValidatingAdmissionPolicyV1SpecVariablesList" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariablesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

new ValidatingAdmissionPolicyV1SpecVariablesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariablesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariablesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariablesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariablesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariablesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariablesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariablesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariablesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariablesList.get"></a>

```csharp
private ValidatingAdmissionPolicyV1SpecVariablesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariablesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariablesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariablesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariablesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariables">ValidatingAdmissionPolicyV1SpecVariables</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariablesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariablesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariablesList.property.internalValue"></a>

```csharp
public IResolvable|ValidatingAdmissionPolicyV1SpecVariables[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariables">ValidatingAdmissionPolicyV1SpecVariables</a>[]

---


### ValidatingAdmissionPolicyV1SpecVariablesOutputReference <a name="ValidatingAdmissionPolicyV1SpecVariablesOutputReference" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariablesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

new ValidatingAdmissionPolicyV1SpecVariablesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariablesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariablesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariablesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariablesOutputReference.resetExpression">ResetExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariablesOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariablesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariablesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariablesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariablesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariablesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariablesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariablesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariablesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariablesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariablesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariablesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariablesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariablesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExpression` <a name="ResetExpression" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariablesOutputReference.resetExpression"></a>

```csharp
private void ResetExpression()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariablesOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariablesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariablesOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariablesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariablesOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariablesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariables">ValidatingAdmissionPolicyV1SpecVariables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariablesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariablesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariablesOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariablesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariablesOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariablesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariablesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ValidatingAdmissionPolicyV1SpecVariables InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1SpecVariables">ValidatingAdmissionPolicyV1SpecVariables</a>

---


### ValidatingAdmissionPolicyV1TimeoutsOutputReference <a name="ValidatingAdmissionPolicyV1TimeoutsOutputReference" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1TimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

new ValidatingAdmissionPolicyV1TimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1TimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1TimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1TimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1TimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1TimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1TimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1TimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1TimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1TimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1TimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1TimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1TimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1TimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1TimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1TimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1TimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1TimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1TimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1TimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1TimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1TimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1TimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1TimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1TimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1TimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1TimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1TimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1TimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1TimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1TimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1TimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1TimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1TimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1TimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1TimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1TimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1TimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1TimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1TimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1TimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1TimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1TimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1TimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1Timeouts">ValidatingAdmissionPolicyV1Timeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1TimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1TimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1TimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1TimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1TimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1TimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1TimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1TimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1TimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1TimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1TimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ValidatingAdmissionPolicyV1Timeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-kubernetes.validatingAdmissionPolicyV1.ValidatingAdmissionPolicyV1Timeouts">ValidatingAdmissionPolicyV1Timeouts</a>

---



