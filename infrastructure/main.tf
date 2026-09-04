# This main.tf is used as a simple configuration referring to how Terraform itself should behave. 

terraform {
    backend "s3" {
           bucket       = "tfstate-gh"
    key          = "prod/terraform.tfstate"
    region       = "us-west-2"
    encrypt      = "true"
    use_lockfile = "true" # Requires Terraform 1.11+ and allows us to no longer need DynamoDB 

  }
    }

provider aws {
    region = "us-west-2"
}

provider archive {
    
}
