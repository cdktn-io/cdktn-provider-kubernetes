# `dataKubernetesEndpointSliceV1` Submodule <a name="`dataKubernetesEndpointSliceV1` Submodule" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataKubernetesEndpointSliceV1 <a name="DataKubernetesEndpointSliceV1" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.1.0/docs/data-sources/endpoint_slice_v1 kubernetes_endpoint_slice_v1}.

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.Initializer"></a>

```java
import io.cdktn.providers.kubernetes.data_kubernetes_endpoint_slice_v1.DataKubernetesEndpointSliceV1;

DataKubernetesEndpointSliceV1.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .metadata(DataKubernetesEndpointSliceV1Metadata)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.Initializer.parameter.metadata">metadata</a></code> | <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata">DataKubernetesEndpointSliceV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.1.0/docs/data-sources/endpoint_slice_v1#id DataKubernetesEndpointSliceV1#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.Initializer.parameter.metadata"></a>

- *Type:* <a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata">DataKubernetesEndpointSliceV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.1.0/docs/data-sources/endpoint_slice_v1#metadata DataKubernetesEndpointSliceV1#metadata}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.1.0/docs/data-sources/endpoint_slice_v1#id DataKubernetesEndpointSliceV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

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

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putMetadata` <a name="putMetadata" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.putMetadata"></a>

```java
public void putMetadata(DataKubernetesEndpointSliceV1Metadata value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata">DataKubernetesEndpointSliceV1Metadata</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.resetId"></a>

```java
public void resetId()
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

```java
import io.cdktn.providers.kubernetes.data_kubernetes_endpoint_slice_v1.DataKubernetesEndpointSliceV1;

DataKubernetesEndpointSliceV1.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.isTerraformElement"></a>

```java
import io.cdktn.providers.kubernetes.data_kubernetes_endpoint_slice_v1.DataKubernetesEndpointSliceV1;

DataKubernetesEndpointSliceV1.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.isTerraformDataSource"></a>

```java
import io.cdktn.providers.kubernetes.data_kubernetes_endpoint_slice_v1.DataKubernetesEndpointSliceV1;

DataKubernetesEndpointSliceV1.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.generateConfigForImport"></a>

```java
import io.cdktn.providers.kubernetes.data_kubernetes_endpoint_slice_v1.DataKubernetesEndpointSliceV1;

DataKubernetesEndpointSliceV1.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataKubernetesEndpointSliceV1.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataKubernetesEndpointSliceV1 resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataKubernetesEndpointSliceV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataKubernetesEndpointSliceV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.1.0/docs/data-sources/endpoint_slice_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataKubernetesEndpointSliceV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.addressType">addressType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.endpoint">endpoint</a></code> | <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList">DataKubernetesEndpointSliceV1EndpointList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.metadata">metadata</a></code> | <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference">DataKubernetesEndpointSliceV1MetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.port">port</a></code> | <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList">DataKubernetesEndpointSliceV1PortList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.metadataInput">metadataInput</a></code> | <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata">DataKubernetesEndpointSliceV1Metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `addressType`<sup>Required</sup> <a name="addressType" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.addressType"></a>

```java
public java.lang.String getAddressType();
```

- *Type:* java.lang.String

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.endpoint"></a>

```java
public DataKubernetesEndpointSliceV1EndpointList getEndpoint();
```

- *Type:* <a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList">DataKubernetesEndpointSliceV1EndpointList</a>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.metadata"></a>

```java
public DataKubernetesEndpointSliceV1MetadataOutputReference getMetadata();
```

- *Type:* <a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference">DataKubernetesEndpointSliceV1MetadataOutputReference</a>

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.port"></a>

```java
public DataKubernetesEndpointSliceV1PortList getPort();
```

- *Type:* <a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList">DataKubernetesEndpointSliceV1PortList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.metadataInput"></a>

```java
public DataKubernetesEndpointSliceV1Metadata getMetadataInput();
```

- *Type:* <a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata">DataKubernetesEndpointSliceV1Metadata</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataKubernetesEndpointSliceV1Config <a name="DataKubernetesEndpointSliceV1Config" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.Initializer"></a>

