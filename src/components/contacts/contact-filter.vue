<template>
    <div class="filter">
        <b-row>
            <b-col cols="3">
                <h6>Filters</h6>
            </b-col>
            <b-col cols="7">
                
            </b-col>
            <b-col cols="2">
              <div class="icon">
                 <b-icon icon="search" style="width: 20px; height: 20px;"></b-icon>
              </div>
            </b-col>
        </b-row>


    <!-- select tag start -->
        <div>
            <b-form-group
            id="fieldset-1"
            label="Created:"
            label-for="input-1"
            >
            <b-form-select id="input-1" :options= "dateCreated"></b-form-select>
            </b-form-group>
        </div>
    <!-- select tag end -->
    <!-- select tag start -->
        <div>
            <b-form-group
            id="fieldset-2"
            label="Groups:"
            label-for="input-2"
            >
            <b-form-select id="input-2" :options= "groups"></b-form-select>
            </b-form-group>
        </div>
    <!-- select tag end -->
    <!-- select tag start -->
        <div>
            <b-form-group
            id="fieldset-3"
            label="Region:"
            label-for="input-3"
            >
            <b-form-select id="input-3" :options= "region"></b-form-select>
            </b-form-group>
        </div>
    <!-- select tag end -->
    <!-- select tag start -->
        <div>
            <b-form-group
            id="fieldset-4"
            label="Created By:"
            label-for="input-4"
            >
            <b-form-select id="input-4" :options= "agents"></b-form-select>
            </b-form-group>
        </div>
    <!-- select tag end -->
   
    </div>
</template>
<script>
export default {
    //options for the select boxes
    data() {
      return {
 
        agents: [
          { value: null, text: 'Elvin Anesu' },
          { value: 'a', text: 'Christabell' },
          { value: 'b', text: 'john Doe' }
        ],

        groups: [
          { value: null, text: 'group 1' },
          { value: 'a', text: 'group 2' },
          { value: 'b', text: 'group 3' }
        ],
        region: [
          { value: null, text: 'Harare-Warren Park' },
          { value: null, text: 'Harare-Southerton' },
          { value: 'a', text: 'Gweru' },
          { value: 'b', text: 'Rusape' }
        ],
         dateCreated: [
          { value: null, text: 'Today' },
          { value: 'a', text: 'Last week' },
          { value: 'b', text: 'Last month' }
        ]
      }
    }
}
</script>
<style scoped>
    .filter{
        padding:.25rem;
        border-left: 1px solid #ccc;
        text-align: left;
    }
    
</style>