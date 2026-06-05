# `priorityClass` Submodule <a name="`priorityClass` Submodule" id="@cdktn/provider-kubernetes.priorityClass"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PriorityClass <a name="PriorityClass" id="@cdktn/provider-kubernetes.priorityClass.PriorityClass"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.0/docs/resources/priority_class kubernetes_priority_class}.

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.priorityClass.PriorityClass.Initializer"></a>

```typescript
import { priorityClass } from '@cdktn/provider-kubernetes'

new priorityClass.PriorityClass(scope: Construct, id: string, config: PriorityClassConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClass.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClass.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClass.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClassConfig">PriorityClassConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-kubernetes.priorityClass.PriorityClass.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-kubernetes.priorityClass.PriorityClass.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-kubernetes.priorityClass.PriorityClass.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClassConfig">PriorityClassConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClass.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClass.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClass.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClass.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClass.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClass.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClass.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClass.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClass.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClass.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClass.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClass.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClass.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClass.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClass.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClass.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClass.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClass.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClass.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClass.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClass.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClass.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClass.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClass.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClass.putMetadata">putMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClass.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClass.resetGlobalDefault">resetGlobalDefault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClass.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClass.resetPreemptionPolicy">resetPreemptionPolicy</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-kubernetes.priorityClass.PriorityClass.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-kubernetes.priorityClass.PriorityClass.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-kubernetes.priorityClass.PriorityClass.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-kubernetes.priorityClass.PriorityClass.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-kubernetes.priorityClass.PriorityClass.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-kubernetes.priorityClass.PriorityClass.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-kubernetes.priorityClass.PriorityClass.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-kubernetes.priorityClass.PriorityClass.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-kubernetes.priorityClass.PriorityClass.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-kubernetes.priorityClass.PriorityClass.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-kubernetes.priorityClass.PriorityClass.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-kubernetes.priorityClass.PriorityClass.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-kubernetes.priorityClass.PriorityClass.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-kubernetes.priorityClass.PriorityClass.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-kubernetes.priorityClass.PriorityClass.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.priorityClass.PriorityClass.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-kubernetes.priorityClass.PriorityClass.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.priorityClass.PriorityClass.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-kubernetes.priorityClass.PriorityClass.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.priorityClass.PriorityClass.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-kubernetes.priorityClass.PriorityClass.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.priorityClass.PriorityClass.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-kubernetes.priorityClass.PriorityClass.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.priorityClass.PriorityClass.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-kubernetes.priorityClass.PriorityClass.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.priorityClass.PriorityClass.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-kubernetes.priorityClass.PriorityClass.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.priorityClass.PriorityClass.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-kubernetes.priorityClass.PriorityClass.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.priorityClass.PriorityClass.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-kubernetes.priorityClass.PriorityClass.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.priorityClass.PriorityClass.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-kubernetes.priorityClass.PriorityClass.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-kubernetes.priorityClass.PriorityClass.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-kubernetes.priorityClass.PriorityClass.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-kubernetes.priorityClass.PriorityClass.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-kubernetes.priorityClass.PriorityClass.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.priorityClass.PriorityClass.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-kubernetes.priorityClass.PriorityClass.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-kubernetes.priorityClass.PriorityClass.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-kubernetes.priorityClass.PriorityClass.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-kubernetes.priorityClass.PriorityClass.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-kubernetes.priorityClass.PriorityClass.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-kubernetes.priorityClass.PriorityClass.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-kubernetes.priorityClass.PriorityClass.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMetadata` <a name="putMetadata" id="@cdktn/provider-kubernetes.priorityClass.PriorityClass.putMetadata"></a>

```typescript
public putMetadata(value: PriorityClassMetadata): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-kubernetes.priorityClass.PriorityClass.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadata">PriorityClassMetadata</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-kubernetes.priorityClass.PriorityClass.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetGlobalDefault` <a name="resetGlobalDefault" id="@cdktn/provider-kubernetes.priorityClass.PriorityClass.resetGlobalDefault"></a>

