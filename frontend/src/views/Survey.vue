<template>
  <div class="w-screen">
    <iframe
      src="https://byu.az1.qualtrics.com/jfe/form/SV_0TlirmqjRR0PZv8"
      height="800px"
      width="600px"
    ></iframe>
    
  </div>
</template>

<script>
// import axios from "axios";

export default {
  name: "Survey",
  // props: ["taskId", "nextRoute"],
  // data() {
  //   return {
  //     questions: [],
  //     participantResponses: [],
  //   };
  // },
  // created() {
  //   console.log("Loaded");
  //   this.getQuestions();
  // },
  methods: {
    // async getQuestions() {
    //   try {
    //     let response = await axios.get(
    //       `/api/survey/${this.$route.query.from}/questions`
    //     );
    //     this.questions = response.data;
    //     for (let i = 0; i < this.questions.length; i++) {
    //       this.participantResponses.push({
    //         question: this.questions[i],
    //         participantResponse: "",
    //       });
    //     }
    //   } catch (error) {
    //     this.questions = [
    //       {
    //         _id: "-1",
    //         question: "An error occured in fetching your survey.",
    //         answers: [],
    //       },
    //     ];
    //   }
    // },
    // selectAnswer(answer, index) {
    //   // changing the correct response when they select a different answer
    //   this.participantResponses[index].participantResponse = answer;
    // },
    // submit() {
    //   axios.put(`/api/data/${this.$root.$data.participant._id}/surveyAnswers`, {
    //     surveyAnswers: this.participantResponses,
    //   });
    //   this.$router.replace(`/${this.$route.query.to}`);
    // },
  },
};
</script>
