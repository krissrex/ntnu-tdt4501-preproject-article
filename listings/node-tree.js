// Icon could be configured as default + optional overrides

var exampleTree = {
  type: "root",
  children: [
    {
      type: "EResource",
      name: "MyEcore.ecore",
      icon: "",
      id: "1",
      properties: [],
      children: [
        {
          type: "EPackage",
          name: "my-ecore",
          icon: "",
          id: "2",
          properties: [],
          children: [
            {
              type: "EClass",
              name: "Person",
              icon: "",
              id: "3",
              state: {
                selected: true,
                valid: false,
                dirty: true,
              },
              properties: [],
              children: [
                {
                  type: "EAttribute",
                  name: "age",
                  icon: "",
                  id: "4",
                  properties: [
                    {
                      name: "Value",
                      value: 25,
                      label: "This is JSON-Forms territory",
                    },
                  ],
                },
              ],
            },
            {
              type: "EClass",
              name: "MyOtherClass",
              icon: "",
              id: "4",
              properties: [],
              children: [],
            },
          ],
        },
      ],
    },
  ],
};