```typescript
public resetGlobalDefault(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-kubernetes.priorityClass.PriorityClass.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPreemptionPolicy` <a name="resetPreemptionPolicy" id="@cdktn/provider-kubernetes.priorityClass.PriorityClass.resetPreemptionPolicy"></a>

```typescript
public resetPreemptionPolicy(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClass.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClass.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClass.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClass.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a PriorityClass resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-kubernetes.priorityClass.PriorityClass.isConstruct"></a>

```typescript
import { priorityClass } from '@cdktn/provider-kubernetes'

priorityClass.PriorityClass.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-kubernetes.priorityClass.PriorityClass.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-kubernetes.priorityClass.PriorityClass.isTerraformElement"></a>

```typescript
import { priorityClass } from '@cdktn/provider-kubernetes'

priorityClass.PriorityClass.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-kubernetes.priorityClass.PriorityClass.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-kubernetes.priorityClass.PriorityClass.isTerraformResource"></a>

```typescript
import { priorityClass } from '@cdktn/provider-kubernetes'

priorityClass.PriorityClass.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-kubernetes.priorityClass.PriorityClass.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-kubernetes.priorityClass.PriorityClass.generateConfigForImport"></a>

```typescript
import { priorityClass } from '@cdktn/provider-kubernetes'

priorityClass.PriorityClass.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a PriorityClass resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-kubernetes.priorityClass.PriorityClass.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-kubernetes.priorityClass.PriorityClass.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PriorityClass to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-kubernetes.priorityClass.PriorityClass.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PriorityClass that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.0/docs/resources/priority_class#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-kubernetes.priorityClass.PriorityClass.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the PriorityClass to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClass.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClass.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClass.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClass.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClass.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClass.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClass.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClass.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClass.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClass.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClass.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClass.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClass.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClass.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClass.property.metadata">metadata</a></code> | <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadataOutputReference">PriorityClassMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClass.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClass.property.globalDefaultInput">globalDefaultInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClass.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClass.property.metadataInput">metadataInput</a></code> | <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadata">PriorityClassMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClass.property.preemptionPolicyInput">preemptionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClass.property.valueInput">valueInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClass.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClass.property.globalDefault">globalDefault</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClass.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClass.property.preemptionPolicy">preemptionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClass.property.value">value</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-kubernetes.priorityClass.PriorityClass.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-kubernetes.priorityClass.PriorityClass.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-kubernetes.priorityClass.PriorityClass.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-kubernetes.priorityClass.PriorityClass.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-kubernetes.priorityClass.PriorityClass.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-kubernetes.priorityClass.PriorityClass.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-kubernetes.priorityClass.PriorityClass.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-kubernetes.priorityClass.PriorityClass.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-kubernetes.priorityClass.PriorityClass.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-kubernetes.priorityClass.PriorityClass.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-kubernetes.priorityClass.PriorityClass.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-kubernetes.priorityClass.PriorityClass.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-kubernetes.priorityClass.PriorityClass.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-kubernetes.priorityClass.PriorityClass.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-kubernetes.priorityClass.PriorityClass.property.metadata"></a>

```typescript
public readonly metadata: PriorityClassMetadataOutputReference;
```

- *Type:* <a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadataOutputReference">PriorityClassMetadataOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-kubernetes.priorityClass.PriorityClass.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `globalDefaultInput`<sup>Optional</sup> <a name="globalDefaultInput" id="@cdktn/provider-kubernetes.priorityClass.PriorityClass.property.globalDefaultInput"></a>

```typescript
public readonly globalDefaultInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-kubernetes.priorityClass.PriorityClass.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktn/provider-kubernetes.priorityClass.PriorityClass.property.metadataInput"></a>

```typescript
public readonly metadataInput: PriorityClassMetadata;
```

- *Type:* <a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadata">PriorityClassMetadata</a>

---

