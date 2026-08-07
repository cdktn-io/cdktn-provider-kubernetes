# `ephemeralKubernetesTokenRequestV1` Submodule <a name="`ephemeralKubernetesTokenRequestV1` Submodule" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralKubernetesTokenRequestV1 <a name="EphemeralKubernetesTokenRequestV1" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/token_request_v1 kubernetes_token_request_v1}.

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

new EphemeralKubernetesTokenRequestV1(Construct Scope, string Id, EphemeralKubernetesTokenRequestV1Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Config">EphemeralKubernetesTokenRequestV1Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Config">EphemeralKubernetesTokenRequestV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.toTerraform">ToTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.putMetadata">PutMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.putSpec">PutSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.resetExpirationTimestamp">ResetExpirationTimestamp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.resetSpec">ResetSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.resetToken">ResetToken</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this ephemeral resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutMetadata` <a name="PutMetadata" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.putMetadata"></a>

```csharp
private void PutMetadata(EphemeralKubernetesTokenRequestV1Metadata Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Metadata">EphemeralKubernetesTokenRequestV1Metadata</a>

---

##### `PutSpec` <a name="PutSpec" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.putSpec"></a>

```csharp
private void PutSpec(EphemeralKubernetesTokenRequestV1Spec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Spec">EphemeralKubernetesTokenRequestV1Spec</a>

---

##### `ResetExpirationTimestamp` <a name="ResetExpirationTimestamp" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.resetExpirationTimestamp"></a>

```csharp
private void ResetExpirationTimestamp()
```

##### `ResetSpec` <a name="ResetSpec" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.resetSpec"></a>

```csharp
private void ResetSpec()
```

##### `ResetToken` <a name="ResetToken" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.resetToken"></a>

```csharp
private void ResetToken()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.isTerraformEphemeralResource">IsTerraformEphemeralResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

EphemeralKubernetesTokenRequestV1.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

EphemeralKubernetesTokenRequestV1.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformEphemeralResource` <a name="IsTerraformEphemeralResource" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.isTerraformEphemeralResource"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

EphemeralKubernetesTokenRequestV1.IsTerraformEphemeralResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.metadata">Metadata</a></code> | <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference">EphemeralKubernetesTokenRequestV1MetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.spec">Spec</a></code> | <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference">EphemeralKubernetesTokenRequestV1SpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.expirationTimestampInput">ExpirationTimestampInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.metadataInput">MetadataInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Metadata">EphemeralKubernetesTokenRequestV1Metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.specInput">SpecInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Spec">EphemeralKubernetesTokenRequestV1Spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.tokenInput">TokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.expirationTimestamp">ExpirationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.token">Token</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.lifecycle"></a>

```csharp
public TerraformEphemeralResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.metadata"></a>

```csharp
public EphemeralKubernetesTokenRequestV1MetadataOutputReference Metadata { get; }
```

- *Type:* <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference">EphemeralKubernetesTokenRequestV1MetadataOutputReference</a>

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.spec"></a>

```csharp
public EphemeralKubernetesTokenRequestV1SpecOutputReference Spec { get; }
```

- *Type:* <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference">EphemeralKubernetesTokenRequestV1SpecOutputReference</a>

---

##### `ExpirationTimestampInput`<sup>Optional</sup> <a name="ExpirationTimestampInput" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.expirationTimestampInput"></a>

```csharp
public string ExpirationTimestampInput { get; }
```

- *Type:* string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.metadataInput"></a>

```csharp
public IResolvable|EphemeralKubernetesTokenRequestV1Metadata MetadataInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Metadata">EphemeralKubernetesTokenRequestV1Metadata</a>

---

##### `SpecInput`<sup>Optional</sup> <a name="SpecInput" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.specInput"></a>

```csharp
public IResolvable|EphemeralKubernetesTokenRequestV1Spec SpecInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Spec">EphemeralKubernetesTokenRequestV1Spec</a>

---

##### `TokenInput`<sup>Optional</sup> <a name="TokenInput" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.tokenInput"></a>

```csharp
public string TokenInput { get; }
```

- *Type:* string

---

##### `ExpirationTimestamp`<sup>Required</sup> <a name="ExpirationTimestamp" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.expirationTimestamp"></a>

```csharp
public string ExpirationTimestamp { get; }
```

- *Type:* string

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.token"></a>

```csharp
public string Token { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralKubernetesTokenRequestV1Config <a name="EphemeralKubernetesTokenRequestV1Config" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Config.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

new EphemeralKubernetesTokenRequestV1Config {
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformEphemeralResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    EphemeralKubernetesTokenRequestV1Metadata Metadata,
    string ExpirationTimestamp = null,
    EphemeralKubernetesTokenRequestV1Spec Spec = null,
    string Token = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Config.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Config.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Config.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Config.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Config.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Config.property.metadata">Metadata</a></code> | <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Metadata">EphemeralKubernetesTokenRequestV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Config.property.expirationTimestamp">ExpirationTimestamp</a></code> | <code>string</code> | ExpirationTimestamp is the time of expiration of the returned token. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Config.property.spec">Spec</a></code> | <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Spec">EphemeralKubernetesTokenRequestV1Spec</a></code> | spec block. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Config.property.token">Token</a></code> | <code>string</code> | Token is the opaque bearer token. |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Config.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Config.property.lifecycle"></a>

```csharp
public TerraformEphemeralResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Config.property.metadata"></a>

```csharp
public EphemeralKubernetesTokenRequestV1Metadata Metadata { get; set; }
```

- *Type:* <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Metadata">EphemeralKubernetesTokenRequestV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/token_request_v1#metadata EphemeralKubernetesTokenRequestV1#metadata}

---

##### `ExpirationTimestamp`<sup>Optional</sup> <a name="ExpirationTimestamp" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Config.property.expirationTimestamp"></a>

```csharp
public string ExpirationTimestamp { get; set; }
```

- *Type:* string

ExpirationTimestamp is the time of expiration of the returned token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/token_request_v1#expiration_timestamp EphemeralKubernetesTokenRequestV1#expiration_timestamp}

---

##### `Spec`<sup>Optional</sup> <a name="Spec" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Config.property.spec"></a>

```csharp
public EphemeralKubernetesTokenRequestV1Spec Spec { get; set; }
```

- *Type:* <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Spec">EphemeralKubernetesTokenRequestV1Spec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/token_request_v1#spec EphemeralKubernetesTokenRequestV1#spec}

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Config.property.token"></a>

```csharp
public string Token { get; set; }
```

- *Type:* string

Token is the opaque bearer token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/token_request_v1#token EphemeralKubernetesTokenRequestV1#token}

---

### EphemeralKubernetesTokenRequestV1Metadata <a name="EphemeralKubernetesTokenRequestV1Metadata" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Metadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Metadata.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

new EphemeralKubernetesTokenRequestV1Metadata {
    string Name,
    string Namespace
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Metadata.property.name">Name</a></code> | <code>string</code> | Name must be unique within a namespace. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Metadata.property.namespace">Namespace</a></code> | <code>string</code> | Namespace defines the space within which each name must be unique. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Metadata.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name must be unique within a namespace.

Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/token_request_v1#name EphemeralKubernetesTokenRequestV1#name}

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Metadata.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Namespace defines the space within which each name must be unique.

An empty namespace is equivalent to the "default" namespace, but "default" is the canonical representation. Not all objects are required to be scoped to a namespace - the value of this field for those objects will be empty.

Must be a DNS_LABEL. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/token_request_v1#namespace EphemeralKubernetesTokenRequestV1#namespace}

---

### EphemeralKubernetesTokenRequestV1Spec <a name="EphemeralKubernetesTokenRequestV1Spec" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Spec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Spec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

new EphemeralKubernetesTokenRequestV1Spec {
    string[] Audiences = null,
    EphemeralKubernetesTokenRequestV1SpecBoundObjectRef BoundObjectRef = null,
    double ExpirationSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Spec.property.audiences">Audiences</a></code> | <code>string[]</code> | Audiences are the intendend audiences of the token. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Spec.property.boundObjectRef">BoundObjectRef</a></code> | <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRef">EphemeralKubernetesTokenRequestV1SpecBoundObjectRef</a></code> | bound_object_ref block. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Spec.property.expirationSeconds">ExpirationSeconds</a></code> | <code>double</code> | ExpirationSeconds is the requested duration of validity of the request. |

---

##### `Audiences`<sup>Optional</sup> <a name="Audiences" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Spec.property.audiences"></a>

```csharp
public string[] Audiences { get; set; }
```

- *Type:* string[]

Audiences are the intendend audiences of the token.

A recipient of a token must identify themself with an identifier in the list of audiences of the token, and otherwise should reject the token. A token issued for multiple audiences may be used to authenticate against any of the audiences listed but implies a high degree of trust between the target audiences.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/token_request_v1#audiences EphemeralKubernetesTokenRequestV1#audiences}

---

##### `BoundObjectRef`<sup>Optional</sup> <a name="BoundObjectRef" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Spec.property.boundObjectRef"></a>

```csharp
public EphemeralKubernetesTokenRequestV1SpecBoundObjectRef BoundObjectRef { get; set; }
```

- *Type:* <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRef">EphemeralKubernetesTokenRequestV1SpecBoundObjectRef</a>

bound_object_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/token_request_v1#bound_object_ref EphemeralKubernetesTokenRequestV1#bound_object_ref}

---

##### `ExpirationSeconds`<sup>Optional</sup> <a name="ExpirationSeconds" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Spec.property.expirationSeconds"></a>

```csharp
public double ExpirationSeconds { get; set; }
```

- *Type:* double

ExpirationSeconds is the requested duration of validity of the request.

The token issuer may return a token with a different validity duration so a client needs to check the 'expiration' field in a response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/token_request_v1#expiration_seconds EphemeralKubernetesTokenRequestV1#expiration_seconds}

---

### EphemeralKubernetesTokenRequestV1SpecBoundObjectRef <a name="EphemeralKubernetesTokenRequestV1SpecBoundObjectRef" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRef"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRef.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

new EphemeralKubernetesTokenRequestV1SpecBoundObjectRef {
    string ApiVersion = null,
    string Kind = null,
    string Name = null,
    string Uid = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRef.property.apiVersion">ApiVersion</a></code> | <code>string</code> | API version of the referent. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRef.property.kind">Kind</a></code> | <code>string</code> | Kind of the referent. Valid kinds are 'Pod' and 'Secret'. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRef.property.name">Name</a></code> | <code>string</code> | Name of the referent. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRef.property.uid">Uid</a></code> | <code>string</code> | UID of the referent. |

---

##### `ApiVersion`<sup>Optional</sup> <a name="ApiVersion" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRef.property.apiVersion"></a>

```csharp
public string ApiVersion { get; set; }
```

- *Type:* string

API version of the referent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/token_request_v1#api_version EphemeralKubernetesTokenRequestV1#api_version}

---

##### `Kind`<sup>Optional</sup> <a name="Kind" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRef.property.kind"></a>

```csharp
public string Kind { get; set; }
```

- *Type:* string

Kind of the referent. Valid kinds are 'Pod' and 'Secret'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/token_request_v1#kind EphemeralKubernetesTokenRequestV1#kind}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRef.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the referent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/token_request_v1#name EphemeralKubernetesTokenRequestV1#name}

---

##### `Uid`<sup>Optional</sup> <a name="Uid" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRef.property.uid"></a>

```csharp
public string Uid { get; set; }
```

- *Type:* string

UID of the referent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/token_request_v1#uid EphemeralKubernetesTokenRequestV1#uid}

---

## Classes <a name="Classes" id="Classes"></a>

### EphemeralKubernetesTokenRequestV1MetadataOutputReference <a name="EphemeralKubernetesTokenRequestV1MetadataOutputReference" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

new EphemeralKubernetesTokenRequestV1MetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Metadata">EphemeralKubernetesTokenRequestV1Metadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EphemeralKubernetesTokenRequestV1Metadata InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Metadata">EphemeralKubernetesTokenRequestV1Metadata</a>

---


### EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference <a name="EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

new EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.resetApiVersion">ResetApiVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.resetKind">ResetKind</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.resetUid">ResetUid</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApiVersion` <a name="ResetApiVersion" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.resetApiVersion"></a>

```csharp
private void ResetApiVersion()
```

##### `ResetKind` <a name="ResetKind" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.resetKind"></a>

```csharp
private void ResetKind()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetUid` <a name="ResetUid" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.resetUid"></a>

```csharp
private void ResetUid()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.property.apiVersionInput">ApiVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.property.kindInput">KindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.property.uidInput">UidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.property.apiVersion">ApiVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRef">EphemeralKubernetesTokenRequestV1SpecBoundObjectRef</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiVersionInput`<sup>Optional</sup> <a name="ApiVersionInput" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.property.apiVersionInput"></a>

```csharp
public string ApiVersionInput { get; }
```

- *Type:* string

---

##### `KindInput`<sup>Optional</sup> <a name="KindInput" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.property.kindInput"></a>

```csharp
public string KindInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `UidInput`<sup>Optional</sup> <a name="UidInput" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.property.uidInput"></a>

```csharp
public string UidInput { get; }
```

- *Type:* string

---

##### `ApiVersion`<sup>Required</sup> <a name="ApiVersion" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.property.apiVersion"></a>

```csharp
public string ApiVersion { get; }
```

- *Type:* string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EphemeralKubernetesTokenRequestV1SpecBoundObjectRef InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRef">EphemeralKubernetesTokenRequestV1SpecBoundObjectRef</a>

---


### EphemeralKubernetesTokenRequestV1SpecOutputReference <a name="EphemeralKubernetesTokenRequestV1SpecOutputReference" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

new EphemeralKubernetesTokenRequestV1SpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.putBoundObjectRef">PutBoundObjectRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.resetAudiences">ResetAudiences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.resetBoundObjectRef">ResetBoundObjectRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.resetExpirationSeconds">ResetExpirationSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBoundObjectRef` <a name="PutBoundObjectRef" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.putBoundObjectRef"></a>

```csharp
private void PutBoundObjectRef(EphemeralKubernetesTokenRequestV1SpecBoundObjectRef Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.putBoundObjectRef.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRef">EphemeralKubernetesTokenRequestV1SpecBoundObjectRef</a>

---

##### `ResetAudiences` <a name="ResetAudiences" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.resetAudiences"></a>

```csharp
private void ResetAudiences()
```

##### `ResetBoundObjectRef` <a name="ResetBoundObjectRef" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.resetBoundObjectRef"></a>

```csharp
private void ResetBoundObjectRef()
```

##### `ResetExpirationSeconds` <a name="ResetExpirationSeconds" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.resetExpirationSeconds"></a>

```csharp
private void ResetExpirationSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.property.boundObjectRef">BoundObjectRef</a></code> | <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference">EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.property.audiencesInput">AudiencesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.property.boundObjectRefInput">BoundObjectRefInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRef">EphemeralKubernetesTokenRequestV1SpecBoundObjectRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.property.expirationSecondsInput">ExpirationSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.property.audiences">Audiences</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.property.expirationSeconds">ExpirationSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Spec">EphemeralKubernetesTokenRequestV1Spec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BoundObjectRef`<sup>Required</sup> <a name="BoundObjectRef" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.property.boundObjectRef"></a>

```csharp
public EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference BoundObjectRef { get; }
```

- *Type:* <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference">EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference</a>

---

##### `AudiencesInput`<sup>Optional</sup> <a name="AudiencesInput" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.property.audiencesInput"></a>

```csharp
public string[] AudiencesInput { get; }
```

- *Type:* string[]

---

##### `BoundObjectRefInput`<sup>Optional</sup> <a name="BoundObjectRefInput" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.property.boundObjectRefInput"></a>

```csharp
public IResolvable|EphemeralKubernetesTokenRequestV1SpecBoundObjectRef BoundObjectRefInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRef">EphemeralKubernetesTokenRequestV1SpecBoundObjectRef</a>

---

##### `ExpirationSecondsInput`<sup>Optional</sup> <a name="ExpirationSecondsInput" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.property.expirationSecondsInput"></a>

```csharp
public double ExpirationSecondsInput { get; }
```

- *Type:* double

---

##### `Audiences`<sup>Required</sup> <a name="Audiences" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.property.audiences"></a>

```csharp
public string[] Audiences { get; }
```

- *Type:* string[]

---

##### `ExpirationSeconds`<sup>Required</sup> <a name="ExpirationSeconds" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.property.expirationSeconds"></a>

```csharp
public double ExpirationSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EphemeralKubernetesTokenRequestV1Spec InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Spec">EphemeralKubernetesTokenRequestV1Spec</a>

---