```java
import io.cdktn.providers.kubernetes.data_kubernetes_endpoint_slice_v1.DataKubernetesEndpointSliceV1Config;

DataKubernetesEndpointSliceV1Config.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .metadata(DataKubernetesEndpointSliceV1Metadata)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.property.metadata">metadata</a></code> | <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata">DataKubernetesEndpointSliceV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.1.0/docs/data-sources/endpoint_slice_v1#id DataKubernetesEndpointSliceV1#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.property.metadata"></a>

```java
public DataKubernetesEndpointSliceV1Metadata getMetadata();
```

- *Type:* <a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata">DataKubernetesEndpointSliceV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.1.0/docs/data-sources/endpoint_slice_v1#metadata DataKubernetesEndpointSliceV1#metadata}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Config.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.1.0/docs/data-sources/endpoint_slice_v1#id DataKubernetesEndpointSliceV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataKubernetesEndpointSliceV1Endpoint <a name="DataKubernetesEndpointSliceV1Endpoint" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Endpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Endpoint.Initializer"></a>

```java
import io.cdktn.providers.kubernetes.data_kubernetes_endpoint_slice_v1.DataKubernetesEndpointSliceV1Endpoint;

DataKubernetesEndpointSliceV1Endpoint.builder()
    .build();
```


### DataKubernetesEndpointSliceV1EndpointCondition <a name="DataKubernetesEndpointSliceV1EndpointCondition" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointCondition.Initializer"></a>

```java
import io.cdktn.providers.kubernetes.data_kubernetes_endpoint_slice_v1.DataKubernetesEndpointSliceV1EndpointCondition;

DataKubernetesEndpointSliceV1EndpointCondition.builder()
    .build();
```


### DataKubernetesEndpointSliceV1EndpointTargetRef <a name="DataKubernetesEndpointSliceV1EndpointTargetRef" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRef"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRef.Initializer"></a>

```java
import io.cdktn.providers.kubernetes.data_kubernetes_endpoint_slice_v1.DataKubernetesEndpointSliceV1EndpointTargetRef;

DataKubernetesEndpointSliceV1EndpointTargetRef.builder()
    .build();
```


### DataKubernetesEndpointSliceV1Metadata <a name="DataKubernetesEndpointSliceV1Metadata" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata.Initializer"></a>

```java
import io.cdktn.providers.kubernetes.data_kubernetes_endpoint_slice_v1.DataKubernetesEndpointSliceV1Metadata;

