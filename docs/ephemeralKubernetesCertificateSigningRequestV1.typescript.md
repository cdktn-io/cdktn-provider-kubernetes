# `ephemeralKubernetesCertificateSigningRequestV1` Submodule <a name="`ephemeralKubernetesCertificateSigningRequestV1` Submodule" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralKubernetesCertificateSigningRequestV1 <a name="EphemeralKubernetesCertificateSigningRequestV1" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/certificate_signing_request_v1 kubernetes_certificate_signing_request_v1}.

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.Initializer"></a>

```typescript
import { ephemeralKubernetesCertificateSigningRequestV1 } from '@cdktn/provider-kubernetes'

new ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1(scope: Construct, id: string, config: EphemeralKubernetesCertificateSigningRequestV1Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Config">EphemeralKubernetesCertificateSigningRequestV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Config">EphemeralKubernetesCertificateSigningRequestV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.toTerraform">toTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.putMetadata">putMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.putSpec">putSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.resetAutoApprove">resetAutoApprove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.resetCertificate">resetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.resetSpec">resetSpec</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this ephemeral resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putMetadata` <a name="putMetadata" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.putMetadata"></a>

```typescript
public putMetadata(value: EphemeralKubernetesCertificateSigningRequestV1Metadata): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Metadata">EphemeralKubernetesCertificateSigningRequestV1Metadata</a>

---

##### `putSpec` <a name="putSpec" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.putSpec"></a>

```typescript
public putSpec(value: EphemeralKubernetesCertificateSigningRequestV1Spec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Spec">EphemeralKubernetesCertificateSigningRequestV1Spec</a>

---

##### `resetAutoApprove` <a name="resetAutoApprove" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.resetAutoApprove"></a>

```typescript
public resetAutoApprove(): void
```

##### `resetCertificate` <a name="resetCertificate" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.resetCertificate"></a>

```typescript
public resetCertificate(): void
```

##### `resetSpec` <a name="resetSpec" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.resetSpec"></a>

```typescript
public resetSpec(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.isTerraformEphemeralResource">isTerraformEphemeralResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.isConstruct"></a>

```typescript
import { ephemeralKubernetesCertificateSigningRequestV1 } from '@cdktn/provider-kubernetes'

ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.isTerraformElement"></a>

```typescript
import { ephemeralKubernetesCertificateSigningRequestV1 } from '@cdktn/provider-kubernetes'

ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformEphemeralResource` <a name="isTerraformEphemeralResource" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.isTerraformEphemeralResource"></a>

```typescript
import { ephemeralKubernetesCertificateSigningRequestV1 } from '@cdktn/provider-kubernetes'

ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.isTerraformEphemeralResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.metadata">metadata</a></code> | <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference">EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.spec">spec</a></code> | <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference">EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.autoApproveInput">autoApproveInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.certificateInput">certificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.metadataInput">metadataInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Metadata">EphemeralKubernetesCertificateSigningRequestV1Metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.specInput">specInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Spec">EphemeralKubernetesCertificateSigningRequestV1Spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.autoApprove">autoApprove</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.certificate">certificate</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformEphemeralResourceLifecycle;
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.metadata"></a>

```typescript
public readonly metadata: EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference;
```

- *Type:* <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference">EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference</a>

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.spec"></a>

```typescript
public readonly spec: EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference">EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference</a>

---

##### `autoApproveInput`<sup>Optional</sup> <a name="autoApproveInput" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.autoApproveInput"></a>

```typescript
public readonly autoApproveInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.certificateInput"></a>

```typescript
public readonly certificateInput: string;
```

- *Type:* string

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.metadataInput"></a>

```typescript
public readonly metadataInput: IResolvable | EphemeralKubernetesCertificateSigningRequestV1Metadata;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Metadata">EphemeralKubernetesCertificateSigningRequestV1Metadata</a>

---

##### `specInput`<sup>Optional</sup> <a name="specInput" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.specInput"></a>

```typescript
public readonly specInput: IResolvable | EphemeralKubernetesCertificateSigningRequestV1Spec;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Spec">EphemeralKubernetesCertificateSigningRequestV1Spec</a>

---

##### `autoApprove`<sup>Required</sup> <a name="autoApprove" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.autoApprove"></a>

```typescript
public readonly autoApprove: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralKubernetesCertificateSigningRequestV1Config <a name="EphemeralKubernetesCertificateSigningRequestV1Config" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Config.Initializer"></a>

```typescript
import { ephemeralKubernetesCertificateSigningRequestV1 } from '@cdktn/provider-kubernetes'

const ephemeralKubernetesCertificateSigningRequestV1Config: ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Config.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Config.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Config.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Config.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Config.property.metadata">metadata</a></code> | <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Metadata">EphemeralKubernetesCertificateSigningRequestV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Config.property.autoApprove">autoApprove</a></code> | <code>boolean \| cdktn.IResolvable</code> | Automatically approve the Certificate Signing Request. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Config.property.certificate">certificate</a></code> | <code>string</code> | certificate is populated with an issued certificate by the signer after an Approved condition is present. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Config.property.spec">spec</a></code> | <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Spec">EphemeralKubernetesCertificateSigningRequestV1Spec</a></code> | spec block. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformEphemeralResourceLifecycle;
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Config.property.metadata"></a>

```typescript
public readonly metadata: EphemeralKubernetesCertificateSigningRequestV1Metadata;
```

- *Type:* <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Metadata">EphemeralKubernetesCertificateSigningRequestV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/certificate_signing_request_v1#metadata EphemeralKubernetesCertificateSigningRequestV1#metadata}

---

##### `autoApprove`<sup>Optional</sup> <a name="autoApprove" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Config.property.autoApprove"></a>

```typescript
public readonly autoApprove: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Automatically approve the Certificate Signing Request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/certificate_signing_request_v1#auto_approve EphemeralKubernetesCertificateSigningRequestV1#auto_approve}

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Config.property.certificate"></a>

```typescript
public readonly certificate: string;
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

    base64(

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/certificate_signing_request_v1#certificate EphemeralKubernetesCertificateSigningRequestV1#certificate}

---

##### `spec`<sup>Optional</sup> <a name="spec" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Config.property.spec"></a>

```typescript
public readonly spec: EphemeralKubernetesCertificateSigningRequestV1Spec;
```

- *Type:* <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Spec">EphemeralKubernetesCertificateSigningRequestV1Spec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/certificate_signing_request_v1#spec EphemeralKubernetesCertificateSigningRequestV1#spec}

---

### EphemeralKubernetesCertificateSigningRequestV1Metadata <a name="EphemeralKubernetesCertificateSigningRequestV1Metadata" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Metadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Metadata.Initializer"></a>

```typescript
import { ephemeralKubernetesCertificateSigningRequestV1 } from '@cdktn/provider-kubernetes'

const ephemeralKubernetesCertificateSigningRequestV1Metadata: ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Metadata = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Metadata.property.name">name</a></code> | <code>string</code> | Name must be unique within a namespace. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Metadata.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name must be unique within a namespace.

Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/certificate_signing_request_v1#name EphemeralKubernetesCertificateSigningRequestV1#name}

---

### EphemeralKubernetesCertificateSigningRequestV1Spec <a name="EphemeralKubernetesCertificateSigningRequestV1Spec" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Spec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Spec.Initializer"></a>

```typescript
import { ephemeralKubernetesCertificateSigningRequestV1 } from '@cdktn/provider-kubernetes'

const ephemeralKubernetesCertificateSigningRequestV1Spec: ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Spec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Spec.property.request">request</a></code> | <code>string</code> | request contains an x509 certificate signing request encoded in a "CERTIFICATE REQUEST" PEM block. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Spec.property.signerName">signerName</a></code> | <code>string</code> | signerName indicates the requested signer, and is a qualified name. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Spec.property.expirationSeconds">expirationSeconds</a></code> | <code>number</code> | expirationSeconds is the requested duration of validity of the issued certificate. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Spec.property.usages">usages</a></code> | <code>string[]</code> | usages specifies a set of key usages requested in the issued certificate. |

---

##### `request`<sup>Required</sup> <a name="request" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Spec.property.request"></a>

```typescript
public readonly request: string;
```

- *Type:* string

request contains an x509 certificate signing request encoded in a "CERTIFICATE REQUEST" PEM block.

When serialized as JSON or YAML, the data is additionally base64-encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/certificate_signing_request_v1#request EphemeralKubernetesCertificateSigningRequestV1#request}

---

##### `signerName`<sup>Required</sup> <a name="signerName" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Spec.property.signerName"></a>

```typescript
public readonly signerName: string;
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

##### `expirationSeconds`<sup>Optional</sup> <a name="expirationSeconds" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Spec.property.expirationSeconds"></a>

```typescript
public readonly expirationSeconds: number;
```

- *Type:* number

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

```typescript
public readonly usages: string[];
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

```typescript
import { ephemeralKubernetesCertificateSigningRequestV1 } from '@cdktn/provider-kubernetes'

new ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Metadata">EphemeralKubernetesCertificateSigningRequestV1Metadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1MetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EphemeralKubernetesCertificateSigningRequestV1Metadata;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Metadata">EphemeralKubernetesCertificateSigningRequestV1Metadata</a>

---


### EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference <a name="EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.Initializer"></a>

```typescript
import { ephemeralKubernetesCertificateSigningRequestV1 } from '@cdktn/provider-kubernetes'

new ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.resetExpirationSeconds">resetExpirationSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.resetUsages">resetUsages</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExpirationSeconds` <a name="resetExpirationSeconds" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.resetExpirationSeconds"></a>

```typescript
public resetExpirationSeconds(): void
```

##### `resetUsages` <a name="resetUsages" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.resetUsages"></a>

```typescript
public resetUsages(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.property.expirationSecondsInput">expirationSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.property.requestInput">requestInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.property.signerNameInput">signerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.property.usagesInput">usagesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.property.expirationSeconds">expirationSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.property.request">request</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.property.signerName">signerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.property.usages">usages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Spec">EphemeralKubernetesCertificateSigningRequestV1Spec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expirationSecondsInput`<sup>Optional</sup> <a name="expirationSecondsInput" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.property.expirationSecondsInput"></a>

```typescript
public readonly expirationSecondsInput: number;
```

- *Type:* number

---

##### `requestInput`<sup>Optional</sup> <a name="requestInput" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.property.requestInput"></a>

```typescript
public readonly requestInput: string;
```

- *Type:* string

---

##### `signerNameInput`<sup>Optional</sup> <a name="signerNameInput" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.property.signerNameInput"></a>

```typescript
public readonly signerNameInput: string;
```

- *Type:* string

---

##### `usagesInput`<sup>Optional</sup> <a name="usagesInput" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.property.usagesInput"></a>

```typescript
public readonly usagesInput: string[];
```

- *Type:* string[]

---

##### `expirationSeconds`<sup>Required</sup> <a name="expirationSeconds" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.property.expirationSeconds"></a>

```typescript
public readonly expirationSeconds: number;
```

- *Type:* number

---

##### `request`<sup>Required</sup> <a name="request" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.property.request"></a>

```typescript
public readonly request: string;
```

- *Type:* string

---

##### `signerName`<sup>Required</sup> <a name="signerName" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.property.signerName"></a>

```typescript
public readonly signerName: string;
```

- *Type:* string

---

##### `usages`<sup>Required</sup> <a name="usages" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.property.usages"></a>

```typescript
public readonly usages: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1SpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EphemeralKubernetesCertificateSigningRequestV1Spec;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesCertificateSigningRequestV1.EphemeralKubernetesCertificateSigningRequestV1Spec">EphemeralKubernetesCertificateSigningRequestV1Spec</a>

---



