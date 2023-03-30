document.getElementById('show-more').addEventListener('click', function() {
    document.getElementById('additional-symptoms').style.display = 'block';
    document.getElementById('show-more').style.display = 'none';
    document.getElementById('hide-more').style.display = 'block';
});

document.getElementById('hide-more').addEventListener('click', function() {
    document.getElementById('additional-symptoms').style.display = 'none';
    document.getElementById('hide-more').style.display = 'none';
    document.getElementById('show-more').style.display = 'block';
});

document.querySelector('#symptom-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const symptoms = document.querySelectorAll('input[type=checkbox]:checked');
    const symptomsArray = [];
    symptoms.forEach(symptom => {
        symptomsArray.push(symptom.value);
    });
    const symptomsString = symptomsArray.join(', ');
    // document.getElementById('symp').innerHTML = symptomsString;
    document.getElementById('symptom-form').style.display = 'none';
    document.getElementById('results').style.display = 'block';
}, false);
const Cancers = [
    {name: "Bladder Cancer", symptoms: ["Blood in urine", "Painful urination", "Frequent urination", "Urgency to urinate", "Urinary incontinence", "Back pain", "Pelvic pain", "Fatigue", "Weight loss", "Bone pain", "Swelling in the feet"]},
    {name:"Breast Cancer", symptoms: ["Lump in breast tissue", "Nipple Discharge", "Breast/Nipple Pain", "Swelling near breast"]},
    {name:"Cervical Cancer", symptoms:["Abnormal vaginal bleeding", "Pelvic pain", "Pain during sexual intercourse", "Unusual vaginal discharge", "Fatigue", "Weight loss", "Swelling in one or both legs", "Loss of appetite"]},
    {name:"Brain Cancer", symptoms:["Headaches", "Nausea", "Vomiting", "Seizures", "Weakness", "Changes in vision", "Changes in speech", "Changes in personality", "Changes in balance", "Changes in coordination", "Changes in memory", "Changes in mood", "Changes in sleep patterns", "Changes in appetite", "Changes in bladder or bowel function", "Changes in sexual function"]},
    {name:"Kidney Cancer", symptoms:["Blood in urine", "Painful urination", "Frequent urination", "Urgency to urinate", "Urinary incontinence", "Back pain", "Pelvic pain", "Fatigue", "Weight loss", "Bone pain", "Swelling in the feet"]},
    {name:"Leukemia", symptoms:["Fever", "Fatigue", "Night sweats", "Weight loss", "Loss of appetite", "Bone pain", "Easy bruising", "Frequent infections", "Bleeding", "Swollen lymph nodes", "Shortness of breath", "Cough", "Chest pain", "Headaches", "Dizziness", "Blurred vision", "Numbness or tingling in the hands or feet", "Confusion", "Memory loss", "Seizures", "Changes in personality", "Changes in sleep patterns", "Changes in appetite", "Changes in bladder or bowel function", "Changes in sexual function"]},
    {name:"Liver Cancer", symptoms:["Abdominal pain", "Nausea", "Vomiting", "Loss of appetite", "Weight loss", "Fatigue", "Jaundice", "Itching", "Swelling in the abdomen", "Swelling in the legs", "Swelling in the feet", "Swelling in the hands", "Swelling in the face", "Swelling in the neck", "Swelling in the arms", "Swelling in the chest"]},
    {name:"Lung Cancer", symptoms:["Cough", "Coughing up blood", "Coughing up mucus", "Shortness of breath", "Wheezing", "Chest pain", "Chest tightness", "Fatigue", "Weight loss", "Loss of appetite", "Bone pain", "Swelling in the feet", "Swelling in the hands", "Swelling in the face", "Swelling in the neck", "Swelling in the arms", "Swelling in the chest"]},
    {name: "Lymphoma", symptoms:["Fever", "Fatigue", "Night sweats", "Weight loss", "Loss of appetite", "Bone pain", "Easy bruising", "Frequent infections", "Bleeding", "Swollen lymph nodes", "Shortness of breath", "Cough", "Chest pain", "Headaches", "Dizziness", "Blurred vision", "Numbness or tingling in the hands or feet", "Confusion", "Memory loss", "Seizures", "Changes in personality", "Changes in sleep patterns", "Changes in appetite", "Changes in bladder or bowel function", "Changes in sexual function"]},
    {name:"Ovarian Cancer", symptoms: ["Abdominal bloating", "Pelvic pain", "Difficulty eating or feeling full quickly", "Urinary symptoms", "Back pain", "Fatigue", "Nausea", "Vomiting", "Indigestion", "Constipation", "Diarrhea", "Menstrual changes", "Unexplained weight loss", "Shortness of breath", "Cough", "Chest pain", "Headaches", "Dizziness", "Blurred vision", "Numbness or tingling in the hands or feet", "Confusion", "Memory loss", "Seizures", "Changes in personality", "Changes in sleep patterns", "Changes in appetite", "Changes in bladder or bowel function", "Changes in sexual function"]},
    {name:"Prostate Cancer", symptoms: ["Trouble Urinating", "Blood in urine", "Painful urination", "Frequent urination", "Urgency to urinate", "Urinary incontinence", "Back pain", "Pelvic pain", "Fatigue", "Weight loss", "Bone pain", "Swelling in the feet"]},
    {name:"Skin Cancer", symptoms: ["A new growth or sore that does not heal", "A sore that bleeds, oozes or crusts", "A sore that is red, scaly or thick"]},
    {name:"Thyroid Cancer", symptoms: ["Neck pain", "Neck swelling", "Neck stiffness", "Trouble swallowing", "Hoarseness", "Voice changes", "Difficulty breathing", "Cough", "Chest pain", "Headaches", "Dizziness", "Blurred vision", "Numbness or tingling in the hands or feet", "Confusion", "Memory loss", "Seizures", "Changes in personality", "Changes in sleep patterns", "Changes in appetite", "Changes in bladder or bowel function", "Changes in sexual function"]},
    {name:"Vaginal Cancer", symptoms: ["Abnormal vaginal bleeding", "Pelvic pain", "Pain during sexual intercourse", "Unusual vaginal discharge", "Fatigue", "Weight loss", "Swelling in one or both legs", "Loss of appetite"]},
    {name: "Colorectal Cancer", symptoms: ["Rectal bleeding or blood in stool", "Abdominal Pain","Unexplained weight loss", "Weakness or fatigue", "A change in bowel habits, such as diarrhea or constipation","Feeling like you need to have a bowel movement that is not relieved by doing so","Nausea or vomiting","Gas, bloating or a feeling of fullness in the abdomen","Rectal pain or a feeling of fullness in the rectum"]},
];

const symptoms = [...new Set(Cancers.flatMap(cancer => cancer.symptoms))];

// function detectCancer(){
//     if()
// }