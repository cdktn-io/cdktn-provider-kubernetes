# `manifest` Submodule <a name="`manifest` Submodule" id="@cdktn/provider-kubernetes.manifest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Manifest <a name="Manifest" id="@cdktn/provider-kubernetes.manifest.Manifest"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.0/docs/resources/manifest kubernetes_manifest}.

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.manifest.Manifest.Initializer"></a>

```java
import io.cdktn.providers.kubernetes.manifest.Manifest;

Manifest.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .manifest(java.util.Map<java.lang.String, java.lang.Object>)
//  .computedFields(java.util.List<java.lang.String>)
//  .fieldManager(ManifestFieldManager)
//  .object(java.util.Map<java.lang.String, java.lang.Object>)
//  .timeouts(ManifestTimeouts)
//  .wait(ManifestWait)
//  .waitFor(ManifestWaitFor)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.manifest.Manifest.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-kubernetes.manifest.Manifest.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-kubernetes.manifest.Manifest.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.Manifest.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.Manifest.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.Manifest.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.Manifest.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.Manifest.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.Manifest.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.Manifest.Initializer.parameter.manifest">manifest</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | A Kubernetes manifest describing the desired state of the resource in HCL format. |
| <code><a href="#@cdktn/provider-kubernetes.manifest.Manifest.Initializer.parameter.computedFields">computedFields</a></code> | <code>java.util.List<java.lang.String></code> | List of manifest fields whose values can be altered by the API server during 'apply'. Defaults to: ["metadata.annotations", "metadata.labels"]. |
| <code><a href="#@cdktn/provider-kubernetes.manifest.Manifest.Initializer.parameter.fieldManager">fieldManager</a></code> | <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestFieldManager">ManifestFieldManager</a></code> | field_manager block. |
| <code><a href="#@cdktn/provider-kubernetes.manifest.Manifest.Initializer.parameter.object">object</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | The resulting resource state, as returned by the API server after applying the desired state from `manifest`. |
| <code><a href="#@cdktn/provider-kubernetes.manifest.Manifest.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestTimeouts">ManifestTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-kubernetes.manifest.Manifest.Initializer.parameter.wait">wait</a></code> | <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWait">ManifestWait</a></code> | wait block. |
| <code><a href="#@cdktn/provider-kubernetes.manifest.Manifest.Initializer.parameter.waitFor">waitFor</a></code> | <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitFor">ManifestWaitFor</a></code> | A map of attribute paths and desired patterns to be matched. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-kubernetes.manifest.Manifest.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-kubernetes.manifest.Manifest.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-kubernetes.manifest.Manifest.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-kubernetes.manifest.Manifest.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-kubernetes.manifest.Manifest.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-kubernetes.manifest.Manifest.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-kubernetes.manifest.Manifest.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-kubernetes.manifest.Manifest.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-kubernetes.manifest.Manifest.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `manifest`<sup>Required</sup> <a name="manifest" id="@cdktn/provider-kubernetes.manifest.Manifest.Initializer.parameter.manifest"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

A Kubernetes manifest describing the desired state of the resource in HCL format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.0/docs/resources/manifest#manifest Manifest#manifest}

---

##### `computedFields`<sup>Optional</sup> <a name="computedFields" id="@cdktn/provider-kubernetes.manifest.Manifest.Initializer.parameter.computedFields"></a>

- *Type:* java.util.List<java.lang.String>

List of manifest fields whose values can be altered by the API server during 'apply'. Defaults to: ["metadata.annotations", "metadata.labels"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.0/docs/resources/manifest#computed_fields Manifest#computed_fields}

---

##### `fieldManager`<sup>Optional</sup> <a name="fieldManager" id="@cdktn/provider-kubernetes.manifest.Manifest.Initializer.parameter.fieldManager"></a>

- *Type:* <a href="#@cdktn/provider-kubernetes.manifest.ManifestFieldManager">ManifestFieldManager</a>

field_manager block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.0/docs/resources/manifest#field_manager Manifest#field_manager}

---

##### `object`<sup>Optional</sup> <a name="object" id="@cdktn/provider-kubernetes.manifest.Manifest.Initializer.parameter.object"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

The resulting resource state, as returned by the API server after applying the desired state from `manifest`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.0/docs/resources/manifest#object Manifest#object}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-kubernetes.manifest.Manifest.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-kubernetes.manifest.ManifestTimeouts">ManifestTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.0/docs/resources/manifest#timeouts Manifest#timeouts}

---

##### `wait`<sup>Optional</sup> <a name="wait" id="@cdktn/provider-kubernetes.manifest.Manifest.Initializer.parameter.wait"></a>

- *Type:* <a href="#@cdktn/provider-kubernetes.manifest.ManifestWait">ManifestWait</a>

wait block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.0/docs/resources/manifest#wait Manifest#wait}

---

##### `waitFor`<sup>Optional</sup> <a name="waitFor" id="@cdktn/provider-kubernetes.manifest.Manifest.Initializer.parameter.waitFor"></a>

- *Type:* <a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitFor">ManifestWaitFor</a>

A map of attribute paths and desired patterns to be matched.

After each apply the provider will wait for all attributes listed here to reach a value that matches the desired pattern.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.0/docs/resources/manifest#wait_for Manifest#wait_for}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.manifest.Manifest.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-kubernetes.manifest.Manifest.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-kubernetes.manifest.Manifest.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.Manifest.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-kubernetes.manifest.Manifest.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-kubernetes.manifest.Manifest.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.Manifest.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.Manifest.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-kubernetes.manifest.Manifest.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-kubernetes.manifest.Manifest.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.Manifest.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.Manifest.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.Manifest.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.Manifest.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.Manifest.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.Manifest.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.Manifest.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.Manifest.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.Manifest.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.Manifest.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.Manifest.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.Manifest.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-kubernetes.manifest.Manifest.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-kubernetes.manifest.Manifest.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-kubernetes.manifest.Manifest.putFieldManager">putFieldManager</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.Manifest.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.Manifest.putWait">putWait</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.Manifest.putWaitFor">putWaitFor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.Manifest.resetComputedFields">resetComputedFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.Manifest.resetFieldManager">resetFieldManager</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.Manifest.resetObject">resetObject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.Manifest.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.Manifest.resetWait">resetWait</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.Manifest.resetWaitFor">resetWaitFor</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-kubernetes.manifest.Manifest.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-kubernetes.manifest.Manifest.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-kubernetes.manifest.Manifest.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-kubernetes.manifest.Manifest.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-kubernetes.manifest.Manifest.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-kubernetes.manifest.Manifest.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-kubernetes.manifest.Manifest.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-kubernetes.manifest.Manifest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-kubernetes.manifest.Manifest.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-kubernetes.manifest.Manifest.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-kubernetes.manifest.Manifest.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-kubernetes.manifest.Manifest.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-kubernetes.manifest.Manifest.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-kubernetes.manifest.Manifest.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-kubernetes.manifest.Manifest.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.manifest.Manifest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-kubernetes.manifest.Manifest.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.manifest.Manifest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-kubernetes.manifest.Manifest.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.manifest.Manifest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-kubernetes.manifest.Manifest.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.manifest.Manifest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-kubernetes.manifest.Manifest.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.manifest.Manifest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-kubernetes.manifest.Manifest.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.manifest.Manifest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-kubernetes.manifest.Manifest.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.manifest.Manifest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-kubernetes.manifest.Manifest.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.manifest.Manifest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-kubernetes.manifest.Manifest.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.manifest.Manifest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-kubernetes.manifest.Manifest.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-kubernetes.manifest.Manifest.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-kubernetes.manifest.Manifest.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-kubernetes.manifest.Manifest.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-kubernetes.manifest.Manifest.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.manifest.Manifest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-kubernetes.manifest.Manifest.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-kubernetes.manifest.Manifest.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-kubernetes.manifest.Manifest.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-kubernetes.manifest.Manifest.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-kubernetes.manifest.Manifest.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-kubernetes.manifest.Manifest.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-kubernetes.manifest.Manifest.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFieldManager` <a name="putFieldManager" id="@cdktn/provider-kubernetes.manifest.Manifest.putFieldManager"></a>