##### `preemptionPolicyInput`<sup>Optional</sup> <a name="preemptionPolicyInput" id="@cdktn/provider-kubernetes.priorityClass.PriorityClass.property.preemptionPolicyInput"></a>

```typescript
public readonly preemptionPolicyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-kubernetes.priorityClass.PriorityClass.property.valueInput"></a>

```typescript
public readonly valueInput: number;
```

- *Type:* number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-kubernetes.priorityClass.PriorityClass.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `globalDefault`<sup>Required</sup> <a name="globalDefault" id="@cdktn/provider-kubernetes.priorityClass.PriorityClass.property.globalDefault"></a>

```typescript
public readonly globalDefault: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-kubernetes.priorityClass.PriorityClass.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `preemptionPolicy`<sup>Required</sup> <a name="preemptionPolicy" id="@cdktn/provider-kubernetes.priorityClass.PriorityClass.property.preemptionPolicy"></a>

```typescript
public readonly preemptionPolicy: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-kubernetes.priorityClass.PriorityClass.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClass.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-kubernetes.priorityClass.PriorityClass.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PriorityClassConfig <a name="PriorityClassConfig" id="@cdktn/provider-kubernetes.priorityClass.PriorityClassConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-kubernetes.priorityClass.PriorityClassConfig.Initializer"></a>

```typescript
import { priorityClass } from '@cdktn/provider-kubernetes'

const priorityClassConfig: priorityClass.PriorityClassConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClassConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClassConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClassConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClassConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClassConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClassConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClassConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClassConfig.property.metadata">metadata</a></code> | <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadata">PriorityClassMetadata</a></code> | metadata block. |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClassConfig.property.value">value</a></code> | <code>number</code> | The value of this priority class. |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClassConfig.property.description">description</a></code> | <code>string</code> | An arbitrary string that usually provides guidelines on when this priority class should be used. |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClassConfig.property.globalDefault">globalDefault</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies whether this PriorityClass should be considered as the default priority for pods that do not have any priority class. |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClassConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.0/docs/resources/priority_class#id PriorityClass#id}. |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClassConfig.property.preemptionPolicy">preemptionPolicy</a></code> | <code>string</code> | PreemptionPolicy is the Policy for preempting pods with lower priority. One of Never, PreemptLowerPriority. Defaults to PreemptLowerPriority if unset. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-kubernetes.priorityClass.PriorityClassConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-kubernetes.priorityClass.PriorityClassConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-kubernetes.priorityClass.PriorityClassConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-kubernetes.priorityClass.PriorityClassConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-kubernetes.priorityClass.PriorityClassConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-kubernetes.priorityClass.PriorityClassConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-kubernetes.priorityClass.PriorityClassConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-kubernetes.priorityClass.PriorityClassConfig.property.metadata"></a>

```typescript
public readonly metadata: PriorityClassMetadata;
```

- *Type:* <a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadata">PriorityClassMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.0/docs/resources/priority_class#metadata PriorityClass#metadata}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-kubernetes.priorityClass.PriorityClassConfig.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

The value of this priority class.

This is the actual priority that pods receive when they have the name of this class in their pod spec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.0/docs/resources/priority_class#value PriorityClass#value}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-kubernetes.priorityClass.PriorityClassConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An arbitrary string that usually provides guidelines on when this priority class should be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.0/docs/resources/priority_class#description PriorityClass#description}

---

##### `globalDefault`<sup>Optional</sup> <a name="globalDefault" id="@cdktn/provider-kubernetes.priorityClass.PriorityClassConfig.property.globalDefault"></a>

