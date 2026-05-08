# `dataKubernetesEndpointSliceV1` Submodule <a name="`dataKubernetesEndpointSliceV1` Submodule" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataKubernetesEndpointSliceV1 <a name="DataKubernetesEndpointSliceV1" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.1.0/docs/data-sources/endpoint_slice_v1 kubernetes_endpoint_slice_v1}.

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.Initializer"></a>

```typescript
import { dataKubernetesEndpointSliceV1 } from '@cdktn/provider-kubernetes'

new dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1(scope: Construct, id: string, config: DataKubernetesEndpointSliceV1Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config">DataKubernetesEndpointSliceV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config">DataKubernetesEndpointSliceV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.putMetadata">putMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putMetadata` <a name="putMetadata" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.putMetadata"></a>

```typescript
public putMetadata(value: DataKubernetesEndpointSliceV1Metadata): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata">DataKubernetesEndpointSliceV1Metadata</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataKubernetesEndpointSliceV1 resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.isConstruct"></a>

```typescript
import { dataKubernetesEndpointSliceV1 } from '@cdktn/provider-kubernetes'

dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.isTerraformElement"></a>

```typescript
import { dataKubernetesEndpointSliceV1 } from '@cdktn/provider-kubernetes'

dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.isTerraformDataSource"></a>

```typescript
import { dataKubernetesEndpointSliceV1 } from '@cdktn/provider-kubernetes'

dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.generateConfigForImport"></a>

```typescript
import { dataKubernetesEndpointSliceV1 } from '@cdktn/provider-kubernetes'

dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataKubernetesEndpointSliceV1 resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataKubernetesEndpointSliceV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataKubernetesEndpointSliceV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.1.0/docs/data-sources/endpoint_slice_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataKubernetesEndpointSliceV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.addressType">addressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.endpoint">endpoint</a></code> | <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList">DataKubernetesEndpointSliceV1EndpointList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.metadata">metadata</a></code> | <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference">DataKubernetesEndpointSliceV1MetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.port">port</a></code> | <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList">DataKubernetesEndpointSliceV1PortList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.metadataInput">metadataInput</a></code> | <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata">DataKubernetesEndpointSliceV1Metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `addressType`<sup>Required</sup> <a name="addressType" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.addressType"></a>

```typescript
public readonly addressType: string;
```

- *Type:* string

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.endpoint"></a>

```typescript
public readonly endpoint: DataKubernetesEndpointSliceV1EndpointList;
```

- *Type:* <a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList">DataKubernetesEndpointSliceV1EndpointList</a>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.metadata"></a>

```typescript
public readonly metadata: DataKubernetesEndpointSliceV1MetadataOutputReference;
```

- *Type:* <a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference">DataKubernetesEndpointSliceV1MetadataOutputReference</a>

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.port"></a>

```typescript
public readonly port: DataKubernetesEndpointSliceV1PortList;
```

- *Type:* <a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList">DataKubernetesEndpointSliceV1PortList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.metadataInput"></a>

```typescript
public readonly metadataInput: DataKubernetesEndpointSliceV1Metadata;
```

- *Type:* <a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata">DataKubernetesEndpointSliceV1Metadata</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataKubernetesEndpointSliceV1Config <a name="DataKubernetesEndpointSliceV1Config" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.Initializer"></a>

```typescript
import { dataKubernetesEndpointSliceV1 } from '@cdktn/provider-kubernetes'

const dataKubernetesEndpointSliceV1Config: dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.property.metadata">metadata</a></code> | <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata">DataKubernetesEndpointSliceV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.1.0/docs/data-sources/endpoint_slice_v1#id DataKubernetesEndpointSliceV1#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.property.metadata"></a>

```typescript
public readonly metadata: DataKubernetesEndpointSliceV1Metadata;
```

- *Type:* <a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata">DataKubernetesEndpointSliceV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.1.0/docs/data-sources/endpoint_slice_v1#metadata DataKubernetesEndpointSliceV1#metadata}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.1.0/docs/data-sources/endpoint_slice_v1#id DataKubernetesEndpointSliceV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataKubernetesEndpointSliceV1Endpoint <a name="DataKubernetesEndpointSliceV1Endpoint" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Endpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Endpoint.Initializer"></a>

```typescript
import { dataKubernetesEndpointSliceV1 } from '@cdktn/provider-kubernetes'

const dataKubernetesEndpointSliceV1Endpoint: dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Endpoint = { ... }
```


### DataKubernetesEndpointSliceV1EndpointCondition <a name="DataKubernetesEndpointSliceV1EndpointCondition" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointCondition.Initializer"></a>

```typescript
import { dataKubernetesEndpointSliceV1 } from '@cdktn/provider-kubernetes'

const dataKubernetesEndpointSliceV1EndpointCondition: dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointCondition = { ... }
```


