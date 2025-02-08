terraform {
  required_providers {
    azurerm = {
      source = "hashicorp/azurerm"
      version = "3.40.0"
    }
  }
}

provider "azurerm" {
   features {}
}

module "portfolioCluster" {
  source  = "Azure/aks/azurerm//examples/named_cluster"
  version = "6.2.0"
}