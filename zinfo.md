
using goocle cloud build: 
https://cloud.google.com/cloud-build/
go to console.


Tutorial to deploy application:
https://cloud.google.com/kubernetes-engine/docs/tutorials/hello-app


===============================================================================
# STEPS
Create project like single deployment node + react
Create Github repository "rsd-dk-2"

Create Project on GoogleCloud: burgerMenu / IAM & admin / Manage resources / Create new project
Add  Cloud-Build: burgerMenu / Cloud Build
In cloud build  -->  click [Enable Cloud Build API]
Create a triger: Trigers / "GitHub" / continue / select-Repo / {add setings} / click "Create Trigger" / optional-- "run trigger"

Create Kubernetes-Cluster: burgerMenu / Kubernetes Engine {wait} / Create-Cluster/ {add setings} / click "Create" and wait / click-project / 

in Kubernetes-Cluster: click the icon "Deploy" / {add setings "Repository-Provider: Cloud Source Repositories"}

After deployment, search for the button "Expose"
    The Kubernetes-Cluster by default uses the port 80, but in my node app Im using port 8080 
    so here I need to expose: 80 | 8080

# Kubernetes-Engine / Services
Finally the IP addres that you can use to access the app in the web is: 
External endpoints 35.224.140.82:80   <-- This addres is different for each deployment.


Kubernetes-Engine / Workloads / Edit / set the imagePullPolicy of the container to Always


Enabling Google Cloud Build
https://stephenmann.io/post/continuous-delivery-using-google-kubernetes-engine-and-google-cloud-build/

Once you do that, Cloud Build is enabled, but it cannot access your Kubernetes cluster. You’ll need to give it access. Do this by:

Open your Cloud Console to the “IAM & admin” subsection.
Click the “IAM” section.
Click the pencil icon next to the user named “######@cloudbuild.gserviceaccount.com”.
Select “Add New Role”.
Find “Kubernetes Engine Admin” and add it.
Click “Save”

===============================================================
    EXAMPLE OF YAML FILE IN SERVICES 
===============================================================
apiVersion: v1
kind: Service
metadata:
  creationTimestamp: 2019-01-24T04:08:46Z
  labels:
    app: nginx-1
  name: nginx-1-service
  namespace: default
  resourceVersion: "2218"
  selfLink: /api/v1/namespaces/default/services/nginx-1-service
  uid: beef4571-1f8d-11e9-8052-42010a800051
spec:
  clusterIP: 10.11.254.148
  externalTrafficPolicy: Cluster
  ports:
  - nodePort: 31991
    port: 80
    protocol: TCP
    targetPort: 8080
  selector:
    app: nginx-1
  sessionAffinity: None
  type: LoadBalancer
status:
  loadBalancer:
    ingress:
    - ip: 35.224.140.82

===============================================================