### DataKubernetesEndpointSliceV1EndpointTargetRef <a name="DataKubernetesEndpointSliceV1EndpointTargetRef" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRef"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRef.Initializer"></a>

```typescript
import { dataKubernetesEndpointSliceV1 } from '@cdktn/provider-kubernetes'

const dataKubernetesEndpointSliceV1EndpointTargetRef: dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRef = { ... }
```


### DataKubernetesEndpointSliceV1Metadata <a name="DataKubernetesEndpointSliceV1Metadata" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata.Initializer"></a>

```typescript
import { dataKubernetesEndpointSliceV1 } from '@cdktn/provider-kubernetes'

const dataKubernetesEndpointSliceV1Metadata: dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | An unstructured key value map stored with the endpoint_slice that may be used to store arbitrary metadata. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata.property.generateName">generateName</a></code> | <code>string</code> | Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Map of string keys and values that can be used to organize and categorize (scope and select) the endpoint_slice. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata.property.name">name</a></code> | <code>string</code> | Name of the endpoint_slice, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata.property.namespace">namespace</a></code> | <code>string</code> | Namespace defines the space within which name of the endpoint_slice must be unique. |

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

An unstructured key value map stored with the endpoint_slice that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.1.0/docs/data-sources/endpoint_slice_v1#annotations DataKubernetesEndpointSliceV1#annotations}

---

##### `generateName`<sup>Optional</sup> <a name="generateName" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata.property.generateName"></a>

```typescript
public readonly generateName: string;
```

- *Type:* string

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. More info: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.1.0/docs/data-sources/endpoint_slice_v1#generate_name DataKubernetesEndpointSliceV1#generate_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Map of string keys and values that can be used to organize and categorize (scope and select) the endpoint_slice.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.1.0/docs/data-sources/endpoint_slice_v1#labels DataKubernetesEndpointSliceV1#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the endpoint_slice, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.1.0/docs/data-sources/endpoint_slice_v1#name DataKubernetesEndpointSliceV1#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Namespace defines the space within which name of the endpoint_slice must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.1.0/docs/data-sources/endpoint_slice_v1#namespace DataKubernetesEndpointSliceV1#namespace}

---

### DataKubernetesEndpointSliceV1Port <a name="DataKubernetesEndpointSliceV1Port" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Port"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Port.Initializer"></a>

```typescript
import { dataKubernetesEndpointSliceV1 } from '@cdktn/provider-kubernetes'

const dataKubernetesEndpointSliceV1Port: dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Port = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataKubernetesEndpointSliceV1EndpointConditionList <a name="DataKubernetesEndpointSliceV1EndpointConditionList" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.Initializer"></a>

```typescript
import { dataKubernetesEndpointSliceV1 } from '@cdktn/provider-kubernetes'

new dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.get"></a>

```typescript
public get(index: number): DataKubernetesEndpointSliceV1EndpointConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataKubernetesEndpointSliceV1EndpointConditionOutputReference <a name="DataKubernetesEndpointSliceV1EndpointConditionOutputReference" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.Initializer"></a>

```typescript
import { dataKubernetesEndpointSliceV1 } from '@cdktn/provider-kubernetes'

new dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.property.ready">ready</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.property.serving">serving</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.property.terminating">terminating</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointCondition">DataKubernetesEndpointSliceV1EndpointCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ready`<sup>Required</sup> <a name="ready" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.property.ready"></a>

```typescript
public readonly ready: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `serving`<sup>Required</sup> <a name="serving" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.property.serving"></a>

```typescript
public readonly serving: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `terminating`<sup>Required</sup> <a name="terminating" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.property.terminating"></a>

```typescript
public readonly terminating: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataKubernetesEndpointSliceV1EndpointCondition;
```

- *Type:* <a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointCondition">DataKubernetesEndpointSliceV1EndpointCondition</a>

---


### DataKubernetesEndpointSliceV1EndpointList <a name="DataKubernetesEndpointSliceV1EndpointList" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.Initializer"></a>

```typescript
import { dataKubernetesEndpointSliceV1 } from '@cdktn/provider-kubernetes'

new dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.get"></a>

```typescript
public get(index: number): DataKubernetesEndpointSliceV1EndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataKubernetesEndpointSliceV1EndpointOutputReference <a name="DataKubernetesEndpointSliceV1EndpointOutputReference" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.Initializer"></a>

```typescript
import { dataKubernetesEndpointSliceV1 } from '@cdktn/provider-kubernetes'

new dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.property.addresses">addresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList">DataKubernetesEndpointSliceV1EndpointConditionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.property.nodeName">nodeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.property.targetRef">targetRef</a></code> | <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList">DataKubernetesEndpointSliceV1EndpointTargetRefList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.property.zone">zone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Endpoint">DataKubernetesEndpointSliceV1Endpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addresses`<sup>Required</sup> <a name="addresses" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.property.addresses"></a>