```typescript
public readonly globalDefault: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies whether this PriorityClass should be considered as the default priority for pods that do not have any priority class.

Only one PriorityClass can be marked as `globalDefault`. However, if more than one PriorityClasses exists with their `globalDefault` field set to true, the smallest value of such global default PriorityClasses will be used as the default priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.0/docs/resources/priority_class#global_default PriorityClass#global_default}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-kubernetes.priorityClass.PriorityClassConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.0/docs/resources/priority_class#id PriorityClass#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `preemptionPolicy`<sup>Optional</sup> <a name="preemptionPolicy" id="@cdktn/provider-kubernetes.priorityClass.PriorityClassConfig.property.preemptionPolicy"></a>

```typescript
public readonly preemptionPolicy: string;
```

- *Type:* string

PreemptionPolicy is the Policy for preempting pods with lower priority. One of Never, PreemptLowerPriority. Defaults to PreemptLowerPriority if unset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.0/docs/resources/priority_class#preemption_policy PriorityClass#preemption_policy}

---

### PriorityClassMetadata <a name="PriorityClassMetadata" id="@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadata.Initializer"></a>

```typescript
import { priorityClass } from '@cdktn/provider-kubernetes'

const priorityClassMetadata: priorityClass.PriorityClassMetadata = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadata.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | An unstructured key value map stored with the priority class that may be used to store arbitrary metadata. |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadata.property.generateName">generateName</a></code> | <code>string</code> | Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadata.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Map of string keys and values that can be used to organize and categorize (scope and select) the priority class. |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadata.property.name">name</a></code> | <code>string</code> | Name of the priority class, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadata.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

An unstructured key value map stored with the priority class that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.0/docs/resources/priority_class#annotations PriorityClass#annotations}

---

##### `generateName`<sup>Optional</sup> <a name="generateName" id="@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadata.property.generateName"></a>

```typescript
public readonly generateName: string;
```

- *Type:* string

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. More info: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.0/docs/resources/priority_class#generate_name PriorityClass#generate_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadata.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Map of string keys and values that can be used to organize and categorize (scope and select) the priority class.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.0/docs/resources/priority_class#labels PriorityClass#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadata.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the priority class, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.0/docs/resources/priority_class#name PriorityClass#name}

---

## Classes <a name="Classes" id="Classes"></a>

### PriorityClassMetadataOutputReference <a name="PriorityClassMetadataOutputReference" id="@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadataOutputReference.Initializer"></a>

```typescript
import { priorityClass } from '@cdktn/provider-kubernetes'

new priorityClass.PriorityClassMetadataOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadataOutputReference.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadataOutputReference.resetGenerateName">resetGenerateName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadataOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadataOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadataOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadataOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadataOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadataOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadataOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadataOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadataOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadataOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadataOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadataOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadataOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadataOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadataOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadataOutputReference.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetGenerateName` <a name="resetGenerateName" id="@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadataOutputReference.resetGenerateName"></a>

```typescript
public resetGenerateName(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadataOutputReference.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadataOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadataOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadataOutputReference.property.generation">generation</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadataOutputReference.property.resourceVersion">resourceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadataOutputReference.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadataOutputReference.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadataOutputReference.property.generateNameInput">generateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadataOutputReference.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadataOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadataOutputReference.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadataOutputReference.property.generateName">generateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadataOutputReference.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadataOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadata">PriorityClassMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadataOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadataOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadataOutputReference.property.generation"></a>

```typescript
public readonly generation: number;
```

- *Type:* number

---

##### `resourceVersion`<sup>Required</sup> <a name="resourceVersion" id="@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadataOutputReference.property.resourceVersion"></a>

```typescript
public readonly resourceVersion: string;
```

- *Type:* string

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadataOutputReference.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadataOutputReference.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `generateNameInput`<sup>Optional</sup> <a name="generateNameInput" id="@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadataOutputReference.property.generateNameInput"></a>

```typescript
public readonly generateNameInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadataOutputReference.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadataOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadataOutputReference.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `generateName`<sup>Required</sup> <a name="generateName" id="@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadataOutputReference.property.generateName"></a>

```typescript
public readonly generateName: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadataOutputReference.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadataOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadataOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: PriorityClassMetadata;
```

- *Type:* <a href="#@cdktn/provider-kubernetes.priorityClass.PriorityClassMetadata">PriorityClassMetadata</a>

---