```java
public void putFieldManager(ManifestFieldManager value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-kubernetes.manifest.Manifest.putFieldManager.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-kubernetes.manifest.ManifestFieldManager">ManifestFieldManager</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-kubernetes.manifest.Manifest.putTimeouts"></a>

```java
public void putTimeouts(ManifestTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-kubernetes.manifest.Manifest.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-kubernetes.manifest.ManifestTimeouts">ManifestTimeouts</a>

---

##### `putWait` <a name="putWait" id="@cdktn/provider-kubernetes.manifest.Manifest.putWait"></a>

```java
public void putWait(ManifestWait value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-kubernetes.manifest.Manifest.putWait.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-kubernetes.manifest.ManifestWait">ManifestWait</a>

---

##### `putWaitFor` <a name="putWaitFor" id="@cdktn/provider-kubernetes.manifest.Manifest.putWaitFor"></a>

```java
public void putWaitFor(ManifestWaitFor value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-kubernetes.manifest.Manifest.putWaitFor.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitFor">ManifestWaitFor</a>

---

##### `resetComputedFields` <a name="resetComputedFields" id="@cdktn/provider-kubernetes.manifest.Manifest.resetComputedFields"></a>

```java
public void resetComputedFields()
```

##### `resetFieldManager` <a name="resetFieldManager" id="@cdktn/provider-kubernetes.manifest.Manifest.resetFieldManager"></a>

```java
public void resetFieldManager()
```

##### `resetObject` <a name="resetObject" id="@cdktn/provider-kubernetes.manifest.Manifest.resetObject"></a>

```java
public void resetObject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-kubernetes.manifest.Manifest.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetWait` <a name="resetWait" id="@cdktn/provider-kubernetes.manifest.Manifest.resetWait"></a>

```java
public void resetWait()
```

##### `resetWaitFor` <a name="resetWaitFor" id="@cdktn/provider-kubernetes.manifest.Manifest.resetWaitFor"></a>

```java
public void resetWaitFor()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.manifest.Manifest.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-kubernetes.manifest.Manifest.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.Manifest.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.Manifest.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Manifest resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-kubernetes.manifest.Manifest.isConstruct"></a>

```java
import io.cdktn.providers.kubernetes.manifest.Manifest;

Manifest.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-kubernetes.manifest.Manifest.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-kubernetes.manifest.Manifest.isTerraformElement"></a>

```java
import io.cdktn.providers.kubernetes.manifest.Manifest;

Manifest.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-kubernetes.manifest.Manifest.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-kubernetes.manifest.Manifest.isTerraformResource"></a>

```java
import io.cdktn.providers.kubernetes.manifest.Manifest;

Manifest.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-kubernetes.manifest.Manifest.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-kubernetes.manifest.Manifest.generateConfigForImport"></a>

```java
import io.cdktn.providers.kubernetes.manifest.Manifest;

Manifest.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Manifest.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Manifest resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-kubernetes.manifest.Manifest.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-kubernetes.manifest.Manifest.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Manifest to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-kubernetes.manifest.Manifest.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Manifest that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.0/docs/resources/manifest#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-kubernetes.manifest.Manifest.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Manifest to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.manifest.Manifest.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-kubernetes.manifest.Manifest.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.Manifest.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.Manifest.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.Manifest.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.Manifest.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.Manifest.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.Manifest.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.Manifest.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.Manifest.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.Manifest.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.Manifest.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.Manifest.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.Manifest.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.Manifest.property.fieldManager">fieldManager</a></code> | <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestFieldManagerOutputReference">ManifestFieldManagerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.Manifest.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestTimeoutsOutputReference">ManifestTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.Manifest.property.wait">wait</a></code> | <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitOutputReference">ManifestWaitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.Manifest.property.waitFor">waitFor</a></code> | <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitForOutputReference">ManifestWaitForOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.Manifest.property.computedFieldsInput">computedFieldsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.Manifest.property.fieldManagerInput">fieldManagerInput</a></code> | <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestFieldManager">ManifestFieldManager</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.Manifest.property.manifestInput">manifestInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.Manifest.property.objectInput">objectInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.Manifest.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestTimeouts">ManifestTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.Manifest.property.waitForInput">waitForInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitFor">ManifestWaitFor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.Manifest.property.waitInput">waitInput</a></code> | <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWait">ManifestWait</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.Manifest.property.computedFields">computedFields</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.Manifest.property.manifest">manifest</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.Manifest.property.object">object</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-kubernetes.manifest.Manifest.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-kubernetes.manifest.Manifest.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-kubernetes.manifest.Manifest.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-kubernetes.manifest.Manifest.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-kubernetes.manifest.Manifest.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-kubernetes.manifest.Manifest.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-kubernetes.manifest.Manifest.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-kubernetes.manifest.Manifest.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-kubernetes.manifest.Manifest.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-kubernetes.manifest.Manifest.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-kubernetes.manifest.Manifest.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-kubernetes.manifest.Manifest.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-kubernetes.manifest.Manifest.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-kubernetes.manifest.Manifest.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `fieldManager`<sup>Required</sup> <a name="fieldManager" id="@cdktn/provider-kubernetes.manifest.Manifest.property.fieldManager"></a>

```java
public ManifestFieldManagerOutputReference getFieldManager();
```

- *Type:* <a href="#@cdktn/provider-kubernetes.manifest.ManifestFieldManagerOutputReference">ManifestFieldManagerOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-kubernetes.manifest.Manifest.property.timeouts"></a>

```java
public ManifestTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-kubernetes.manifest.ManifestTimeoutsOutputReference">ManifestTimeoutsOutputReference</a>

---

##### `wait`<sup>Required</sup> <a name="wait" id="@cdktn/provider-kubernetes.manifest.Manifest.property.wait"></a>

```java
public ManifestWaitOutputReference getWait();
```

- *Type:* <a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitOutputReference">ManifestWaitOutputReference</a>

---

##### `waitFor`<sup>Required</sup> <a name="waitFor" id="@cdktn/provider-kubernetes.manifest.Manifest.property.waitFor"></a>

```java
public ManifestWaitForOutputReference getWaitFor();
```

- *Type:* <a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitForOutputReference">ManifestWaitForOutputReference</a>

---

##### `computedFieldsInput`<sup>Optional</sup> <a name="computedFieldsInput" id="@cdktn/provider-kubernetes.manifest.Manifest.property.computedFieldsInput"></a>

```java
public java.util.List<java.lang.String> getComputedFieldsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fieldManagerInput`<sup>Optional</sup> <a name="fieldManagerInput" id="@cdktn/provider-kubernetes.manifest.Manifest.property.fieldManagerInput"></a>

```java
public ManifestFieldManager getFieldManagerInput();
```

- *Type:* <a href="#@cdktn/provider-kubernetes.manifest.ManifestFieldManager">ManifestFieldManager</a>

---

##### `manifestInput`<sup>Optional</sup> <a name="manifestInput" id="@cdktn/provider-kubernetes.manifest.Manifest.property.manifestInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getManifestInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `objectInput`<sup>Optional</sup> <a name="objectInput" id="@cdktn/provider-kubernetes.manifest.Manifest.property.objectInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getObjectInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-kubernetes.manifest.Manifest.property.timeoutsInput"></a>

```java
public ManifestTimeouts getTimeoutsInput();
```

- *Type:* <a href="#@cdktn/provider-kubernetes.manifest.ManifestTimeouts">ManifestTimeouts</a>

---

##### `waitForInput`<sup>Optional</sup> <a name="waitForInput" id="@cdktn/provider-kubernetes.manifest.Manifest.property.waitForInput"></a>

```java
public IResolvable|ManifestWaitFor getWaitForInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitFor">ManifestWaitFor</a>

---

##### `waitInput`<sup>Optional</sup> <a name="waitInput" id="@cdktn/provider-kubernetes.manifest.Manifest.property.waitInput"></a>

```java
public ManifestWait getWaitInput();
```

- *Type:* <a href="#@cdktn/provider-kubernetes.manifest.ManifestWait">ManifestWait</a>

---

##### `computedFields`<sup>Required</sup> <a name="computedFields" id="@cdktn/provider-kubernetes.manifest.Manifest.property.computedFields"></a>

```java
public java.util.List<java.lang.String> getComputedFields();
```

- *Type:* java.util.List<java.lang.String>

---

##### `manifest`<sup>Required</sup> <a name="manifest" id="@cdktn/provider-kubernetes.manifest.Manifest.property.manifest"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getManifest();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `object`<sup>Required</sup> <a name="object" id="@cdktn/provider-kubernetes.manifest.Manifest.property.object"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getObject();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.manifest.Manifest.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-kubernetes.manifest.Manifest.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ManifestConfig <a name="ManifestConfig" id="@cdktn/provider-kubernetes.manifest.ManifestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-kubernetes.manifest.ManifestConfig.Initializer"></a>

```java
import io.cdktn.providers.kubernetes.manifest.ManifestConfig;

ManifestConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .manifest(java.util.Map<java.lang.String, java.lang.Object>)
//  .computedFields(java.util.List<java.lang.String>)
//  .fieldManager(ManifestFieldManager)
//  .object(java.util.Map<java.lang.String, java.lang.Object>)
//  .timeouts(ManifestTimeouts)
//  .wait(ManifestWait)
//  .waitFor(ManifestWaitFor)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestConfig.property.manifest">manifest</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | A Kubernetes manifest describing the desired state of the resource in HCL format. |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestConfig.property.computedFields">computedFields</a></code> | <code>java.util.List<java.lang.String></code> | List of manifest fields whose values can be altered by the API server during 'apply'. Defaults to: ["metadata.annotations", "metadata.labels"]. |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestConfig.property.fieldManager">fieldManager</a></code> | <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestFieldManager">ManifestFieldManager</a></code> | field_manager block. |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestConfig.property.object">object</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | The resulting resource state, as returned by the API server after applying the desired state from `manifest`. |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestTimeouts">ManifestTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestConfig.property.wait">wait</a></code> | <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWait">ManifestWait</a></code> | wait block. |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestConfig.property.waitFor">waitFor</a></code> | <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitFor">ManifestWaitFor</a></code> | A map of attribute paths and desired patterns to be matched. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-kubernetes.manifest.ManifestConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-kubernetes.manifest.ManifestConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-kubernetes.manifest.ManifestConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-kubernetes.manifest.ManifestConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-kubernetes.manifest.ManifestConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-kubernetes.manifest.ManifestConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-kubernetes.manifest.ManifestConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `manifest`<sup>Required</sup> <a name="manifest" id="@cdktn/provider-kubernetes.manifest.ManifestConfig.property.manifest"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getManifest();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

A Kubernetes manifest describing the desired state of the resource in HCL format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.0/docs/resources/manifest#manifest Manifest#manifest}

---

##### `computedFields`<sup>Optional</sup> <a name="computedFields" id="@cdktn/provider-kubernetes.manifest.ManifestConfig.property.computedFields"></a>

```java
public java.util.List<java.lang.String> getComputedFields();
```

- *Type:* java.util.List<java.lang.String>

List of manifest fields whose values can be altered by the API server during 'apply'. Defaults to: ["metadata.annotations", "metadata.labels"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.0/docs/resources/manifest#computed_fields Manifest#computed_fields}

---

##### `fieldManager`<sup>Optional</sup> <a name="fieldManager" id="@cdktn/provider-kubernetes.manifest.ManifestConfig.property.fieldManager"></a>

```java
public ManifestFieldManager getFieldManager();
```

- *Type:* <a href="#@cdktn/provider-kubernetes.manifest.ManifestFieldManager">ManifestFieldManager</a>

field_manager block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.0/docs/resources/manifest#field_manager Manifest#field_manager}

---

##### `object`<sup>Optional</sup> <a name="object" id="@cdktn/provider-kubernetes.manifest.ManifestConfig.property.object"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getObject();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

The resulting resource state, as returned by the API server after applying the desired state from `manifest`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.0/docs/resources/manifest#object Manifest#object}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-kubernetes.manifest.ManifestConfig.property.timeouts"></a>

```java
public ManifestTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-kubernetes.manifest.ManifestTimeouts">ManifestTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.0/docs/resources/manifest#timeouts Manifest#timeouts}

---

##### `wait`<sup>Optional</sup> <a name="wait" id="@cdktn/provider-kubernetes.manifest.ManifestConfig.property.wait"></a>

```java
public ManifestWait getWait();
```

- *Type:* <a href="#@cdktn/provider-kubernetes.manifest.ManifestWait">ManifestWait</a>

wait block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.0/docs/resources/manifest#wait Manifest#wait}

---

##### `waitFor`<sup>Optional</sup> <a name="waitFor" id="@cdktn/provider-kubernetes.manifest.ManifestConfig.property.waitFor"></a>

```java
public ManifestWaitFor getWaitFor();
```

- *Type:* <a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitFor">ManifestWaitFor</a>

A map of attribute paths and desired patterns to be matched.

After each apply the provider will wait for all attributes listed here to reach a value that matches the desired pattern.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.0/docs/resources/manifest#wait_for Manifest#wait_for}

---

### ManifestFieldManager <a name="ManifestFieldManager" id="@cdktn/provider-kubernetes.manifest.ManifestFieldManager"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-kubernetes.manifest.ManifestFieldManager.Initializer"></a>

```java
import io.cdktn.providers.kubernetes.manifest.ManifestFieldManager;

ManifestFieldManager.builder()
//  .forceConflicts(java.lang.Boolean|IResolvable)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestFieldManager.property.forceConflicts">forceConflicts</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Force changes against conflicts. |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestFieldManager.property.name">name</a></code> | <code>java.lang.String</code> | The name to use for the field manager when creating and updating the resource. |

---

##### `forceConflicts`<sup>Optional</sup> <a name="forceConflicts" id="@cdktn/provider-kubernetes.manifest.ManifestFieldManager.property.forceConflicts"></a>

```java
public java.lang.Boolean|IResolvable getForceConflicts();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Force changes against conflicts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.0/docs/resources/manifest#force_conflicts Manifest#force_conflicts}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-kubernetes.manifest.ManifestFieldManager.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name to use for the field manager when creating and updating the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.0/docs/resources/manifest#name Manifest#name}

---

### ManifestTimeouts <a name="ManifestTimeouts" id="@cdktn/provider-kubernetes.manifest.ManifestTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-kubernetes.manifest.ManifestTimeouts.Initializer"></a>

```java
import io.cdktn.providers.kubernetes.manifest.ManifestTimeouts;

ManifestTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Timeout for the create operation. |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Timeout for the delete operation. |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Timeout for the update operation. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-kubernetes.manifest.ManifestTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Timeout for the create operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.0/docs/resources/manifest#create Manifest#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-kubernetes.manifest.ManifestTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Timeout for the delete operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.0/docs/resources/manifest#delete Manifest#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-kubernetes.manifest.ManifestTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Timeout for the update operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.0/docs/resources/manifest#update Manifest#update}

---

### ManifestWait <a name="ManifestWait" id="@cdktn/provider-kubernetes.manifest.ManifestWait"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-kubernetes.manifest.ManifestWait.Initializer"></a>

```java
import io.cdktn.providers.kubernetes.manifest.ManifestWait;

ManifestWait.builder()
//  .condition(IResolvable|java.util.List<ManifestWaitCondition>)
//  .fields(java.util.Map<java.lang.String, java.lang.String>)
//  .rollout(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWait.property.condition">condition</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitCondition">ManifestWaitCondition</a>></code> | condition block. |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWait.property.fields">fields</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of paths to fields to wait for a specific field value. |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWait.property.rollout">rollout</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Wait for rollout to complete on resources that support `kubectl rollout status`. |

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-kubernetes.manifest.ManifestWait.property.condition"></a>

```java
public IResolvable|java.util.List<ManifestWaitCondition> getCondition();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitCondition">ManifestWaitCondition</a>>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.0/docs/resources/manifest#condition Manifest#condition}

---

##### `fields`<sup>Optional</sup> <a name="fields" id="@cdktn/provider-kubernetes.manifest.ManifestWait.property.fields"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFields();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of paths to fields to wait for a specific field value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.0/docs/resources/manifest#fields Manifest#fields}

---

##### `rollout`<sup>Optional</sup> <a name="rollout" id="@cdktn/provider-kubernetes.manifest.ManifestWait.property.rollout"></a>

```java
public java.lang.Boolean|IResolvable getRollout();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Wait for rollout to complete on resources that support `kubectl rollout status`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.0/docs/resources/manifest#rollout Manifest#rollout}

---

### ManifestWaitCondition <a name="ManifestWaitCondition" id="@cdktn/provider-kubernetes.manifest.ManifestWaitCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-kubernetes.manifest.ManifestWaitCondition.Initializer"></a>

```java
import io.cdktn.providers.kubernetes.manifest.ManifestWaitCondition;

ManifestWaitCondition.builder()
//  .status(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitCondition.property.status">status</a></code> | <code>java.lang.String</code> | The condition status. |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitCondition.property.type">type</a></code> | <code>java.lang.String</code> | The type of condition. |

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-kubernetes.manifest.ManifestWaitCondition.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

The condition status.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.0/docs/resources/manifest#status Manifest#status}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-kubernetes.manifest.ManifestWaitCondition.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.0/docs/resources/manifest#type Manifest#type}

---

### ManifestWaitFor <a name="ManifestWaitFor" id="@cdktn/provider-kubernetes.manifest.ManifestWaitFor"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-kubernetes.manifest.ManifestWaitFor.Initializer"></a>

```java
import io.cdktn.providers.kubernetes.manifest.ManifestWaitFor;

ManifestWaitFor.builder()
//  .fields(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitFor.property.fields">fields</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.0/docs/resources/manifest#fields Manifest#fields}. |

---

##### `fields`<sup>Optional</sup> <a name="fields" id="@cdktn/provider-kubernetes.manifest.ManifestWaitFor.property.fields"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFields();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.2.0/docs/resources/manifest#fields Manifest#fields}.

---

## Classes <a name="Classes" id="Classes"></a>

### ManifestFieldManagerOutputReference <a name="ManifestFieldManagerOutputReference" id="@cdktn/provider-kubernetes.manifest.ManifestFieldManagerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.Initializer"></a>

```java
import io.cdktn.providers.kubernetes.manifest.ManifestFieldManagerOutputReference;

new ManifestFieldManagerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.resetForceConflicts">resetForceConflicts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetForceConflicts` <a name="resetForceConflicts" id="@cdktn/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.resetForceConflicts"></a>

```java
public void resetForceConflicts()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.property.forceConflictsInput">forceConflictsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.property.forceConflicts">forceConflicts</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestFieldManager">ManifestFieldManager</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `forceConflictsInput`<sup>Optional</sup> <a name="forceConflictsInput" id="@cdktn/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.property.forceConflictsInput"></a>

```java
public java.lang.Boolean|IResolvable getForceConflictsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `forceConflicts`<sup>Required</sup> <a name="forceConflicts" id="@cdktn/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.property.forceConflicts"></a>

```java
public java.lang.Boolean|IResolvable getForceConflicts();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-kubernetes.manifest.ManifestFieldManagerOutputReference.property.internalValue"></a>

```java
public ManifestFieldManager getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-kubernetes.manifest.ManifestFieldManager">ManifestFieldManager</a>

---


### ManifestTimeoutsOutputReference <a name="ManifestTimeoutsOutputReference" id="@cdktn/provider-kubernetes.manifest.ManifestTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.kubernetes.manifest.ManifestTimeoutsOutputReference;

new ManifestTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestTimeouts">ManifestTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-kubernetes.manifest.ManifestTimeoutsOutputReference.property.internalValue"></a>

```java
public ManifestTimeouts getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-kubernetes.manifest.ManifestTimeouts">ManifestTimeouts</a>

---


### ManifestWaitConditionList <a name="ManifestWaitConditionList" id="@cdktn/provider-kubernetes.manifest.ManifestWaitConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.manifest.ManifestWaitConditionList.Initializer"></a>

```java
import io.cdktn.providers.kubernetes.manifest.ManifestWaitConditionList;

new ManifestWaitConditionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-kubernetes.manifest.ManifestWaitConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestWaitConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-kubernetes.manifest.ManifestWaitConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitConditionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitConditionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitConditionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitConditionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitConditionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-kubernetes.manifest.ManifestWaitConditionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-kubernetes.manifest.ManifestWaitConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-kubernetes.manifest.ManifestWaitConditionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-kubernetes.manifest.ManifestWaitConditionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-kubernetes.manifest.ManifestWaitConditionList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-kubernetes.manifest.ManifestWaitConditionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-kubernetes.manifest.ManifestWaitConditionList.get"></a>

```java
public ManifestWaitConditionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-kubernetes.manifest.ManifestWaitConditionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitConditionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitConditionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitConditionList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitCondition">ManifestWaitCondition</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-kubernetes.manifest.ManifestWaitConditionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-kubernetes.manifest.ManifestWaitConditionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-kubernetes.manifest.ManifestWaitConditionList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ManifestWaitCondition> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitCondition">ManifestWaitCondition</a>>

---


### ManifestWaitConditionOutputReference <a name="ManifestWaitConditionOutputReference" id="@cdktn/provider-kubernetes.manifest.ManifestWaitConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.kubernetes.manifest.ManifestWaitConditionOutputReference;

new ManifestWaitConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.resetStatus"></a>

```java
public void resetStatus()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitCondition">ManifestWaitCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-kubernetes.manifest.ManifestWaitConditionOutputReference.property.internalValue"></a>

```java
public IResolvable|ManifestWaitCondition getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitCondition">ManifestWaitCondition</a>

---


### ManifestWaitForOutputReference <a name="ManifestWaitForOutputReference" id="@cdktn/provider-kubernetes.manifest.ManifestWaitForOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.manifest.ManifestWaitForOutputReference.Initializer"></a>

```java
import io.cdktn.providers.kubernetes.manifest.ManifestWaitForOutputReference;

new ManifestWaitForOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitForOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitForOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-kubernetes.manifest.ManifestWaitForOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestWaitForOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitForOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitForOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitForOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitForOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitForOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitForOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitForOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitForOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitForOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitForOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitForOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitForOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitForOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitForOutputReference.resetFields">resetFields</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-kubernetes.manifest.ManifestWaitForOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestWaitForOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestWaitForOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestWaitForOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestWaitForOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestWaitForOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestWaitForOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestWaitForOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestWaitForOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestWaitForOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestWaitForOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestWaitForOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestWaitForOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestWaitForOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestWaitForOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestWaitForOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestWaitForOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestWaitForOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestWaitForOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestWaitForOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-kubernetes.manifest.ManifestWaitForOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-kubernetes.manifest.ManifestWaitForOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-kubernetes.manifest.ManifestWaitForOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-kubernetes.manifest.ManifestWaitForOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFields` <a name="resetFields" id="@cdktn/provider-kubernetes.manifest.ManifestWaitForOutputReference.resetFields"></a>

```java
public void resetFields()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitForOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitForOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitForOutputReference.property.fieldsInput">fieldsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitForOutputReference.property.fields">fields</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitForOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitFor">ManifestWaitFor</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-kubernetes.manifest.ManifestWaitForOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-kubernetes.manifest.ManifestWaitForOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fieldsInput`<sup>Optional</sup> <a name="fieldsInput" id="@cdktn/provider-kubernetes.manifest.ManifestWaitForOutputReference.property.fieldsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFieldsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-kubernetes.manifest.ManifestWaitForOutputReference.property.fields"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFields();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-kubernetes.manifest.ManifestWaitForOutputReference.property.internalValue"></a>

```java
public IResolvable|ManifestWaitFor getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitFor">ManifestWaitFor</a>

---


### ManifestWaitOutputReference <a name="ManifestWaitOutputReference" id="@cdktn/provider-kubernetes.manifest.ManifestWaitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.manifest.ManifestWaitOutputReference.Initializer"></a>

```java
import io.cdktn.providers.kubernetes.manifest.ManifestWaitOutputReference;

new ManifestWaitOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-kubernetes.manifest.ManifestWaitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestWaitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitOutputReference.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitOutputReference.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitOutputReference.resetFields">resetFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitOutputReference.resetRollout">resetRollout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-kubernetes.manifest.ManifestWaitOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestWaitOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestWaitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestWaitOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestWaitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestWaitOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestWaitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestWaitOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestWaitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestWaitOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestWaitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestWaitOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestWaitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestWaitOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestWaitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestWaitOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestWaitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestWaitOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestWaitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-kubernetes.manifest.ManifestWaitOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-kubernetes.manifest.ManifestWaitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-kubernetes.manifest.ManifestWaitOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-kubernetes.manifest.ManifestWaitOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-kubernetes.manifest.ManifestWaitOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCondition` <a name="putCondition" id="@cdktn/provider-kubernetes.manifest.ManifestWaitOutputReference.putCondition"></a>

```java
public void putCondition(IResolvable|java.util.List<ManifestWaitCondition> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-kubernetes.manifest.ManifestWaitOutputReference.putCondition.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitCondition">ManifestWaitCondition</a>>

---

##### `resetCondition` <a name="resetCondition" id="@cdktn/provider-kubernetes.manifest.ManifestWaitOutputReference.resetCondition"></a>

```java
public void resetCondition()
```

##### `resetFields` <a name="resetFields" id="@cdktn/provider-kubernetes.manifest.ManifestWaitOutputReference.resetFields"></a>

```java
public void resetFields()
```

##### `resetRollout` <a name="resetRollout" id="@cdktn/provider-kubernetes.manifest.ManifestWaitOutputReference.resetRollout"></a>

```java
public void resetRollout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitOutputReference.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitConditionList">ManifestWaitConditionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitOutputReference.property.conditionInput">conditionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitCondition">ManifestWaitCondition</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitOutputReference.property.fieldsInput">fieldsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitOutputReference.property.rolloutInput">rolloutInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitOutputReference.property.fields">fields</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitOutputReference.property.rollout">rollout</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-kubernetes.manifest.ManifestWait">ManifestWait</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-kubernetes.manifest.ManifestWaitOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-kubernetes.manifest.ManifestWaitOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-kubernetes.manifest.ManifestWaitOutputReference.property.condition"></a>

```java
public ManifestWaitConditionList getCondition();
```

- *Type:* <a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitConditionList">ManifestWaitConditionList</a>

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktn/provider-kubernetes.manifest.ManifestWaitOutputReference.property.conditionInput"></a>

```java
public IResolvable|java.util.List<ManifestWaitCondition> getConditionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-kubernetes.manifest.ManifestWaitCondition">ManifestWaitCondition</a>>

---

##### `fieldsInput`<sup>Optional</sup> <a name="fieldsInput" id="@cdktn/provider-kubernetes.manifest.ManifestWaitOutputReference.property.fieldsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFieldsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `rolloutInput`<sup>Optional</sup> <a name="rolloutInput" id="@cdktn/provider-kubernetes.manifest.ManifestWaitOutputReference.property.rolloutInput"></a>

```java
public java.lang.Boolean|IResolvable getRolloutInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-kubernetes.manifest.ManifestWaitOutputReference.property.fields"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFields();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `rollout`<sup>Required</sup> <a name="rollout" id="@cdktn/provider-kubernetes.manifest.ManifestWaitOutputReference.property.rollout"></a>

```java
public java.lang.Boolean|IResolvable getRollout();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-kubernetes.manifest.ManifestWaitOutputReference.property.internalValue"></a>

```java
public ManifestWait getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-kubernetes.manifest.ManifestWait">ManifestWait</a>

---



