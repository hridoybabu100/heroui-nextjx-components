export const createAdtask = async (formData) => {
  "use server";

  const name = formData.get("name");
  console.log('This is a name :', name);
  
};
