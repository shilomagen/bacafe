#!/bin/bash

# Login to AWS ECR
aws ecr get-login-password --region $AWS_REGION | \
docker login --username AWS --password-stdin $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com

# Build the Docker image with platform specification and no cache
docker build --platform linux/amd64 -f Dockerfile -t $ECR_BACAFE_WEBAPP_REPO_NAME .

# Tag the image
docker tag $ECR_BACAFE_WEBAPP_REPO_NAME:latest $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/$ECR_BACAFE_WEBAPP_REPO_NAME:latest

# Push the image to ECR
docker push $AWS_ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com/$ECR_BACAFE_WEBAPP_REPO_NAME:latest 