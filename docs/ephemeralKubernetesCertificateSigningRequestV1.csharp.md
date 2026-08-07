# `ephemeralKubernetesCertificateSigningRequestV1` Submodule <a name="`ephemeralKubernetesCertificateSigningRequestV1` Submodule" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralKubernetesCertificateSigningRequestV1 <a name="EphemeralKubernetesCertificateSigningRequestV1" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/certificate_signing_request_v1 kubernetes_certificate_signing_request_v1}.

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

new EphemeralKubernetesCertificateSigningRequestV1(Construct Scope, string Id, EphemeralKubernetesCertificateSigningRequestV1Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Config">EphemeralKubernetesCertificateSigningRequestV1Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Config">EphemeralKubernetesCertificateSigningRequestV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.toTerraform">ToTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.putMetadata">PutMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.putSpec">PutSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.resetAutoApprove">ResetAutoApprove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.resetCertificate">ResetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.resetSpec">ResetSpec</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this ephemeral resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutMetadata` <a name="PutMetadata" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.putMetadata"></a>

```csharp
private void PutMetadata(EphemeralKubernetesCertificateSigningRequestV1Metadata Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Metadata">EphemeralKubernetesCertificateSigningRequestV1Metadata</a>

---

##### `PutSpec` <a name="PutSpec" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.putSpec"></a>

```csharp
private void PutSpec(EphemeralKubernetesCertificateSigningRequestV1Spec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Spec">EphemeralKubernetesCertificateSigningRequestV1Spec</a>

---

##### `ResetAutoApprove` <a name="ResetAutoApprove" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.resetAutoApprove"></a>

```csharp
private void ResetAutoApprove()
```

##### `ResetCertificate` <a name="ResetCertificate" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.resetCertificate"></a>

```csharp
private void ResetCertificate()
```

##### `ResetSpec` <a name="ResetSpec" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.resetSpec"></a>

```csharp
private void ResetSpec()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.isTerraformEphemeralResource">IsTerraformEphemeralResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

EphemeralKubernetesCertificateSigningRequestV1.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

EphemeralKubernetesCertificateSigningRequestV1.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformEphemeralResource` <a name="IsTerraformEphemeralResource" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.isTerraformEphemeralResource"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

EphemeralKubernetesCertificateSigningRequestV1.IsTerraformEphemeralResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.metadata">Metadata</a></code> | <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference">EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.spec">Spec</a></code> | <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference">EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.autoApproveInput">AutoApproveInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.certificateInput">CertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.metadataInput">MetadataInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Metadata">EphemeralKubernetesCertificateSigningRequestV1Metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.specInput">SpecInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Spec">EphemeralKubernetesCertificateSigningRequestV1Spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.autoApprove">AutoApprove</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.certificate">Certificate</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.lifecycle"></a>

```csharp
public TerraformEphemeralResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.metadata"></a>

```csharp
public EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference Metadata { get; }
```

- *Type:* <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference">EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference</a>

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.spec"></a>

```csharp
public EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference Spec { get; }
```

- *Type:* <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference">EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference</a>

---

##### `AutoApproveInput`<sup>Optional</sup> <a name="AutoApproveInput" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.autoApproveInput"></a>

```csharp
public bool|IResolvable AutoApproveInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.certificateInput"></a>

```csharp
public string CertificateInput { get; }
```

- *Type:* string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.metadataInput"></a>

```csharp
public IResolvable|EphemeralKubernetesCertificateSigningRequestV1Metadata MetadataInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Metadata">EphemeralKubernetesCertificateSigningRequestV1Metadata</a>

---

##### `SpecInput`<sup>Optional</sup> <a name="SpecInput" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.specInput"></a>

```csharp
public IResolvable|EphemeralKubernetesCertificateSigningRequestV1Spec SpecInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Spec">EphemeralKubernetesCertificateSigningRequestV1Spec</a>

---

##### `AutoApprove`<sup>Required</sup> <a name="AutoApprove" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.autoApprove"></a>

```csharp
public bool|IResolvable AutoApprove { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.certificate"></a>

```csharp
public string Certificate { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralKubernetesCertificateSigningRequestV1Config <a name="EphemeralKubernetesCertificateSigningRequestV1Config" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Config.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

new EphemeralKubernetesCertificateSigningRequestV1Config {
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformEphemeralResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    EphemeralKubernetesCertificateSigningRequestV1Metadata Metadata,
    bool|IResolvable AutoApprove = null,
    string Certificate = null,
    EphemeralKubernetesCertificateSigningRequestV1Spec Spec = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Config.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Config.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Config.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Config.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Config.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Config.property.metadata">Metadata</a></code> | <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Metadata">EphemeralKubernetesCertificateSigningRequestV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Config.property.autoApprove">AutoApprove</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Automatically approve the Certificate Signing Request. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Config.property.certificate">Certificate</a></code> | <code>string</code> | certificate is populated with an issued certificate by the signer after an Approved condition is present. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Config.property.spec">Spec</a></code> | <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Spec">EphemeralKubernetesCertificateSigningRequestV1Spec</a></code> | spec block. |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Config.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Config.property.lifecycle"></a>

```csharp
public TerraformEphemeralResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Config.property.metadata"></a>

```csharp
public EphemeralKubernetesCertificateSigningRequestV1Metadata Metadata { get; set; }
```

- *Type:* <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Metadata">EphemeralKubernetesCertificateSigningRequestV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/certificate_signing_request_v1#metadata EphemeralKubernetesCertificateSigningRequestV1#metadata}

---

##### `AutoApprove`<sup>Optional</sup> <a name="AutoApprove" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Config.property.autoApprove"></a>

```csharp
public bool|IResolvable AutoApprove { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Automatically approve the Certificate Signing Request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/certificate_signing_request_v1#auto_approve EphemeralKubernetesCertificateSigningRequestV1#auto_approve}

---

##### `Certificate`<sup>Optional</sup> <a name="Certificate" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Config.property.certificate"></a>

```csharp
public string Certificate { get; set; }
```

- *Type:* string

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

##### `Spec`<sup>Optional</sup> <a name="Spec" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Config.property.spec"></a>

```csharp
public EphemeralKubernetesCertificateSigningRequestV1Spec Spec { get; set; }
```

- *Type:* <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Spec">EphemeralKubernetesCertificateSigningRequestV1Spec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/certificate_signing_request_v1#spec EphemeralKubernetesCertificateSigningRequestV1#spec}

---

### EphemeralKubernetesCertificateSigningRequestV1Metadata <a name="EphemeralKubernetesCertificateSigningRequestV1Metadata" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Metadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Metadata.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

new EphemeralKubernetesCertificateSigningRequestV1Metadata {
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Metadata.property.name">Name</a></code> | <code>string</code> | Name must be unique within a namespace. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Metadata.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name must be unique within a namespace.

Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/certificate_signing_request_v1#name EphemeralKubernetesCertificateSigningRequestV1#name}

---

### EphemeralKubernetesCertificateSigningRequestV1Spec <a name="EphemeralKubernetesCertificateSigningRequestV1Spec" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Spec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Spec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

new EphemeralKubernetesCertificateSigningRequestV1Spec {
    string Request,
    string SignerName,
    double ExpirationSeconds = null,
    string[] Usages = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Spec.property.request">Request</a></code> | <code>string</code> | request contains an x509 certificate signing request encoded in a "CERTIFICATE REQUEST" PEM block. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Spec.property.signerName">SignerName</a></code> | <code>string</code> | signerName indicates the requested signer, and is a qualified name. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Spec.property.expirationSeconds">ExpirationSeconds</a></code> | <code>double</code> | expirationSeconds is the requested duration of validity of the issued certificate. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Spec.property.usages">Usages</a></code> | <code>string[]</code> | usages specifies a set of key usages requested in the issued certificate. |

---

##### `Request`<sup>Required</sup> <a name="Request" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Spec.property.request"></a>

```csharp
public string Request { get; set; }
```

- *Type:* string

request contains an x509 certificate signing request encoded in a "CERTIFICATE REQUEST" PEM block.

When serialized as JSON or YAML, the data is additionally base64-encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/certificate_signing_request_v1#request EphemeralKubernetesCertificateSigningRequestV1#request}

---

##### `SignerName`<sup>Required</sup> <a name="SignerName" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Spec.property.signerName"></a>

```csharp
public string SignerName { get; set; }
```

- *Type:* string

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

##### `ExpirationSeconds`<sup>Optional</sup> <a name="ExpirationSeconds" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Spec.property.expirationSeconds"></a>

```csharp
public double ExpirationSeconds { get; set; }
```

- *Type:* double

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

##### `Usages`<sup>Optional</sup> <a name="Usages" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Spec.property.usages"></a>

```csharp
public string[] Usages { get; set; }
```

- *Type:* string[]

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

```csharp
using Io.Cdktn.Providers.Kubernetes;

new EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Metadata">EphemeralKubernetesCertificateSigningRequestV1Metadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EphemeralKubernetesCertificateSigningRequestV1Metadata InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Metadata">EphemeralKubernetesCertificateSigningRequestV1Metadata</a>

---


### EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference <a name="EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Kubernetes;

new EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.resetExpirationSeconds">ResetExpirationSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.resetUsages">ResetUsages</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExpirationSeconds` <a name="ResetExpirationSeconds" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.resetExpirationSeconds"></a>

```csharp
private void ResetExpirationSeconds()
```

##### `ResetUsages` <a name="ResetUsages" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.resetUsages"></a>

```csharp
private void ResetUsages()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.property.expirationSecondsInput">ExpirationSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.property.requestInput">RequestInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.property.signerNameInput">SignerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.property.usagesInput">UsagesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.property.expirationSeconds">ExpirationSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.property.request">Request</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.property.signerName">SignerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.property.usages">Usages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Spec">EphemeralKubernetesCertificateSigningRequestV1Spec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExpirationSecondsInput`<sup>Optional</sup> <a name="ExpirationSecondsInput" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.property.expirationSecondsInput"></a>

```csharp
public double ExpirationSecondsInput { get; }
```

- *Type:* double

---

##### `RequestInput`<sup>Optional</sup> <a name="RequestInput" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.property.requestInput"></a>

```csharp
public string RequestInput { get; }
```

- *Type:* string

---

##### `SignerNameInput`<sup>Optional</sup> <a name="SignerNameInput" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.property.signerNameInput"></a>

```csharp
public string SignerNameInput { get; }
```

- *Type:* string

---

##### `UsagesInput`<sup>Optional</sup> <a name="UsagesInput" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.property.usagesInput"></a>

```csharp
public string[] UsagesInput { get; }
```

- *Type:* string[]

---

##### `ExpirationSeconds`<sup>Required</sup> <a name="ExpirationSeconds" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.property.expirationSeconds"></a>

```csharp
public double ExpirationSeconds { get; }
```

- *Type:* double

---

##### `Request`<sup>Required</sup> <a name="Request" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.property.request"></a>

```csharp
public string Request { get; }
```

- *Type:* string

---

##### `SignerName`<sup>Required</sup> <a name="SignerName" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.property.signerName"></a>

```csharp
public string SignerName { get; }
```

- *Type:* string

---

##### `Usages`<sup>Required</sup> <a name="Usages" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.property.usages"></a>

```csharp
public string[] Usages { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EphemeralKubernetesCertificateSigningRequestV1Spec InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Spec">EphemeralKubernetesCertificateSigningRequestV1Spec</a>

---



