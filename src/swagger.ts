
import swaggerAutogen from 'swagger-autogen';
const doc = {
    info: {
        version: 'v1.0.0',
        title: 'Swagger Demo Project',
        description: 'Implementation of Swagger with TypeScript'
    },
    servers: [
        {
            url: `http://localhost:5000/api`,
            description: ''
        },
    ],
    components: {
        schemas: {
            "Problem": {
                "type": "object",
                "properties": {
                    "pid": {
                        "type": "integer",
                        "format": "int32",

                    },
                    "title": {
                        "type": "string"
                    },
                    "level": {
                        "type": "string",
                        "enum": ["Easy", "Medium", "Hard"]
                    },
                    "companies": {
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    },
                    "topics": {
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    },
                    "statement": {
                        "type": "string"
                    },
                    "examples": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "input": { "type": "string" },
                                "output": { "type": "string" },
                                "explanation": { "type": "string" }
                            }
                        }
                    },
                    "sampleTest": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "input": { "type": "string" },
                                "output": { "type": "string" }
                            }
                        }
                    },
                    "testCases": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "input": { "type": "string" },
                                "output": { "type": "string" }
                            }
                        }
                    },
                    "noOfHiddenTests": {
                        "type": "integer",
                        "format": "int32"
                    }
                },
                "example": {
                    "$ref": "#/components/examples/example-1"
                }
            }
        }, "examples": {
            "ProblemExample": {
                "value": {
                    "title": "Two Sum",
                    "level": "Easy",
                    "companies": ["Google", "Facebook"],
                    "topics": ["Array", "Hashing"],
                    "statement": "Given an array of integers, find two numbers such that they add up to a specific target number.",
                    "examples": [
                        {
                            "input": "nums = [2, 7, 11, 15], target = 9",
                            "output": "[0, 1]",
                            "explanation": "Because nums[0] + nums[1] == 9, we return [0, 1]."
                        }
                    ],
                    "sampleTest": [
                        {
                            "input": "nums = [2, 7, 11, 15], target = 9",
                            "output": "[0, 1]"
                        }
                    ],
                    "testCases": [
                        {
                            "input": "nums = [2, 7, 11, 15], target = 9",
                            "output": "[0, 1]"
                        }
                    ],
                    "noOfHiddenTests": 10
                }
            }
        }
        ,

        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
            }
        }
    }
};

const outputFile = './swagger_output.json';
const endpointsFiles = ['./Router/problemRoutes.ts', './Router/userRoutes.ts'];

swaggerAutogen({ openapi: '3.0.0' })(outputFile, endpointsFiles, doc);