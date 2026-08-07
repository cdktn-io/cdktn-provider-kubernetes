# `ephemeralKubernetesTokenRequestV1` Submodule <a name="`ephemeralKubernetesTokenRequestV1` Submodule" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralKubernetesTokenRequestV1 <a name="EphemeralKubernetesTokenRequestV1" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/token_request_v1 kubernetes_token_request_v1}.

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.Initializer"></a>

```typescript
import { ephemeralKubernetesTokenRequestV1 } from '@cdktn/provider-kubernetes'

new ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1(scope: Construct, id: string, config: EphemeralKubernetesTokenRequestV1Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Config">EphemeralKubernetesTokenRequestV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Config">EphemeralKubernetesTokenRequestV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.toTerraform">toTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.putMetadata">putMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.putSpec">putSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.resetExpirationTimestamp">resetExpirationTimestamp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.resetSpec">resetSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.resetToken">resetToken</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this ephemeral resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putMetadata` <a name="putMetadata" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.putMetadata"></a>

```typescript
public putMetadata(value: EphemeralKubernetesTokenRequestV1Metadata): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Metadata">EphemeralKubernetesTokenRequestV1Metadata</a>

---

##### `putSpec` <a name="putSpec" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.putSpec"></a>

```typescript
public putSpec(value: EphemeralKubernetesTokenRequestV1Spec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Spec">EphemeralKubernetesTokenRequestV1Spec</a>

---

##### `resetExpirationTimestamp` <a name="resetExpirationTimestamp" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.resetExpirationTimestamp"></a>

```typescript
public resetExpirationTimestamp(): void
```

##### `resetSpec` <a name="resetSpec" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.resetSpec"></a>

```typescript
public resetSpec(): void
```

##### `resetToken` <a name="resetToken" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.resetToken"></a>

```typescript
public resetToken(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.isTerraformEphemeralResource">isTerraformEphemeralResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.isConstruct"></a>

```typescript
import { ephemeralKubernetesTokenRequestV1 } from '@cdktn/provider-kubernetes'

ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.isTerraformElement"></a>

```typescript
import { ephemeralKubernetesTokenRequestV1 } from '@cdktn/provider-kubernetes'

ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformEphemeralResource` <a name="isTerraformEphemeralResource" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.isTerraformEphemeralResource"></a>

```typescript
import { ephemeralKubernetesTokenRequestV1 } from '@cdktn/provider-kubernetes'

ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.isTerraformEphemeralResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.metadata">metadata</a></code> | <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference">EphemeralKubernetesTokenRequestV1MetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.spec">spec</a></code> | <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference">EphemeralKubernetesTokenRequestV1SpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.expirationTimestampInput">expirationTimestampInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.metadataInput">metadataInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Metadata">EphemeralKubernetesTokenRequestV1Metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.specInput">specInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Spec">EphemeralKubernetesTokenRequestV1Spec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.tokenInput">tokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.expirationTimestamp">expirationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.token">token</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformEphemeralResourceLifecycle;
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.metadata"></a>

```typescript
public readonly metadata: EphemeralKubernetesTokenRequestV1MetadataOutputReference;
```

- *Type:* <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference">EphemeralKubernetesTokenRequestV1MetadataOutputReference</a>

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.spec"></a>

```typescript
public readonly spec: EphemeralKubernetesTokenRequestV1SpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference">EphemeralKubernetesTokenRequestV1SpecOutputReference</a>

---

##### `expirationTimestampInput`<sup>Optional</sup> <a name="expirationTimestampInput" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.expirationTimestampInput"></a>

```typescript
public readonly expirationTimestampInput: string;
```

- *Type:* string

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.metadataInput"></a>

```typescript
public readonly metadataInput: IResolvable | EphemeralKubernetesTokenRequestV1Metadata;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Metadata">EphemeralKubernetesTokenRequestV1Metadata</a>

---

##### `specInput`<sup>Optional</sup> <a name="specInput" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.specInput"></a>

```typescript
public readonly specInput: IResolvable | EphemeralKubernetesTokenRequestV1Spec;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Spec">EphemeralKubernetesTokenRequestV1Spec</a>

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.tokenInput"></a>

```typescript
public readonly tokenInput: string;
```

- *Type:* string

---

##### `expirationTimestamp`<sup>Required</sup> <a name="expirationTimestamp" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.expirationTimestamp"></a>

```typescript
public readonly expirationTimestamp: string;
```

- *Type:* string

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralKubernetesTokenRequestV1Config <a name="EphemeralKubernetesTokenRequestV1Config" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Config.Initializer"></a>

```typescript
import { ephemeralKubernetesTokenRequestV1 } from '@cdktn/provider-kubernetes'

const ephemeralKubernetesTokenRequestV1Config: ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Config.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Config.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Config.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Config.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Config.property.metadata">metadata</a></code> | <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Metadata">EphemeralKubernetesTokenRequestV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Config.property.expirationTimestamp">expirationTimestamp</a></code> | <code>string</code> | ExpirationTimestamp is the time of expiration of the returned token. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Config.property.spec">spec</a></code> | <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Spec">EphemeralKubernetesTokenRequestV1Spec</a></code> | spec block. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Config.property.token">token</a></code> | <code>string</code> | Token is the opaque bearer token. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformEphemeralResourceLifecycle;
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Config.property.metadata"></a>

```typescript
public readonly metadata: EphemeralKubernetesTokenRequestV1Metadata;
```

- *Type:* <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Metadata">EphemeralKubernetesTokenRequestV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/token_request_v1#metadata EphemeralKubernetesTokenRequestV1#metadata}

---

##### `expirationTimestamp`<sup>Optional</sup> <a name="expirationTimestamp" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Config.property.expirationTimestamp"></a>

```typescript
public readonly expirationTimestamp: string;
```

- *Type:* string

ExpirationTimestamp is the time of expiration of the returned token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/token_request_v1#expiration_timestamp EphemeralKubernetesTokenRequestV1#expiration_timestamp}

---

##### `spec`<sup>Optional</sup> <a name="spec" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Config.property.spec"></a>

```typescript
public readonly spec: EphemeralKubernetesTokenRequestV1Spec;
```

- *Type:* <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Spec">EphemeralKubernetesTokenRequestV1Spec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/token_request_v1#spec EphemeralKubernetesTokenRequestV1#spec}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Config.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

Token is the opaque bearer token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/token_request_v1#token EphemeralKubernetesTokenRequestV1#token}

---

### EphemeralKubernetesTokenRequestV1Metadata <a name="EphemeralKubernetesTokenRequestV1Metadata" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Metadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Metadata.Initializer"></a>

```typescript
import { ephemeralKubernetesTokenRequestV1 } from '@cdktn/provider-kubernetes'

const ephemeralKubernetesTokenRequestV1Metadata: ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Metadata = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Metadata.property.name">name</a></code> | <code>string</code> | Name must be unique within a namespace. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Metadata.property.namespace">namespace</a></code> | <code>string</code> | Namespace defines the space within which each name must be unique. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Metadata.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name must be unique within a namespace.

Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/token_request_v1#name EphemeralKubernetesTokenRequestV1#name}

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Metadata.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Namespace defines the space within which each name must be unique.

An empty namespace is equivalent to the "default" namespace, but "default" is the canonical representation. Not all objects are required to be scoped to a namespace - the value of this field for those objects will be empty.

Must be a DNS_LABEL. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/token_request_v1#namespace EphemeralKubernetesTokenRequestV1#namespace}

---

### EphemeralKubernetesTokenRequestV1Spec <a name="EphemeralKubernetesTokenRequestV1Spec" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Spec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Spec.Initializer"></a>

```typescript
import { ephemeralKubernetesTokenRequestV1 } from '@cdktn/provider-kubernetes'

const ephemeralKubernetesTokenRequestV1Spec: ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Spec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Spec.property.audiences">audiences</a></code> | <code>string[]</code> | Audiences are the intendend audiences of the token. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Spec.property.boundObjectRef">boundObjectRef</a></code> | <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRef">EphemeralKubernetesTokenRequestV1SpecBoundObjectRef</a></code> | bound_object_ref block. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Spec.property.expirationSeconds">expirationSeconds</a></code> | <code>number</code> | ExpirationSeconds is the requested duration of validity of the request. |

---

##### `audiences`<sup>Optional</sup> <a name="audiences" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Spec.property.audiences"></a>

```typescript
public readonly audiences: string[];
```

- *Type:* string[]

Audiences are the intendend audiences of the token.

A recipient of a token must identify themself with an identifier in the list of audiences of the token, and otherwise should reject the token. A token issued for multiple audiences may be used to authenticate against any of the audiences listed but implies a high degree of trust between the target audiences.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/token_request_v1#audiences EphemeralKubernetesTokenRequestV1#audiences}

---

##### `boundObjectRef`<sup>Optional</sup> <a name="boundObjectRef" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Spec.property.boundObjectRef"></a>

```typescript
public readonly boundObjectRef: EphemeralKubernetesTokenRequestV1SpecBoundObjectRef;
```

- *Type:* <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRef">EphemeralKubernetesTokenRequestV1SpecBoundObjectRef</a>

bound_object_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/token_request_v1#bound_object_ref EphemeralKubernetesTokenRequestV1#bound_object_ref}

---

##### `expirationSeconds`<sup>Optional</sup> <a name="expirationSeconds" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Spec.property.expirationSeconds"></a>

```typescript
public readonly expirationSeconds: number;
```

- *Type:* number

ExpirationSeconds is the requested duration of validity of the request.

The token issuer may return a token with a different validity duration so a client needs to check the 'expiration' field in a response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/token_request_v1#expiration_seconds EphemeralKubernetesTokenRequestV1#expiration_seconds}

---

### EphemeralKubernetesTokenRequestV1SpecBoundObjectRef <a name="EphemeralKubernetesTokenRequestV1SpecBoundObjectRef" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRef"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRef.Initializer"></a>

```typescript
import { ephemeralKubernetesTokenRequestV1 } from '@cdktn/provider-kubernetes'

const ephemeralKubernetesTokenRequestV1SpecBoundObjectRef: ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRef = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRef.property.apiVersion">apiVersion</a></code> | <code>string</code> | API version of the referent. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRef.property.kind">kind</a></code> | <code>string</code> | Kind of the referent. Valid kinds are 'Pod' and 'Secret'. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRef.property.name">name</a></code> | <code>string</code> | Name of the referent. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRef.property.uid">uid</a></code> | <code>string</code> | UID of the referent. |

---

##### `apiVersion`<sup>Optional</sup> <a name="apiVersion" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRef.property.apiVersion"></a>

```typescript
public readonly apiVersion: string;
```

- *Type:* string

API version of the referent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/token_request_v1#api_version EphemeralKubernetesTokenRequestV1#api_version}

---

##### `kind`<sup>Optional</sup> <a name="kind" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRef.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

Kind of the referent. Valid kinds are 'Pod' and 'Secret'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/token_request_v1#kind EphemeralKubernetesTokenRequestV1#kind}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRef.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the referent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/token_request_v1#name EphemeralKubernetesTokenRequestV1#name}

---

##### `uid`<sup>Optional</sup> <a name="uid" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRef.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

UID of the referent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.1/docs/ephemeral-resources/token_request_v1#uid EphemeralKubernetesTokenRequestV1#uid}

---

## Classes <a name="Classes" id="Classes"></a>

### EphemeralKubernetesTokenRequestV1MetadataOutputReference <a name="EphemeralKubernetesTokenRequestV1MetadataOutputReference" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.Initializer"></a>

```typescript
import { ephemeralKubernetesTokenRequestV1 } from '@cdktn/provider-kubernetes'

new ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Metadata">EphemeralKubernetesTokenRequestV1Metadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1MetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EphemeralKubernetesTokenRequestV1Metadata;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Metadata">EphemeralKubernetesTokenRequestV1Metadata</a>

---


### EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference <a name="EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.Initializer"></a>

```typescript
import { ephemeralKubernetesTokenRequestV1 } from '@cdktn/provider-kubernetes'

new ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.resetApiVersion">resetApiVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.resetKind">resetKind</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.resetUid">resetUid</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApiVersion` <a name="resetApiVersion" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.resetApiVersion"></a>

```typescript
public resetApiVersion(): void
```

##### `resetKind` <a name="resetKind" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.resetKind"></a>

```typescript
public resetKind(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetUid` <a name="resetUid" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.resetUid"></a>

```typescript
public resetUid(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.property.apiVersionInput">apiVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.property.kindInput">kindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.property.uidInput">uidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.property.apiVersion">apiVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRef">EphemeralKubernetesTokenRequestV1SpecBoundObjectRef</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiVersionInput`<sup>Optional</sup> <a name="apiVersionInput" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.property.apiVersionInput"></a>

```typescript
public readonly apiVersionInput: string;
```

- *Type:* string

---

##### `kindInput`<sup>Optional</sup> <a name="kindInput" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.property.kindInput"></a>

```typescript
public readonly kindInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `uidInput`<sup>Optional</sup> <a name="uidInput" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.property.uidInput"></a>

```typescript
public readonly uidInput: string;
```

- *Type:* string

---

##### `apiVersion`<sup>Required</sup> <a name="apiVersion" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.property.apiVersion"></a>

```typescript
public readonly apiVersion: string;
```

- *Type:* string

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EphemeralKubernetesTokenRequestV1SpecBoundObjectRef;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRef">EphemeralKubernetesTokenRequestV1SpecBoundObjectRef</a>

---


### EphemeralKubernetesTokenRequestV1SpecOutputReference <a name="EphemeralKubernetesTokenRequestV1SpecOutputReference" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.Initializer"></a>

```typescript
import { ephemeralKubernetesTokenRequestV1 } from '@cdktn/provider-kubernetes'

new ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.putBoundObjectRef">putBoundObjectRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.resetAudiences">resetAudiences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.resetBoundObjectRef">resetBoundObjectRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.resetExpirationSeconds">resetExpirationSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBoundObjectRef` <a name="putBoundObjectRef" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.putBoundObjectRef"></a>

```typescript
public putBoundObjectRef(value: EphemeralKubernetesTokenRequestV1SpecBoundObjectRef): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.putBoundObjectRef.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRef">EphemeralKubernetesTokenRequestV1SpecBoundObjectRef</a>

---

##### `resetAudiences` <a name="resetAudiences" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.resetAudiences"></a>

```typescript
public resetAudiences(): void
```

##### `resetBoundObjectRef` <a name="resetBoundObjectRef" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.resetBoundObjectRef"></a>

```typescript
public resetBoundObjectRef(): void
```

##### `resetExpirationSeconds` <a name="resetExpirationSeconds" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.resetExpirationSeconds"></a>

```typescript
public resetExpirationSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.property.boundObjectRef">boundObjectRef</a></code> | <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference">EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.property.audiencesInput">audiencesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.property.boundObjectRefInput">boundObjectRefInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRef">EphemeralKubernetesTokenRequestV1SpecBoundObjectRef</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.property.expirationSecondsInput">expirationSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.property.audiences">audiences</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.property.expirationSeconds">expirationSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Spec">EphemeralKubernetesTokenRequestV1Spec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `boundObjectRef`<sup>Required</sup> <a name="boundObjectRef" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.property.boundObjectRef"></a>

```typescript
public readonly boundObjectRef: EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference;
```

- *Type:* <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference">EphemeralKubernetesTokenRequestV1SpecBoundObjectRefOutputReference</a>

---

##### `audiencesInput`<sup>Optional</sup> <a name="audiencesInput" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.property.audiencesInput"></a>

```typescript
public readonly audiencesInput: string[];
```

- *Type:* string[]

---

##### `boundObjectRefInput`<sup>Optional</sup> <a name="boundObjectRefInput" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.property.boundObjectRefInput"></a>

```typescript
public readonly boundObjectRefInput: IResolvable | EphemeralKubernetesTokenRequestV1SpecBoundObjectRef;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecBoundObjectRef">EphemeralKubernetesTokenRequestV1SpecBoundObjectRef</a>

---

##### `expirationSecondsInput`<sup>Optional</sup> <a name="expirationSecondsInput" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.property.expirationSecondsInput"></a>

```typescript
public readonly expirationSecondsInput: number;
```

- *Type:* number

---

##### `audiences`<sup>Required</sup> <a name="audiences" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.property.audiences"></a>

```typescript
public readonly audiences: string[];
```

- *Type:* string[]

---

##### `expirationSeconds`<sup>Required</sup> <a name="expirationSeconds" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.property.expirationSeconds"></a>

```typescript
public readonly expirationSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1SpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EphemeralKubernetesTokenRequestV1Spec;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-kubernetes.ephemeralKubernetesTokenRequestV1.EphemeralKubernetesTokenRequestV1Spec">EphemeralKubernetesTokenRequestV1Spec</a>

---