DataKubernetesEndpointSliceV1Metadata.builder()
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .generateName(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .name(java.lang.String)
//  .namespace(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | An unstructured key value map stored with the endpoint_slice that may be used to store arbitrary metadata. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata.property.generateName">generateName</a></code> | <code>java.lang.String</code> | Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Map of string keys and values that can be used to organize and categorize (scope and select) the endpoint_slice. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata.property.name">name</a></code> | <code>java.lang.String</code> | Name of the endpoint_slice, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Namespace defines the space within which name of the endpoint_slice must be unique. |

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

An unstructured key value map stored with the endpoint_slice that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.1.0/docs/data-sources/endpoint_slice_v1#annotations DataKubernetesEndpointSliceV1#annotations}

---

##### `generateName`<sup>Optional</sup> <a name="generateName" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata.property.generateName"></a>

```java
public java.lang.String getGenerateName();
```

- *Type:* java.lang.String

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. More info: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.1.0/docs/data-sources/endpoint_slice_v1#generate_name DataKubernetesEndpointSliceV1#generate_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Map of string keys and values that can be used to organize and categorize (scope and select) the endpoint_slice.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.1.0/docs/data-sources/endpoint_slice_v1#labels DataKubernetesEndpointSliceV1#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the endpoint_slice, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.1.0/docs/data-sources/endpoint_slice_v1#name DataKubernetesEndpointSliceV1#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Namespace defines the space within which name of the endpoint_slice must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/3.1.0/docs/data-sources/endpoint_slice_v1#namespace DataKubernetesEndpointSliceV1#namespace}

---

### DataKubernetesEndpointSliceV1Port <a name="DataKubernetesEndpointSliceV1Port" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Port"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Port.Initializer"></a>

```java
import io.cdktn.providers.kubernetes.data_kubernetes_endpoint_slice_v1.DataKubernetesEndpointSliceV1Port;

DataKubernetesEndpointSliceV1Port.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataKubernetesEndpointSliceV1EndpointConditionList <a name="DataKubernetesEndpointSliceV1EndpointConditionList" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.Initializer"></a>

```java
import io.cdktn.providers.kubernetes.data_kubernetes_endpoint_slice_v1.DataKubernetesEndpointSliceV1EndpointConditionList;

new DataKubernetesEndpointSliceV1EndpointConditionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

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

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.get"></a>

```java
public DataKubernetesEndpointSliceV1EndpointConditionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataKubernetesEndpointSliceV1EndpointConditionOutputReference <a name="DataKubernetesEndpointSliceV1EndpointConditionOutputReference" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.kubernetes.data_kubernetes_endpoint_slice_v1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference;

new DataKubernetesEndpointSliceV1EndpointConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.property.ready">ready</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.property.serving">serving</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.property.terminating">terminating</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointCondition">DataKubernetesEndpointSliceV1EndpointCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ready`<sup>Required</sup> <a name="ready" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.property.ready"></a>

```java
public IResolvable getReady();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `serving`<sup>Required</sup> <a name="serving" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.property.serving"></a>

```java
public IResolvable getServing();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `terminating`<sup>Required</sup> <a name="terminating" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.property.terminating"></a>

```java
public IResolvable getTerminating();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionOutputReference.property.internalValue"></a>

```java
public DataKubernetesEndpointSliceV1EndpointCondition getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointCondition">DataKubernetesEndpointSliceV1EndpointCondition</a>

---


### DataKubernetesEndpointSliceV1EndpointList <a name="DataKubernetesEndpointSliceV1EndpointList" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.Initializer"></a>

```java
import io.cdktn.providers.kubernetes.data_kubernetes_endpoint_slice_v1.DataKubernetesEndpointSliceV1EndpointList;

new DataKubernetesEndpointSliceV1EndpointList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

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

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.get"></a>

```java
public DataKubernetesEndpointSliceV1EndpointOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataKubernetesEndpointSliceV1EndpointOutputReference <a name="DataKubernetesEndpointSliceV1EndpointOutputReference" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.Initializer"></a>

```java
import io.cdktn.providers.kubernetes.data_kubernetes_endpoint_slice_v1.DataKubernetesEndpointSliceV1EndpointOutputReference;

new DataKubernetesEndpointSliceV1EndpointOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.property.addresses">addresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList">DataKubernetesEndpointSliceV1EndpointConditionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.property.nodeName">nodeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.property.targetRef">targetRef</a></code> | <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList">DataKubernetesEndpointSliceV1EndpointTargetRefList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.property.zone">zone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Endpoint">DataKubernetesEndpointSliceV1Endpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addresses`<sup>Required</sup> <a name="addresses" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.property.addresses"></a>

```java
public java.util.List<java.lang.String> getAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.property.condition"></a>

```java
public DataKubernetesEndpointSliceV1EndpointConditionList getCondition();
```

- *Type:* <a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointConditionList">DataKubernetesEndpointSliceV1EndpointConditionList</a>

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `nodeName`<sup>Required</sup> <a name="nodeName" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.property.nodeName"></a>

```java
public java.lang.String getNodeName();
```

- *Type:* java.lang.String

---

##### `targetRef`<sup>Required</sup> <a name="targetRef" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.property.targetRef"></a>

```java
public DataKubernetesEndpointSliceV1EndpointTargetRefList getTargetRef();
```

- *Type:* <a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList">DataKubernetesEndpointSliceV1EndpointTargetRefList</a>

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointOutputReference.property.internalValue"></a>

```java
public DataKubernetesEndpointSliceV1Endpoint getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Endpoint">DataKubernetesEndpointSliceV1Endpoint</a>

---


### DataKubernetesEndpointSliceV1EndpointTargetRefList <a name="DataKubernetesEndpointSliceV1EndpointTargetRefList" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.Initializer"></a>

```java
import io.cdktn.providers.kubernetes.data_kubernetes_endpoint_slice_v1.DataKubernetesEndpointSliceV1EndpointTargetRefList;

new DataKubernetesEndpointSliceV1EndpointTargetRefList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

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

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.get"></a>

```java
public DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference <a name="DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.Initializer"></a>

```java
import io.cdktn.providers.kubernetes.data_kubernetes_endpoint_slice_v1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference;

new DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.property.fieldPath">fieldPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.property.resourceVersion">resourceVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRef">DataKubernetesEndpointSliceV1EndpointTargetRef</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fieldPath`<sup>Required</sup> <a name="fieldPath" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.property.fieldPath"></a>

```java
public java.lang.String getFieldPath();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `resourceVersion`<sup>Required</sup> <a name="resourceVersion" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.property.resourceVersion"></a>

```java
public java.lang.String getResourceVersion();
```

- *Type:* java.lang.String

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRefOutputReference.property.internalValue"></a>

```java
public DataKubernetesEndpointSliceV1EndpointTargetRef getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1EndpointTargetRef">DataKubernetesEndpointSliceV1EndpointTargetRef</a>

---


### DataKubernetesEndpointSliceV1MetadataOutputReference <a name="DataKubernetesEndpointSliceV1MetadataOutputReference" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.Initializer"></a>

```java
import io.cdktn.providers.kubernetes.data_kubernetes_endpoint_slice_v1.DataKubernetesEndpointSliceV1MetadataOutputReference;

new DataKubernetesEndpointSliceV1MetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.resetAnnotations"></a>

```java
public void resetAnnotations()
```

##### `resetGenerateName` <a name="resetGenerateName" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.resetGenerateName"></a>

```java
public void resetGenerateName()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.resetNamespace"></a>

```java
public void resetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.generation">generation</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.resourceVersion">resourceVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.annotationsInput">annotationsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.generateNameInput">generateNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.generateName">generateName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata">DataKubernetesEndpointSliceV1Metadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.generation"></a>

```java
public java.lang.Number getGeneration();
```

- *Type:* java.lang.Number

---

##### `resourceVersion`<sup>Required</sup> <a name="resourceVersion" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.resourceVersion"></a>

```java
public java.lang.String getResourceVersion();
```

- *Type:* java.lang.String

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.annotationsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotationsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `generateNameInput`<sup>Optional</sup> <a name="generateNameInput" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.generateNameInput"></a>

```java
public java.lang.String getGenerateNameInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `generateName`<sup>Required</sup> <a name="generateName" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.generateName"></a>

```java
public java.lang.String getGenerateName();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1MetadataOutputReference.property.internalValue"></a>

```java
public DataKubernetesEndpointSliceV1Metadata getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Metadata">DataKubernetesEndpointSliceV1Metadata</a>

---


### DataKubernetesEndpointSliceV1PortList <a name="DataKubernetesEndpointSliceV1PortList" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.Initializer"></a>

```java
import io.cdktn.providers.kubernetes.data_kubernetes_endpoint_slice_v1.DataKubernetesEndpointSliceV1PortList;

new DataKubernetesEndpointSliceV1PortList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

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

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.get"></a>

```java
public DataKubernetesEndpointSliceV1PortOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataKubernetesEndpointSliceV1PortOutputReference <a name="DataKubernetesEndpointSliceV1PortOutputReference" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.Initializer"></a>

```java
import io.cdktn.providers.kubernetes.data_kubernetes_endpoint_slice_v1.DataKubernetesEndpointSliceV1PortOutputReference;

new DataKubernetesEndpointSliceV1PortOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.property.appProtocol">appProtocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.property.port">port</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Port">DataKubernetesEndpointSliceV1Port</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `appProtocol`<sup>Required</sup> <a name="appProtocol" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.property.appProtocol"></a>

```java
public java.lang.String getAppProtocol();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.property.port"></a>

```java
public java.lang.String getPort();
```

- *Type:* java.lang.String

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1PortOutputReference.property.internalValue"></a>

```java
public DataKubernetesEndpointSliceV1Port getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-kubernetes.dataKubernetesEndpointSliceV1.DataKubernetesEndpointSliceV1Port">DataKubernetesEndpointSliceV1Port</a>

---