```typescript
public readonly addresses: string[];
```

- *Type:* string[]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.property.condition"></a>

```typescript
public readonly condition: DataKubernetesEndpointSliceV1EndpointConditionList;
```

- *Type:* <a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList">DataKubernetesEndpointSliceV1EndpointConditionList</a>

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `nodeName`<sup>Required</sup> <a name="nodeName" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.property.nodeName"></a>

```typescript
public readonly nodeName: string;
```

- *Type:* string

---

##### `targetRef`<sup>Required</sup> <a name="targetRef" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.property.targetRef"></a>

```typescript
public readonly targetRef: DataKubernetesEndpointSliceV1EndpointTargetRefList;
```

- *Type:* <a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList">DataKubernetesEndpointSliceV1EndpointTargetRefList</a>

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataKubernetesEndpointSliceV1Endpoint;
```

- *Type:* <a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Endpoint">DataKubernetesEndpointSliceV1Endpoint</a>

---


### DataKubernetesEndpointSliceV1EndpointTargetRefList <a name="DataKubernetesEndpointSliceV1EndpointTargetRefList" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.Initializer"></a>

```typescript
import { dataKubernetesEndpointSliceV1 } from '@cdktn/provider-kubernetes'

new dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.get"></a>

```typescript
public get(index: number): DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference <a name="DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.Initializer"></a>

```typescript
import { dataKubernetesEndpointSliceV1 } from '@cdktn/provider-kubernetes'

new dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.property.fieldPath">fieldPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.property.resourceVersion">resourceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRef">DataKubernetesEndpointSliceV1EndpointTargetRef</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fieldPath`<sup>Required</sup> <a name="fieldPath" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.property.fieldPath"></a>

```typescript
public readonly fieldPath: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `resourceVersion`<sup>Required</sup> <a name="resourceVersion" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.property.resourceVersion"></a>

```typescript
public readonly resourceVersion: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataKubernetesEndpointSliceV1EndpointTargetRef;
```

- *Type:* <a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRef">DataKubernetesEndpointSliceV1EndpointTargetRef</a>

---


### DataKubernetesEndpointSliceV1MetadataOutputReference <a name="DataKubernetesEndpointSliceV1MetadataOutputReference" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.Initializer"></a>

```typescript
import { dataKubernetesEndpointSliceV1 } from '@cdktn/provider-kubernetes'

new dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.resetGenerateName">resetGenerateName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetGenerateName` <a name="resetGenerateName" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.resetGenerateName"></a>

```typescript
public resetGenerateName(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.resetNamespace"></a>

```typescript
public resetNamespace(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.generation">generation</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.resourceVersion">resourceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.generateNameInput">generateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.generateName">generateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata">DataKubernetesEndpointSliceV1Metadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.generation"></a>

```typescript
public readonly generation: number;
```

- *Type:* number

---

##### `resourceVersion`<sup>Required</sup> <a name="resourceVersion" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.resourceVersion"></a>

```typescript
public readonly resourceVersion: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `generateNameInput`<sup>Optional</sup> <a name="generateNameInput" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.generateNameInput"></a>

```typescript
public readonly generateNameInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `generateName`<sup>Required</sup> <a name="generateName" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.generateName"></a>

```typescript
public readonly generateName: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataKubernetesEndpointSliceV1Metadata;
```

- *Type:* <a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata">DataKubernetesEndpointSliceV1Metadata</a>

---


### DataKubernetesEndpointSliceV1PortList <a name="DataKubernetesEndpointSliceV1PortList" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.Initializer"></a>

```typescript
import { dataKubernetesEndpointSliceV1 } from '@cdktn/provider-kubernetes'

new dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.get"></a>

```typescript
public get(index: number): DataKubernetesEndpointSliceV1PortOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataKubernetesEndpointSliceV1PortOutputReference <a name="DataKubernetesEndpointSliceV1PortOutputReference" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.Initializer"></a>

```typescript
import { dataKubernetesEndpointSliceV1 } from '@cdktn/provider-kubernetes'

new dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.property.appProtocol">appProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.property.port">port</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Port">DataKubernetesEndpointSliceV1Port</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `appProtocol`<sup>Required</sup> <a name="appProtocol" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.property.appProtocol"></a>

```typescript
public readonly appProtocol: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.property.port"></a>

```typescript
public readonly port: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataKubernetesEndpointSliceV1Port;
```

- *Type:* <a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Port">DataKubernetesEndpointSliceV1Port</a>

---



